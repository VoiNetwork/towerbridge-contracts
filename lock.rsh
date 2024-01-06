'reach 0.1';
'use strict';

const ContractParams = Object({
  sourceToken: Token,  // source is the "natural" chain for the token, TestNet USDC = 10458941
  sourceChainId: UInt, // 1 = Algorand
  targetChainId: UInt, // 2 = Voi
  targetTokenId: UInt, // Token ID on Voi
});

export const main = Reach.App(() => {
  const Deployer = Participant('Deployer', {
    parameters: ContractParams,
    ready: Fun([], Null),
  });

  const UserAPI = API('UserAPI', {
    bridgeToken: Fun([UInt, Address], Null),                     // Params: Amount to Transfer, Receiver address on Target Chain
    unbridgeToken: Fun([UInt, Address, Bytes(52), UInt], Null),  // Parmas: amount, source chain sender, source chain tx id, source block number
  });

  const V = View({
    sourceToken: Token,
    targetChainId: UInt,
    targetTokenId: UInt,
    bridgedTokens: UInt,
  });
  init();

  Deployer.only(() => {
    const { sourceToken, targetChainId, targetTokenId } = declassify(interact.parameters);
  });
  Deployer.publish(sourceToken, targetChainId, targetTokenId);

  V.sourceToken.set(sourceToken);
  V.targetChainId.set(targetChainId);
  V.targetTokenId.set(targetTokenId);

  commit();

  Deployer.interact.ready();
  Deployer.publish();

  const [done, totalBridged] = parallelReduce([false, 0 ])
    .define(() => {
      V.bridgedTokens.set(totalBridged);
    })
    .invariant(balance() == 0)
    .invariant(balance(sourceToken) == totalBridged)
    .while(!done)
    .api(
      UserAPI.bridgeToken,
      (amt, _) => {
        assume(amt > 0, 'Amount of token bridged must be greater than zero');
      },
      (amt, _) => [0, [amt, sourceToken]],
      (amt, _, k) => {
        require(amt > 0);

        k(null);
        return [done, totalBridged + amt ];
      }
    )
    .api(
      UserAPI.unbridgeToken,
      (amt, _, _, _) => {
          assume(amt > 0, 'Amount of token to unbridge must be greater than zero');
          assume(balance(sourceToken) >= amt, 'Not enough token balance to unbridge');

          // todo: verify target chain tx is valid using ALGO.remote call to verification contract
      },
      (_, _, _, _) => [0, [ 0, sourceToken ]],
      (amt, _, _, _, k) => {
          require(amt > 0);
          require(balance(sourceToken) >= amt);
          transfer([0, [amt, sourceToken]]).to(this);

          k(null);
          return [done, totalBridged - amt];
      }
    )

  transfer([balance(), [balance(sourceToken), sourceToken]]).to(Deployer);
  commit();

  exit();
});
