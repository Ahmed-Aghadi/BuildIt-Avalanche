BuildIt is a metaverse project. It provides users with the ability to own virtual land within a map, place items on the land they own, and even sell the land to other users. The land is represented as ERC721 tokens, while the items are represented as ERC1155 tokens. All interactions within the metaverse are secured by smart contracts.

## Pre-requisites

You should have `Unity`, `npm`, `forge` and `foundry` installed.

### Unity Project

Go to `client` folder.

```bash
cd game/
```

Open the `game` folder in Unity. Build the project and save build files in `frontend/public` directory ( You only need to do this step if you had made any changes to the game ).

### Frontend

Go to `frontend` folder and install dependencies

```bash
cd frontend/
yarn
```

To run the project:

```bash
npm run dev
```

Visit `localhost:3000` to play the game.

Note: Don't forget to create .env file ( refer .env.example file ).

### Smart Contracts

Go to `smart_contracts` folder and install foundry and hardhat.

```bash
cd smart_contracts/
forge init
yarn
```

To compile smart contracts:

```bash
forge compile
```

To run test on smart contracts:

```bash
forge test
```

To deploy smart contracts:

```bash
source .env

# Avalanche Testnet (Fuji)
forge script script/DeployAll.s.sol:DeployAll --slow --chain-id 43113 --rpc-url $AVALANCHE_FUJI_TESTNET_RPC_URL --broadcast --verify --verifier-url "https://api.avascan.info/v2/network/testnet/evm/43113/etherscan" -vvvv

# Ethereum Testnet (Sepolia)
forge script script/DeployAll.s.sol:DeployAll --slow --chain-id 11155111 --rpc-url $SEPOLIA_RPC_URL --broadcast --verify --etherscan-api-key $ETHERSCAN_API_KEY --verifier-url "https://api-sepolia.etherscan.io/api" -vvvv
```

If the above command fails, you can also resume the deployment from the last failed step by using the `--resume` flag.

Note: Don't forget to create .env file ( refer .env.example file ).

To set cross chain data for marketplace contract:

```bash
source .env

# Avalanche Testnet (Fuji)
forge script script/SetCrossChainData.s.sol:SetCrossChainData --slow --rpc-url $AVALANCHE_FUJI_TESTNET_RPC_URL --broadcast -vvvv

# Ethereum Testnet (Sepolia)
forge script script/SetCrossChainData.s.sol:SetCrossChainData --slow --rpc-url $SEPOLIA_RPC_URL --broadcast -vvvv
```

To generate typescript typings for smart contracts:

```bash
node script/GenerateTypes.js
```

To copy contract addresses to frontend:

```bash
node script/GenerateContractAddress.js
```

## Smart Contracts ( Avalanche Testnet (Fuji) )

