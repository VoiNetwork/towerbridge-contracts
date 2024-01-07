import {loadStdlib} from '@reach-sh/stdlib';
import * as lockBackend from './build/lock.main.mjs';
import * as mintBackend from './build/mint.main.mjs';
import { ask, yesno, done } from '@reach-sh/stdlib/ask.mjs';
const stdlib = loadStdlib('ALGO');

/*stdlib.setSigningMonitor(async (evt, pre, post) => {
  console.log(evt);
  console.log(await pre);
  console.log(await post);
});*/

const fmt = (x,d) => stdlib.formatCurrency(x, d);
const getBalance = async (acct) => fmt(await stdlib.balanceOf(acct),6);

// deploy mint contract on Voi
const deployMintContract = async () => {
  return new Promise(async (resolve, reject) => {
    const acc = await stdlib.newTestAccount(stdlib.parseCurrency(100));

    /*stdlib.setProviderByEnv({
      ALGO_SERVER: 'https://testnet-api.voi.nodly.io',
      ALGO_PORT: '',
      ALGO_TOKEN_HEADER: 'X-Algo-API-Token',
      ALGO_TOKEN: '',
      ALGO_INDEXER_SERVER: 'https://testnet-idx.voi.nodly.io',
      ALGO_INDEXER_PORT: '',
      ALGO_INDEXER_TOKEN_HEADER: 'X-Indexer-API-Token',
      ALGO_INDEXER_TOKEN: '',
      REACH_ISOLATED_NETWORK: 'no',
      ALGO_NODE_WRITE_ONLY: 'yes',
    });*/

    const ctcMint = await acc.contract(mintBackend);

    ctcMint.p.Deployer({
      parameters: {
        sourceTokenId: 10458941,
        sourceChainId: 1, // 1 = Algorand
        w_name: 'wUSDC'.padEnd(32, "\0"),
        w_symbol: 'wUSDC'.padEnd(8,"\0"),
        w_url: 'https://centre.io'.padEnd(96, "\0"),
        w_metadata: ''.padEnd(32, "\0"),
        w_supply: stdlib.bigNumberify("18446744073709551615"),
        w_decimals: 6,
      },
      ready: async () => {
        console.log(`Contract has been deployed.`);

        const ctcMintInfo = await ctcMint.getInfo();
        console.log(`The Mint contract is deployed as = ${JSON.stringify(ctcMintInfo)}`);

        resolve(ctcMint); // Pass the ctcMintInfo as the resolve valueco
      }
    });
  });
}

// deploy lock contract on Algorand
const deployLockContract = async (targetTokenId) => {
  return new Promise(async (resolve, reject) => {
    // stdlib.setProviderByName("TestNet");

    const acc = await stdlib.newTestAccount(stdlib.parseCurrency(100));

    // for devnet we need to mint the token to use for the lock contract
    const tok = await stdlib.launchToken(acc, "DevNet USDC", "USDC", {
      decimals: 6,
      supply: stdlib.bigNumberify("18446744073709551615"),
      url: "https://centre.io",
      metadataHash: "",
      clawback: acc.networkAccount,
      freeze: acc.networkAccount,
      reserve: acc.networkAccount,
      manager: acc.networkAccount,
    });

    const ctcLock = await acc.contract(lockBackend);

    ctcLock.p.Deployer({
      parameters: {
        sourceToken: tok.id,
        sourceChainId: 1, // 1 = Algorand
        targetChainId: 2, // 2 = Voi
        targetTokenId: targetTokenId, // Token ID on Voi
      },
      ready: async () => {
        console.log(`Contract has been deployed.`);

        const ctcLockInfo = await ctcLock.getInfo();
        console.log(`The Lock contract is deployed as = ${JSON.stringify(ctcLockInfo)}`);

        resolve();
      }
    });
  });
}

const ctcMint = await deployMintContract();

const [ targetTokenIdMaybe, targetTokenId ] = await ctcMint.v.wrappedToken();
stdlib.assert(targetTokenIdMaybe == 'Some', 'no target token minted');

await deployLockContract(targetTokenId);

process.exit();