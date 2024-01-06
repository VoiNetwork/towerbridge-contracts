'reach 0.1';
'use strict';

const ContractParams = Object({
  sourceToken: Token,
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
    bridgeToken: Fun([UInt, Address], Null),  // Params: Amount to Transfer, Receiver address on Target Chain
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

  const [done, tokenCount] = parallelReduce([false, 0 ])
    .define(() => {
      V.bridgedTokens.set(tokenCount);
    })
    .invariant(balance() == 0)
    .invariant(balance(sourceToken) == tokenCount)
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
        return [done, tokenCount + amt ];
      }
    );

  transfer([balance(), [balance(sourceToken), sourceToken]]).to(Deployer);
  commit();

  exit();
});