| Contract                                                                                                           | Explorer Link                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| [Map.sol](https://github.com/Ahmed-Aghadi/BuildIt-Avalanche/blob/main/smart_contracts/src/Map.sol)                 | [0x3Ef5b3e0F317aBC0372b7BC2715AE734fd1cc72A](https://testnet.snowtrace.io/address/0x3Ef5b3e0F317aBC0372b7BC2715AE734fd1cc72A) |
| [Utils.sol](https://github.com/Ahmed-Aghadi/BuildIt-Avalanche/blob/main/smart_contracts/src/Utils.sol)             | [0xAc8f976CE33462A9fD530977818897323C141503](https://testnet.snowtrace.io/address/0xAc8f976CE33462A9fD530977818897323C141503) |
| [Faucet.sol](https://github.com/Ahmed-Aghadi/BuildIt-Avalanche/blob/main/smart_contracts/src/Faucet.sol)           | [0x3717c0A441189d828fFE2bdEc97485098CB1Dda2](https://testnet.snowtrace.io/address/0x3717c0A441189d828fFE2bdEc97485098CB1Dda2) |
| [Marketplace.sol](https://github.com/Ahmed-Aghadi/BuildIt-Avalanche/blob/main/smart_contracts/src/Marketplace.sol) | [0x7616a954c1b1a51Af381426596Fe37Cf2CB7fEb5](https://testnet.snowtrace.io/address/0x7616a954c1b1a51Af381426596Fe37Cf2CB7fEb5) |
| [Forwarder.sol](https://github.com/Ahmed-Aghadi/BuildIt-Avalanche/blob/main/smart_contracts/src/Forwarder.sol)     | [0x205c82Cf08A1d59b4428658edD0F812B7E48Fc31](https://testnet.snowtrace.io/address/0x205c82Cf08A1d59b4428658edD0F812B7E48Fc31) |

## Smart Contracts ( Ethereum Testnet (Sepolia) )

| Contract                                                                                                           | Explorer Link                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| [Map.sol](https://github.com/Ahmed-Aghadi/BuildIt-Avalanche/blob/main/smart_contracts/src/Map.sol)                 | [0xD6E9e0E67Ef73BC697145F378304223318C8a57B](https://sepolia.etherscan.io/address/0xD6E9e0E67Ef73BC697145F378304223318C8a57B) |
| [Utils.sol](https://github.com/Ahmed-Aghadi/BuildIt-Avalanche/blob/main/smart_contracts/src/Utils.sol)             | [0x2FB5322CB7B9A39A650AC84b65cEEEcb710Cb136](https://sepolia.etherscan.io/address/0x2FB5322CB7B9A39A650AC84b65cEEEcb710Cb136) |
| [Faucet.sol](https://github.com/Ahmed-Aghadi/BuildIt-Avalanche/blob/main/smart_contracts/src/Faucet.sol)           | [0x479A67aBfCeF629E6313BFd8c4a58cE5c16e0df2](https://sepolia.etherscan.io/address/0x479A67aBfCeF629E6313BFd8c4a58cE5c16e0df2) |
| [Marketplace.sol](https://github.com/Ahmed-Aghadi/BuildIt-Avalanche/blob/main/smart_contracts/src/Marketplace.sol) | [0x2260550B934bB1FFf78ed0fBA057e3E226d04585](https://sepolia.etherscan.io/address/0x2260550B934bB1FFf78ed0fBA057e3E226d04585) |
| [Forwarder.sol](https://github.com/Ahmed-Aghadi/BuildIt-Avalanche/blob/main/smart_contracts/src/Forwarder.sol)     | [0x7F69Bc509DC6922C1096f8bA95f50579f9cA655F](https://sepolia.etherscan.io/address/0x7F69Bc509DC6922C1096f8bA95f50579f9cA655F) |

## Table of Contents

- [Inspiration](#inspiration)
- [What It Does](#what-it-does)
- [How We Built It](#how-we-built-it)
- [Challenges We Ran Into](#challenges-we-ran-into)
- [Accomplishments That We're Proud Of](#accomplishments-that-were-proud-of)
- [What We Learned](#what-we-learned)
- [What's Next for BuildIt](#whats-next-for-buildit)

## Inspiration

The inspiration behind BuildIt comes from the desire to create an immersive metaverse experience where users can explore, own, and customize virtual land. We wanted to empower users to express their creativity and engage with a virtual world where they have control over their own unique space.

## What It Does

BuildIt allows users to:

- Own virtual land within a map represented as ERC721 tokens.
- Place items on their owned land, such as buildings, roads, and other structures, represented as ERC1155 tokens.
- Sell their land to other users, transferring ownership and associated items.
- Connect their wallets (e.g., Metamask, Coinbase, WalletConnect) to interact with the metaverse.

When a user connects their wallet, the game fetches data from the smart contracts and highlights the portion of the map that the user owns. Users can then click the "Edit" button to place or remove items on their land. They have the option to cancel or confirm the changes, which updates the items in the appropriate locations. Smart contract checks ensure that users can only interact with the land they own.

In addition, BuildIt includes a marketplace where users can sell their land through direct listings or auctions. Chainlink automation can be utilized for auction listings, and if the chain supports Chainlink price feeds, the land can be sold in USD. The marketplace provides an easy and secure way for users to trade their land.

While editing the map, user can also save/load private designs which is saved using sprucekit.

In marketplace listing, if seller owns an ENS account then it will display it so that it add more credibility about seller.

User can also connect through social logins and dApp-embedded wallets using Particle Network

User can transfer their utils items like road, house, special item to other chain using Chainlink CCIP.

## How We Built It

BuildIt was built using the following technologies and tools:

- Unity: The game was developed using Unity and built for Webgl.
- Smart Contracts: Five smart contracts were developed using Foundry and Hardhat:
  - Map Contract: Responsible for the Lands in the Map, implemented as an ERC721 contract.
  - Utils Contract: Represents the items that can be placed on the land, implemented as an ERC1155 contract.
  - Faucet Contract: Allows users to obtain items for free initially. It is funded to provide items for judges and other participants.
  - Marketplace Contract: Facilitates land sales through direct listings and auctions.
  - Forwarder Contract: As all contracts implements ERC2771 context, Forwarder is used to provide gasless transactions for users.
- Map Size: The map size is determined in the smart contract, allowing the deployment of multiple maps with different sizes. The current deployment consists of a map with a size of 15 by 15 tiles, where each land is a 5 by 5 tile.
- Item Minting: Three items are minted in the Utils contract: road, house, and special item.
- Wallet Integration: Users can connect their wallets, such as Metamask, Coinbase, and WalletConnect, to interact with the metaverse.
- Gasless Transactions: All smart contracts implement ERC2771Context, enabling users to perform gasless transactions when the relayer is funded.
- Sprucekit was used to let User Save/Load private designs
- ENS was used to resolve custom name for users in marketplace
- Chainlink CCIP is used to transfer utils items from one chain to another.

## Challenges We Ran Into

During the development of BuildIt, we encountered several challenges, including:

- Integrating Unity with the blockchain and ensuring secure and efficient interactions between the game and smart contracts.
- Implementing ERC721 and ERC1155 token standards and handling the transfer of ownership between users and their land/items.
- Optimizing gas usage and transaction costs in smart contract deployments.
- Developing a user-friendly interface and seamless wallet integration for a smooth user experience.
- Sprucekit sdk was mainly for Reactjs project, so to pass message between game build for wasm to Reactjs was challenging.
- Particle Auth Core has Reactjs SDK and Unity was built in WebGL, so the communication between Webgl and Reactjs was challenging.

## Accomplishments That We're Proud Of

Throughout the development process, we achieved several accomplishments that we're proud of, including:

- Successfully integrating the Unity game engine with the Blockchain and smart contracts.
- Creating a metaverse where users can own virtual land and customize it with various items.
- Implementing a marketplace where users can buy and sell land securely through direct listings and auctions.
- Enabling gasless transactions for users by implementing ERC2771Context in all smart contracts.
- Conducting comprehensive testing, including fuzz testing, to ensure the stability and reliability of the application.

## What We Learned

The development of BuildIt provided us with valuable learning experiences, including:

- Gaining in-depth knowledge of integrating smart contracts with Unity.
- Understanding the intricacies of token standards like ERC721 and ERC1155.
- Optimizing gas usage and transaction costs in smart contract deployments.
- Enhancing user experience through seamless wallet integration and fetching data from smart contracts.

## What's Next for BuildIt

BuildIt is an ongoing project, and we have exciting plans for its future:

- Adding multiple maps with different sizes to expand the metaverse and accommodate more users.
- Conducting further research on gasless transactions to reduce transaction costs and improve user experience.
- Exploring cross-chain integrations to enable interoperability with other blockchain platforms.
- Enhancing the variety of items and customizations available to users.
- Engaging with the community to gather feedback and implement new features based on user suggestions.
- Leveraging cross chain marketplace using Chainlink CCIP.

We are dedicated to continuously improving and expanding BuildIt to create a vibrant and immersive metaverse experience for all users.
