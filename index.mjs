import {loadStdlib} from '@reach-sh/stdlib';
import * as lockBackend from './lock.main.mjs';
import * as mintBackend from './mint.main.mjs';
import readline from 'readline';
import { ask } from '@reach-sh/stdlib/ask.mjs';
import dotenv from 'dotenv';

let stdlib = loadStdlib('ALGO');
dotenv.config();

// Setup readline interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const getAlgoStdlib = () => {
  let stdlib = loadStdlib('ALGO');
  stdlib.setProviderByName("TestNet");
  return stdlib;
}

const getVoiStdlib = () => {
  let stdlib = loadStdlib('ALGO');
  stdlib.setProviderByEnv({
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
  });
  return stdlib;
}

// deploy mint contract on Voi
const deployMintContract = async (network) => {
  console.log(`Deploying Mint Contract...`);

  let stdlib = (network == 'testnet') ? getVoiStdlib() : loadStdlib('ALGO');

  const acc = await stdlib.newAccountFromMnemonic(process.env.TESTNET_DEPLOYER_MNEMONIC);
  if (stdlib.balanceOf(acc) < stdlib.parseCurrency(100) && stdlib.canFundFromFaucet(acc)) {
    await stdlib.fundFromFaucet(acc, stdlib.parseCurrency(100));
  }

  const ctcMint = await acc.contract(mintBackend);

  await new Promise((resolve, reject) => {
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

        const [ targetTokenIdMaybe, targetTokenId ] = await ctcMint.v.wrappedToken();
        stdlib.assert(targetTokenIdMaybe == 'Some', 'no target token minted');
        console.log(`The target token ID is = ${targetTokenId}`);
      
        resolve();
      }
    });
  });

  return ctcMint;
}

// deploy lock contract on Algorand
const deployLockContract = async (network) => {
  let stdlib = (network == 'testnet') ? getAlgoStdlib() : loadStdlib('ALGO');

  const targetTokenId = await ask("Enter the target token ID: ");
  if (targetTokenId == '') {
    console.log("Invalid target token ID");
    return;
  }

  const acc = await stdlib.newAccountFromMnemonic(process.env.TESTNET_DEPLOYER_MNEMONIC);
  if (stdlib.balanceOf(acc) < stdlib.parseCurrency(100) && stdlib.canFundFromFaucet(acc)) {
    await stdlib.fundFromFaucet(acc, stdlib.parseCurrency(100));
  }

  let tok, tokenId;
  if (network == 'testnet') {
    //tok = await acc.tokenMetadata(10458941);
    tokenId = 10458941
  }
  else {
    // for devnet we need to mint the token to use for the lock contract
    tok = await stdlib.launchToken(acc, "DevNet USDC", "USDC", {
      decimals: 6,
      supply: stdlib.bigNumberify("18446744073709551615"),
      url: "https://centre.io",
      metadataHash: "",
      clawback: acc.networkAccount,
      freeze: acc.networkAccount,
      reserve: acc.networkAccount,
      manager: acc.networkAccount,
    });
    tokenId = tok.id;
  }

  await new Promise(async (resolve, reject) => {
    ctcLock.p.Deployer({
      parameters: {
        sourceToken: tokenId,
        sourceChainId: 1, // 1 = Algorand
        targetChainId: 2, // 2 = Voi
        targetTokenId: targetTokenId, // Token ID on Voi
      },
      ready: async () => {
        console.log(`Contract has been deployed.`);

        const ctcLockInfo = await ctcLock.getInfo();
        console.log(`The Lock contract is deployed as = ${JSON.stringify(ctcLockInfo)}`);

        const [ sourceTokenIdMaybe, sourceTokenId ] = await ctcLock.v.sourceToken();
        const [ targetChainIdMaybe, targetChainId ] = await ctcLock.v.targetChainId();
        const [ targetTokenIdMaybe, targetTokenId ] = await ctcLock.v.targetTokenId(); 
        const [ bridgedTokensMaybe, bridgedTokens ] = await ctcLock.v.bridgedTokens();
        console.log(`Lock contract details:`);
        console.log(`  sourceTokenId = ${sourceTokenId}`);
        console.log(`  targetChainId = ${targetChainId}`);
        console.log(`  targetTokenId = ${targetTokenId}`);
        console.log(`  bridgedTokens = ${bridgedTokens}`);
      
        resolve();
      }
    });
  });
}

