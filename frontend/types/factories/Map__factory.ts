/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  BigNumberish,
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../common";
import type { Map, MapInterface } from "../Map";

const _abi = [
  {
    type: "constructor",
    inputs: [
      {
        name: "_size",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "_perSize",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "_baseUri",
        type: "string",
        internalType: "string",
      },
      {
        name: "_utilsAddress",
        type: "address",
        internalType: "address",
      },
      {
        name: "trustedForwarder",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "approve",
    inputs: [
      {
        name: "to",
        type: "address",
        internalType: "address",
      },
      {
        name: "tokenId",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "balanceOf",
    inputs: [
      {
        name: "owner",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "baseUri",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "string",
        internalType: "string",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getApproved",
    inputs: [
      {
        name: "tokenId",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "isApprovedForAll",
    inputs: [
      {
        name: "owner",
        type: "address",
        internalType: "address",
      },
      {
        name: "operator",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "isTrustedForwarder",
    inputs: [
      {
        name: "forwarder",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "land",
    inputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        name: "xIndex",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "yIndex",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "landCount",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "landIds",
    inputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "map",
    inputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "mint",
    inputs: [
      {
        name: "xIndex",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "yIndex",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "name",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "string",
        internalType: "string",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "onERC1155BatchReceived",
    inputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
      {
        name: "",
        type: "address",
        internalType: "address",
      },
      {
        name: "",
        type: "uint256[]",
        internalType: "uint256[]",
      },
      {
        name: "",
        type: "uint256[]",
        internalType: "uint256[]",
      },
      {
        name: "",
        type: "bytes",
        internalType: "bytes",
      },
    ],
    outputs: [
      {
        name: "",
        type: "bytes4",
        internalType: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "onERC1155Received",
    inputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
      {
        name: "",
        type: "address",
        internalType: "address",
      },
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "",
        type: "bytes",
        internalType: "bytes",
      },
    ],
    outputs: [
      {
        name: "",
        type: "bytes4",
        internalType: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "ownerOf",
    inputs: [
      {
        name: "tokenId",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "perSize",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "placeItem",
    inputs: [
      {
        name: "x",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "y",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "utilId",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "placeItems",
    inputs: [
      {
        name: "x",
        type: "uint256[]",
        internalType: "uint256[]",
      },
      {
        name: "y",
        type: "uint256[]",
        internalType: "uint256[]",
      },
      {
        name: "utilId",
        type: "uint256[]",
        internalType: "uint256[]",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "removeItem",
    inputs: [
      {
        name: "x",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "y",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "safeTransferFrom",
    inputs: [
      {
        name: "from",
        type: "address",
        internalType: "address",
      },
      {
        name: "to",
        type: "address",
        internalType: "address",
      },
      {
        name: "tokenId",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "safeTransferFrom",
    inputs: [
      {
        name: "from",
        type: "address",
        internalType: "address",
      },
      {
        name: "to",
        type: "address",
        internalType: "address",
      },
      {
        name: "tokenId",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "data",
        type: "bytes",
        internalType: "bytes",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "setApprovalForAll",
    inputs: [
      {
        name: "operator",
        type: "address",
        internalType: "address",
      },
      {
        name: "approved",
        type: "bool",
        internalType: "bool",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "size",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "supportsInterface",
    inputs: [
      {
        name: "interfaceId",
        type: "bytes4",
        internalType: "bytes4",
      },
    ],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "symbol",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "string",
        internalType: "string",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "tokenURI",
    inputs: [
      {
        name: "id",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        name: "",
        type: "string",
        internalType: "string",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "transferFrom",
    inputs: [
      {
        name: "from",
        type: "address",
        internalType: "address",
      },
      {
        name: "to",
        type: "address",
        internalType: "address",
      },
      {
        name: "tokenId",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "trustedForwarder",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "updateItem",
    inputs: [
      {
        name: "x",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "y",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "utilId",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "updateItems",
    inputs: [
      {
        name: "x",
        type: "uint256[]",
        internalType: "uint256[]",
      },
      {
        name: "y",
        type: "uint256[]",
        internalType: "uint256[]",
      },
      {
        name: "utilId",
        type: "uint256[]",
        internalType: "uint256[]",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "utilCount",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "utilsAddress",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "event",
    name: "Approval",
    inputs: [
      {
        name: "owner",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "approved",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "tokenId",
        type: "uint256",
        indexed: true,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "ApprovalForAll",
    inputs: [
      {
        name: "owner",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "operator",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "approved",
        type: "bool",
        indexed: false,
        internalType: "bool",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "Transfer",
    inputs: [
      {
        name: "from",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "to",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "tokenId",
        type: "uint256",
        indexed: true,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "error",
    name: "ERC721IncorrectOwner",
    inputs: [
      {
        name: "sender",
        type: "address",
        internalType: "address",
      },
      {
        name: "tokenId",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "owner",
        type: "address",
        internalType: "address",
      },
    ],
  },
  {
    type: "error",
    name: "ERC721InsufficientApproval",
    inputs: [
      {
        name: "operator",
        type: "address",
        internalType: "address",
      },
      {
        name: "tokenId",
        type: "uint256",
        internalType: "uint256",
      },
    ],
  },
  {
    type: "error",
    name: "ERC721InvalidApprover",
    inputs: [
      {
        name: "approver",
        type: "address",
        internalType: "address",
      },
    ],
  },
  {
    type: "error",
    name: "ERC721InvalidOperator",
    inputs: [
      {
        name: "operator",
        type: "address",
        internalType: "address",
      },
    ],
  },
  {
    type: "error",
    name: "ERC721InvalidOwner",
    inputs: [
      {
        name: "owner",
        type: "address",
        internalType: "address",
      },
    ],
  },
  {
    type: "error",
    name: "ERC721InvalidReceiver",
    inputs: [
      {
        name: "receiver",
        type: "address",
        internalType: "address",
      },
    ],
  },
  {
    type: "error",
    name: "ERC721InvalidSender",
    inputs: [
      {
        name: "sender",
        type: "address",
        internalType: "address",
      },
    ],
  },
  {
    type: "error",
    name: "ERC721NonexistentToken",
    inputs: [
      {
        name: "tokenId",
        type: "uint256",
        internalType: "uint256",
      },
    ],
  },
  {
    type: "error",
    name: "InvalidLength",
    inputs: [],
  },
  {
    type: "error",
    name: "InvalidXIndex",
    inputs: [],
  },
  {
    type: "error",
    name: "InvalidYIndex",
    inputs: [],
  },
  {
    type: "error",
    name: "LandAlreadyOwned",
    inputs: [],
  },
  {
    type: "error",
    name: "NotOwner",
    inputs: [],
  },
  {
    type: "error",
    name: "SizeNotDivisibleByPerSize",
    inputs: [],
  },
  {
    type: "error",
    name: "ZeroPerSize",
    inputs: [],
  },
  {
    type: "error",
    name: "ZeroSize",
    inputs: [],
  },
] as const;

const _bytecode =
  "0x60a06040523480156200001157600080fd5b50604051620029183803806200291883398101604081905262000034916200017c565b60408051808201825260038082526204d61760ec1b60208084019190915283518085019094529083526204d41560ec1b908301526001600160a01b0383166080529060006200008483826200031a565b5060016200009382826200031a565b50505084600003620000b85760405163c459d23f60e01b815260040160405180910390fd5b83600003620000da57604051630c110df560e41b815260040160405180910390fd5b60068590556007849055620000f08486620003e6565b156200010f57604051632b0baa0760e11b815260040160405180910390fd5b60096200011d84826200031a565b5050600b80546001600160a01b0319166001600160a01b03929092169190911790555062000409915050565b634e487b7160e01b600052604160045260246000fd5b80516001600160a01b03811681146200017757600080fd5b919050565b600080600080600060a086880312156200019557600080fd5b855160208088015160408901519297509550906001600160401b0380821115620001be57600080fd5b818901915089601f830112620001d357600080fd5b815181811115620001e857620001e862000149565b604051601f8201601f19908116603f0116810190838211818310171562000213576200021362000149565b816040528281528c868487010111156200022c57600080fd5b600093505b8284101562000250578484018601518185018701529285019262000231565b60008684830101528098505050505050506200026f606087016200015f565b91506200027f608087016200015f565b90509295509295909350565b600181811c90821680620002a057607f821691505b602082108103620002c157634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200031557600081815260208120601f850160051c81016020861015620002f05750805b601f850160051c820191505b818110156200031157828155600101620002fc565b5050505b505050565b81516001600160401b0381111562000336576200033662000149565b6200034e816200034784546200028b565b84620002c7565b602080601f8311600181146200038657600084156200036d5750858301515b600019600386901b1c1916600185901b17855562000311565b600085815260208120601f198616915b82811015620003b75788860151825594840194600190910190840162000396565b5085821015620003d65787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b6000826200040457634e487b7160e01b600052601260045260246000fd5b500690565b6080516124e56200043360003960008181610347015281816103ac01526117f201526124e56000f3fe608060405234801561001057600080fd5b50600436106101f05760003560e01c8063870fc3471161010f578063b88d4fde116100a2578063d7bce65811610071578063d7bce6581461052a578063e985e9c514610533578063f23a6e611461057c578063fb9bb97f146105b457600080fd5b8063b88d4fde14610492578063baacbe9b146104a5578063bc197c81146104ae578063c87b56dd1461051757600080fd5b80639abc8320116100de5780639abc832014610443578063a22cb4651461044b578063a90b91281461045e578063ae9deae41461048957600080fd5b8063870fc3471461040c578063949d225d1461041f57806395d89b411461042857806395f5b17a1461043057600080fd5b806342842e0e116101875780636352211e116101565780636352211e1461038457806370a08231146103975780637da0a877146103aa578063861e4656146103d057600080fd5b806342842e0e146102f1578063512c4aaf14610304578063539447d414610324578063572b6c051461033757600080fd5b80630d0637b3116101c35780630d0637b31461027f57806319579a54146102925780631b2ef1ca146102cb57806323b872dd146102de57600080fd5b806301ffc9a7146101f557806306fdde031461021d578063081812fc14610232578063095ea7b31461026a575b600080fd5b610208610203366004611be0565b6105c7565b60405190151581526020015b60405180910390f35b6102256106ac565b6040516102149190611c72565b610245610240366004611c85565b61073e565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610214565b61027d610278366004611cc7565b610774565b005b61027d61028d366004611def565b61078a565b6102bd6102a0366004611e77565b600c60209081526000928352604080842090915290825290205481565b604051908152602001610214565b6102bd6102d9366004611e77565b61087a565b61027d6102ec366004611e99565b6109d8565b61027d6102ff366004611e99565b610acf565b600b546102459073ffffffffffffffffffffffffffffffffffffffff1681565b61027d610332366004611ed5565b610aef565b610208610345366004611f01565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff90811691161490565b610245610392366004611c85565b610b0c565b6102bd6103a5366004611f01565b610b17565b7f0000000000000000000000000000000000000000000000000000000000000000610245565b6103f76103de366004611c85565b600d602052600090815260409020805460019091015482565b60408051928352602083019190915201610214565b61027d61041a366004611e77565b610b92565b6102bd60065481565b610225610d7e565b61027d61043e366004611ed5565b610d8d565b610225611029565b61027d610459366004611f1c565b6110b7565b6102bd61046c366004611e77565b600e60209081526000928352604080842090915290825290205481565b6102bd60075481565b61027d6104a0366004611fe6565b6110c9565b6102bd600a5481565b6104e66104bc36600461204e565b7fbc197c810000000000000000000000000000000000000000000000000000000095945050505050565b6040517fffffffff000000000000000000000000000000000000000000000000000000009091168152602001610214565b610225610525366004611c85565b6110e0565b6102bd60085481565b6102086105413660046120f8565b73ffffffffffffffffffffffffffffffffffffffff918216600090815260056020908152604080832093909416825291909152205460ff1690565b6104e661058a36600461212b565b7ff23a6e610000000000000000000000000000000000000000000000000000000095945050505050565b61027d6105c2366004611def565b611114565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f80ac58cd00000000000000000000000000000000000000000000000000000000148061065a57507fffffffff0000000000000000000000000000000000000000000000000000000082167f5b5e139f00000000000000000000000000000000000000000000000000000000145b806106a657507f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316145b92915050565b6060600080546106bb90612190565b80601f01602080910402602001604051908101604052809291908181526020018280546106e790612190565b80156107345780601f1061070957610100808354040283529160200191610734565b820191906000526020600020905b81548152906001019060200180831161071757829003601f168201915b5050505050905090565b6000610749826111fe565b5060008281526004602052604090205473ffffffffffffffffffffffffffffffffffffffff166106a6565b610786828261078161125d565b61126c565b5050565b81518351146107c5576040517f947d5a8400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8051835114610800576040517f947d5a8400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60005b835181101561087457610862848281518110610821576108216121e3565b602002602001015184838151811061083b5761083b6121e3565b6020026020010151848481518110610855576108556121e3565b6020026020010151610d8d565b8061086c81612241565b915050610803565b50505050565b600060075460065461088c9190612279565b83106108c4576040517fc24c736700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6007546006546108d49190612279565b821061090c576040517f8ccb55b600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000838152600c602090815260408083208584529091529020541561095d576040517fd531276000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60016008600082825461097091906122b4565b90915550506008546000848152600c60209081526040808320868452825280832084905580518082018252878152808301878152948452600d9092529091209051815590516001909101556109ce6109c661125d565b600854611279565b5060085492915050565b73ffffffffffffffffffffffffffffffffffffffff8216610a2d576040517f64a0ae92000000000000000000000000000000000000000000000000000000008152600060048201526024015b60405180910390fd5b6000610a418383610a3c61125d565b61132a565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610874576040517f64283d7b00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff80861660048301526024820184905282166044820152606401610a24565b610aea838383604051806020016040528060008152506110c9565b505050565b80600003610b0157610aea8383610b92565b610aea838383610d8d565b60006106a6826111fe565b600073ffffffffffffffffffffffffffffffffffffffff8216610b69576040517f89c62b6400000000000000000000000000000000000000000000000000000000815260006004820152602401610a24565b5073ffffffffffffffffffffffffffffffffffffffff1660009081526003602052604090205490565b610bd9600c600060075485610ba79190612279565b8152602001908152602001600020600060075484610bc59190612279565b815260200190815260200160002054610b0c565b73ffffffffffffffffffffffffffffffffffffffff16610bf761125d565b73ffffffffffffffffffffffffffffffffffffffff1614610c44576040517f30cd747100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600b546000838152600e6020908152604080832085845290915290205473ffffffffffffffffffffffffffffffffffffffff9091169015610d61578073ffffffffffffffffffffffffffffffffffffffff1663f242432a30610ca461125d565b6000878152600e6020908152604080832089845290915280822054905160e086901b7fffffffff0000000000000000000000000000000000000000000000000000000016815273ffffffffffffffffffffffffffffffffffffffff948516600482015293909216602484015260448301919091526001606483015260a0608483015260a482015260c401600060405180830381600087803b158015610d4857600080fd5b505af1158015610d5c573d6000803e3d6000fd5b505050505b506000918252600e60209081526040808420928452919052812055565b6060600180546106bb90612190565b610dc0600c600060075486610da29190612279565b8152602001908152602001600020600060075485610bc59190612279565b73ffffffffffffffffffffffffffffffffffffffff16610dde61125d565b73ffffffffffffffffffffffffffffffffffffffff1614610e2b576040517f30cd747100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600b546000848152600e6020908152604080832086845290915290205473ffffffffffffffffffffffffffffffffffffffff9091169015610f48578073ffffffffffffffffffffffffffffffffffffffff1663f242432a30610e8b61125d565b6000888152600e602090815260408083208a845290915280822054905160e086901b7fffffffff0000000000000000000000000000000000000000000000000000000016815273ffffffffffffffffffffffffffffffffffffffff948516600482015293909216602484015260448301919091526001606483015260a0608483015260a482015260c401600060405180830381600087803b158015610f2f57600080fd5b505af1158015610f43573d6000803e3d6000fd5b505050505b8073ffffffffffffffffffffffffffffffffffffffff1663f242432a610f6c61125d565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e084901b16815273ffffffffffffffffffffffffffffffffffffffff9091166004820152306024820152604481018590526001606482015260a06084820152600060a482015260c401600060405180830381600087803b158015610ff457600080fd5b505af1158015611008573d6000803e3d6000fd5b50505060009485525050600e60209081526040808520938552929052912055565b6009805461103690612190565b80601f016020809104026020016040519081016040528092919081815260200182805461106290612190565b80156110af5780601f10611084576101008083540402835291602001916110af565b820191906000526020600020905b81548152906001019060200180831161109257829003601f168201915b505050505081565b6107866110c261125d565b83836114a7565b6110d48484846109d8565b610874848484846115a4565b606060096110ed83611789565b6040516020016110fe9291906122e3565b6040516020818303038152906040529050919050565b815183511461114f576040517f947d5a8400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b805183511461118a576040517f947d5a8400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60005b8351811015610874576111ec8482815181106111ab576111ab6121e3565b60200260200101518483815181106111c5576111c56121e3565b60200260200101518484815181106111df576111df6121e3565b6020026020010151610aef565b806111f681612241565b91505061118d565b60008181526002602052604081205473ffffffffffffffffffffffffffffffffffffffff16806106a6576040517f7e27328900000000000000000000000000000000000000000000000000000000815260048101849052602401610a24565b60006112676117eb565b905090565b610aea838383600161186d565b73ffffffffffffffffffffffffffffffffffffffff82166112c9576040517f64a0ae9200000000000000000000000000000000000000000000000000000000815260006004820152602401610a24565b60006112d78383600061132a565b905073ffffffffffffffffffffffffffffffffffffffff811615610aea576040517f73c6ac6e00000000000000000000000000000000000000000000000000000000815260006004820152602401610a24565b60008281526002602052604081205473ffffffffffffffffffffffffffffffffffffffff9081169083161561136457611364818486611a38565b73ffffffffffffffffffffffffffffffffffffffff8116156113da5761138e60008560008061186d565b73ffffffffffffffffffffffffffffffffffffffff8116600090815260036020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0190555b73ffffffffffffffffffffffffffffffffffffffff8516156114235773ffffffffffffffffffffffffffffffffffffffff85166000908152600360205260409020805460010190555b60008481526002602052604080822080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff89811691821790925591518793918516917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4949350505050565b73ffffffffffffffffffffffffffffffffffffffff821661150c576040517f5b08ba1800000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff83166004820152602401610a24565b73ffffffffffffffffffffffffffffffffffffffff83811660008181526005602090815260408083209487168084529482529182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b73ffffffffffffffffffffffffffffffffffffffff83163b15610874578273ffffffffffffffffffffffffffffffffffffffff1663150b7a026115e561125d565b8685856040518563ffffffff1660e01b815260040161160794939291906123c4565b6020604051808303816000875af1925050508015611660575060408051601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016820190925261165d9181019061240d565b60015b6116ef573d80801561168e576040519150601f19603f3d011682016040523d82523d6000602084013e611693565b606091505b5080516000036116e7576040517f64a0ae9200000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff85166004820152602401610a24565b805181602001fd5b7fffffffff0000000000000000000000000000000000000000000000000000000081167f150b7a020000000000000000000000000000000000000000000000000000000014611782576040517f64a0ae9200000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff85166004820152602401610a24565b5050505050565b606060a06040510180604052602081039150506000815280825b600183039250600a81066030018353600a9004806117a357508190037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0909101908152919050565b60003660147f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16331480156118355750808210155b1561186557600036611847838561242a565b61185292829061243d565b61185b91612467565b60601c9250505090565b339250505090565b808061188e575073ffffffffffffffffffffffffffffffffffffffff821615155b156119e357600061189e846111fe565b905073ffffffffffffffffffffffffffffffffffffffff8316158015906118f157508273ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614155b8015611930575073ffffffffffffffffffffffffffffffffffffffff80821660009081526005602090815260408083209387168352929052205460ff16155b1561197f576040517fa9fbf51f00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff84166004820152602401610a24565b81156119e157838573ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45b505b5050600090815260046020526040902080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b611a43838383611ae8565b610aea5773ffffffffffffffffffffffffffffffffffffffff8316611a97576040517f7e27328900000000000000000000000000000000000000000000000000000000815260048101829052602401610a24565b6040517f177e802f00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8316600482015260248101829052604401610a24565b600073ffffffffffffffffffffffffffffffffffffffff831615801590611ba757508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480611b76575073ffffffffffffffffffffffffffffffffffffffff80851660009081526005602090815260408083209387168352929052205460ff165b80611ba7575060008281526004602052604090205473ffffffffffffffffffffffffffffffffffffffff8481169116145b949350505050565b7fffffffff0000000000000000000000000000000000000000000000000000000081168114611bdd57600080fd5b50565b600060208284031215611bf257600080fd5b8135611bfd81611baf565b9392505050565b60005b83811015611c1f578181015183820152602001611c07565b50506000910152565b60008151808452611c40816020860160208601611c04565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b602081526000611bfd6020830184611c28565b600060208284031215611c9757600080fd5b5035919050565b803573ffffffffffffffffffffffffffffffffffffffff81168114611cc257600080fd5b919050565b60008060408385031215611cda57600080fd5b611ce383611c9e565b946020939093013593505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715611d6757611d67611cf1565b604052919050565b600082601f830112611d8057600080fd5b8135602067ffffffffffffffff821115611d9c57611d9c611cf1565b8160051b611dab828201611d20565b9283528481018201928281019087851115611dc557600080fd5b83870192505b84831015611de457823582529183019190830190611dcb565b979650505050505050565b600080600060608486031215611e0457600080fd5b833567ffffffffffffffff80821115611e1c57600080fd5b611e2887838801611d6f565b94506020860135915080821115611e3e57600080fd5b611e4a87838801611d6f565b93506040860135915080821115611e6057600080fd5b50611e6d86828701611d6f565b9150509250925092565b60008060408385031215611e8a57600080fd5b50508035926020909101359150565b600080600060608486031215611eae57600080fd5b611eb784611c9e565b9250611ec560208501611c9e565b9150604084013590509250925092565b600080600060608486031215611eea57600080fd5b505081359360208301359350604090920135919050565b600060208284031215611f1357600080fd5b611bfd82611c9e565b60008060408385031215611f2f57600080fd5b611f3883611c9e565b915060208301358015158114611f4d57600080fd5b809150509250929050565b600082601f830112611f6957600080fd5b813567ffffffffffffffff811115611f8357611f83611cf1565b611fb460207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f84011601611d20565b818152846020838601011115611fc957600080fd5b816020850160208301376000918101602001919091529392505050565b60008060008060808587031215611ffc57600080fd5b61200585611c9e565b935061201360208601611c9e565b925060408501359150606085013567ffffffffffffffff81111561203657600080fd5b61204287828801611f58565b91505092959194509250565b600080600080600060a0868803121561206657600080fd5b61206f86611c9e565b945061207d60208701611c9e565b9350604086013567ffffffffffffffff8082111561209a57600080fd5b6120a689838a01611d6f565b945060608801359150808211156120bc57600080fd5b6120c889838a01611d6f565b935060808801359150808211156120de57600080fd5b506120eb88828901611f58565b9150509295509295909350565b6000806040838503121561210b57600080fd5b61211483611c9e565b915061212260208401611c9e565b90509250929050565b600080600080600060a0868803121561214357600080fd5b61214c86611c9e565b945061215a60208701611c9e565b93506040860135925060608601359150608086013567ffffffffffffffff81111561218457600080fd5b6120eb88828901611f58565b600181811c908216806121a457607f821691505b6020821081036121dd577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff820361227257612272612212565b5060010190565b6000826122af577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b500490565b808201808211156106a6576106a6612212565b600081516122d9818560208601611c04565b9290920192915050565b600080845481600182811c9150808316806122ff57607f831692505b60208084108203612337577f4e487b710000000000000000000000000000000000000000000000000000000086526022600452602486fd5b81801561234b576001811461237e576123ab565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00861689528415158502890196506123ab565b60008b81526020902060005b868110156123a35781548b82015290850190830161238a565b505084890196505b5050505050506123bb81856122c7565b95945050505050565b600073ffffffffffffffffffffffffffffffffffffffff8087168352808616602084015250836040830152608060608301526124036080830184611c28565b9695505050505050565b60006020828403121561241f57600080fd5b8151611bfd81611baf565b818103818111156106a6576106a6612212565b6000808585111561244d57600080fd5b8386111561245a57600080fd5b5050820193919092039150565b7fffffffffffffffffffffffffffffffffffffffff00000000000000000000000081358181169160148510156124a75780818660140360031b1b83161692505b50509291505056fea264697066735822122054a2377f79acfac37a6e1864ba35d96956e0e4bd164f2db0531bfd7bc268f23164736f6c63430008150033";

type MapConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MapConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Map__factory extends ContractFactory {
  constructor(...args: MapConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    _size: BigNumberish,
    _perSize: BigNumberish,
    _baseUri: string,
    _utilsAddress: AddressLike,
    trustedForwarder: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(
      _size,
      _perSize,
      _baseUri,
      _utilsAddress,
      trustedForwarder,
      overrides || {}
    );
  }
  override deploy(
    _size: BigNumberish,
    _perSize: BigNumberish,
    _baseUri: string,
    _utilsAddress: AddressLike,
    trustedForwarder: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(
      _size,
      _perSize,
      _baseUri,
      _utilsAddress,
      trustedForwarder,
      overrides || {}
    ) as Promise<
      Map & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): Map__factory {
    return super.connect(runner) as Map__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MapInterface {
    return new Interface(_abi) as MapInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): Map {
    return new Contract(address, _abi, runner) as unknown as Map;
  }
}
