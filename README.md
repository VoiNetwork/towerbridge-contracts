# Tower Bridge Contracts
Lock and Mint contracts are designed to bridge ASA tokens between AVM (Algorand Virtual Machine) networks.

Lock contract resides on *Source* network where token exists in an unwrapped state.
Mint contract resides on *Target* network.

## Current Limitations
- Bridge only goes in one direction
- THIS IS INCOMPLETE DO NOT USE ON PRODUCTION NETWORKS

## Commands
`npm run compile` - Compile Mint and Lock contracts
`npm run deploy` - Deploy Mint and Lock contracts (on DevNet)