const testContracts = async () => {
  console.log('testLockContract');

  let stdlibA = getAlgoStdlib();

  // step 1; lock USDC on Algorand

  // connect using TESTNET_USER
  const accAlgo = await stdlibA.newAccountFromMnemonic(process.env.TESTNET_USER_MNEMONIC);
  if (stdlibA.balanceOf(accAlgo) < stdlibA.parseCurrency(100) && stdlibA.canFundFromFaucet(accAlgo)) {
    await stdlibA.fundFromFaucet(accAlgo, stdlibA.parseCurrency(100));
  }

  // get the lock contract
  const ctcLock = accAlgo.contract(lockBackend, JSON.parse(process.env.LOCK_CONTRACT));
  
  // show details
  const [ sourceTokenIdMaybe, sourceTokenId ] = await ctcLock.v.sourceToken();
  const [ targetChainIdMaybe, targetChainId ] = await ctcLock.v.targetChainId();
  const [ targetTokenIdMaybe, targetTokenId ] = await ctcLock.v.targetTokenId(); 
  const [ bridgedTokensMaybe, bridgedTokens ] = await ctcLock.v.bridgedTokens();
  console.log(`Lock contract details:`);
  console.log(`  sourceTokenId = ${sourceTokenId}`);
  console.log(`  targetChainId = ${targetChainId}`);
  console.log(`  targetTokenId = ${targetTokenId}`);
  console.log(`  bridgedTokens = ${bridgedTokens}`);

  // step 2; mint wrapped token on Voi
  // connect using TESTNET_USER
  let stdlibV = getVoiStdlib();

  const accVoi = await stdlibV.newAccountFromMnemonic(process.env.TESTNET_USER_MNEMONIC);
  if (stdlibV.balanceOf(accVoi) < stdlibV.parseCurrency(100) && stdlibV.canFundFromFaucet(accVoi)) {
    await stdlibV.fundFromFaucet(accVoi, stdlibV.parseCurrency(100));
  }

  console.log(stdlibV.formatCurrency(await accVoi.balanceOf()));
  const ctcMint = accVoi.contract(mintBackend, JSON.parse(process.env.MINT_CONTRACT));

  // show details
  const [ sourceTokenIdMaybe2, sourceTokenId2 ] = await ctcMint.v.sourceTokenId();
  const [ sourceChainIdMaybe, sourceChainId ] = await ctcMint.v.sourceChainId();
  const [ wrappedTokenSupplyMaybe, wrappedTokenSupply ] = await ctcMint.v.wrappedTokenSupply();
  console.log(`Mint contract details:`);
  console.log(`  sourceTokenId = ${sourceTokenId2}`);
  console.log(`  sourceChainId = ${sourceChainId}`);
  console.log(`  wrappedTokenSupply = ${wrappedTokenSupply}`);

  // get the wrapped token
  const [ targetTokenIdMaybe2, targetTokenId2 ] = await ctcMint.v.wrappedToken();
  console.log(`Wrapped token ID = ${targetTokenId2}`);

}

const changeNetwork = async (network) => {
  await new Promise((resolve, reject) => {
    rl.question(`Select network (1) TestNet (2) DevNet: `, async (answer) => {
      switch(answer.toUpperCase()) {
        case '1':
          network = 'testnet';
          console.log('Network changed to TestNet');
          break;
        case '2':
          network = 'devnet';
          console.log('Network changed to DevNet');
          break;
        default:
          console.log('Invalid choice. Network unchanged.');
          break;
      }
      resolve();
    });
  });
  return network;
}

const main = async () => {
  let network = process.env.NETWORK || 'devnet';

  console.log(`Tower Bridge`);
  console.log(`Using network: ${network.toUpperCase()}`);
  console.log(``);
  console.log(`1. Deploy Mint contract`);
  console.log(`2. Deploy Lock contract`);
  console.log(`3. Test contracts`);
  console.log(`4. Change network`);
  console.log(`Q. Quit`);

  const askQuestion = () => {
    rl.question('What would you like to do? ', async (answer) => {
      switch(answer.toUpperCase()) {
        case '1':
          await deployMintContract(network);
          break;
        case '2':
          await deployLockContract(network);
          break;
        case '3':
          await testContracts(network);
          break;
        case '4':
          network = await changeNetwork();
          break;
        case 'Q':
          process.exit();
          break;
        default:
          console.log('Invalid choice');
          break;
      }
      askQuestion();
    });
  };

  askQuestion();
}
main();