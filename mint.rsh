'reach 0.1';
'use strict';

const ContractParams = Object({
    sourceTokenId: UInt, // 10458941 = TestNet USDC
    sourceChainId: UInt, // 1 = Algorand
    w_name: Bytes(32),
    w_symbol: Bytes(8),
    w_url: Bytes(96),
    w_metadata: Bytes(32),
    w_supply: UInt,
    w_decimals: UInt,
});

export const main = Reach.App(() => {
    const Deployer = Participant('Deployer', {
        parameters: ContractParams,
        ready: Fun([], Null),
    });

    const UserAPI = API('UserAPI', {
        mintToken: Fun([UInt, Address, Bytes(52), UInt], Null),  // Parmas: amount, source chain sender, source chain tx id, source block number
        burnToken: Fun([UInt, Address], Null),                   // Parmas: amount, target chain receiver
    });

    const V = View({
        sourceTokenId: UInt,
        sourceChainId: UInt,
        wrappedToken: Token,
        wrappedTokenSupply: UInt,
        wrappedTokenMinted: UInt,
    });
    init();

    Deployer.only(() => {
        const { sourceTokenId, sourceChainId, w_name, w_symbol, w_url, w_metadata, w_supply, w_decimals } = declassify(interact.parameters);
    });
    Deployer.publish(sourceTokenId, sourceChainId, w_name, w_symbol, w_url, w_metadata, w_supply, w_decimals);

    V.sourceTokenId.set(sourceTokenId);
    V.sourceChainId.set(sourceChainId);
    V.wrappedTokenSupply.set(w_supply);

    // mint wrapped token
    const wrappedToken = new Token({ name: w_name, symbol: w_symbol, url: w_url, metadata: w_metadata, supply: w_supply, decimals: w_decimals });
    V.wrappedToken.set(wrappedToken);

    commit();

    Deployer.interact.ready();
    Deployer.publish();

    const [done, totalMinted] = parallelReduce([false, 0])
        .define(() => {
            V.wrappedTokenMinted.set(totalMinted);
        })
        .invariant(balance() == 0)
        .invariant(balance(wrappedToken) + totalMinted == w_supply)
        .while(!done || !Token.destroyed(wrappedToken))
        .api(
            UserAPI.mintToken,
            (amt, _, _, _) => {
                assume(amt > 0, 'Amount of token mint must be greater than zero');
                assume(balance(wrappedToken) >= amt, 'Not enough wrapped token balance to mint');

                // todo: verify source chain tx is valid using ALGO.remote call to verification contract
            },
            (_, _, _, _) => [0, [0, wrappedToken]],
            (amt, _, _, _, k) => {
                require(amt > 0);
                require(balance(wrappedToken) >= amt);
                transfer([0, [amt, wrappedToken]]).to(this);

                k(null);
                return [done, totalMinted + amt];
            }
        )
        .api(UserAPI.burnToken,
            (amt, _) => {
                assume(amt > 0, 'Amount of token burn must be greater than zero');
                assume(balance(wrappedToken) >= amt, 'Not enough wrapped token balance to burn');
            },
            (amt, _) => [0, [amt, wrappedToken]],
            (amt, _, k) => {
                require(amt > 0);

                k(null);
                return [done, totalMinted - amt];
            }
        );

    transfer([balance(), [balance(wrappedToken), wrappedToken]]).to(Deployer);
    commit();

    exit();
});
