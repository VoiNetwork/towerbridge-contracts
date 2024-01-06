'reach 0.1';
'use strict';

const myFromMaybe = (m) => fromMaybe(m, (() => 0), ((x) => x));

const ContractParams = Object({
  sourceToken: Token,
  targetChainId: UInt, // 2 = Voi
  targetTokenId: UInt, // Token ID on Voi
});

export const main = Reach.App(() => {
  const Deployer = Participant('Deployer', {
    parameters: ContractParams,
    ready: Fun([], Null),
  });

  const UserAPI = API('UserAPI', {
    sendToken: Fun([UInt, Address], Null),  // Params: Amount to Transfer, Receiver address on Target Chain
    receiveToken: Fun([], UInt),            // Params: Remove tokens (for a two-way bridge), Return: Amount of tokens removed
  });

  const BridgeAPI = API('BridgeAPI', {
    completeBridgeOut: Fun([Address], UInt),   // Params: Receiver address on Target Chain, Return: Amount of tokens removed
    completeBridgeIn: Fun([Address, UInt], UInt),    // Params: Receiver address on Target Chain, Return: Amount of tokens to add back
  });

  const V = View({
    sourceToken: Token,
    targetChainId: UInt,
    targetTokenId: UInt,
    escrowBalance: UInt,
    poolBalance: UInt,
    getBridgeableBalance: Fun([Address], UInt),
  });
  init();

  Deployer.only(() => {
    const { sourceToken, targetChainId, targetTokenId } = declassify(interact.parameters);
  });
  Deployer.publish( sourceToken, targetChainId, targetTokenId );

  const userMap = new Map(Address,UInt); // amount of tokens allocated to a user to be withdrawn from pool for a 2-way bridge
  
  V.getBridgeableBalance.set((m) => myFromMaybe(userMap[m]));
  V.sourceToken.set(sourceToken);
  V.targetChainId.set(targetChainId);
  V.targetTokenId.set(targetTokenId);

  commit();

  Deployer.interact.ready();
  Deployer.publish();

  const [ done, escrowTotal, poolTotal ] = parallelReduce([ false, 0, 0 ])
    .define(() => {
      V.escrowBalance.set(escrowTotal);
      V.poolBalance.set(poolTotal);
    })
    .invariant(balance() == 0)
    .invariant(balance(sourceToken) == poolTotal + escrowTotal)
    .while(!done)
    .api(
      UserAPI.sendToken,
      (amt, _) => {
        assume(amt > 0, 'Amount of token bridged must be greater than zero');
      },
      (amt,_) => [ 0, [ amt, sourceToken ]],
      (amt,_,k) => {
        require(amt > 0);
        const userAmt = myFromMaybe(userMap[this]);
        userMap[this] = userAmt + amt;

        k(null);
        return [ done, escrowTotal + amt, poolTotal ];
      }
    )
    .api(
      UserAPI.receiveToken,
      () => {
        assume(myFromMaybe(userMap[this]) > 0, 'User must have tokens allocated to them');
        assume(escrowTotal > 0, 'Escrow must have tokens to withdraw');
        assume(balance(sourceToken) >= myFromMaybe(userMap[this]), 'User must have enough tokens to withdraw');
      },
      () => [ 0, [ 0, sourceToken ]],
      (k) => {
        const amt = myFromMaybe(userMap[this]);
        require(amt > 0);
        require(escrowTotal > 0);
        require(balance(sourceToken) >= amt);

        userMap[this] = 0;

        transfer([ 0, [ amt, sourceToken ]]).to(this);

        k(amt);
        return [ done, escrowTotal - amt, poolTotal ];
      }
    )
    .api(
      BridgeAPI.completeBridgeOut,
      (receiver) => {
        assume(myFromMaybe(userMap[receiver]) > 0, 'User must have tokens allocated to them');
        assume(escrowTotal > myFromMaybe(userMap[receiver]), 'Escrow must have tokens to withdraw');
        assume(balance(sourceToken) >= myFromMaybe(userMap[receiver]), 'Contract must have enough tokens to withdraw');
      },
      (_) => [ 0, [ 0, sourceToken ]],
      (receiver,k) => {
        const amt = myFromMaybe(userMap[receiver]);
        require(amt > 0);
        require(poolTotal > 0);
        require(balance(sourceToken) >= amt);

        userMap[receiver] = 0;

        k(amt);
        return [ done, escrowTotal - amt, poolTotal + amt ];
      }
    )
    .api(
      BridgeAPI.completeBridgeIn,
      (_, amt) => {
        assume(amt > 0, 'Amount of token bridged must be greater than zero');
        assume(balance(sourceToken) >= amt, 'Contract must have enough tokens to withdraw');
        assume(poolTotal >= amt, 'Pool must have enough tokens to withdraw');
      },
      (_,_) => [ 0, [ 0, sourceToken ]],
      (receiver, amt, k) => {
        require(amt > 0);
        require(poolTotal > 0);
        require(balance(sourceToken) >= amt);
        
        const currentBalance = myFromMaybe(userMap[receiver]);

        userMap[receiver] = currentBalance + amt;

        k(currentBalance + amt);
        return [ done, escrowTotal + amt, poolTotal - amt ];
      }
    );

  transfer([ balance(), [ balance(sourceToken), sourceToken ]]).to(Deployer);
  commit();

  exit();
});
