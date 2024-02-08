// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

import {Script} from "forge-std/Script.sol";

contract HelperConfig is Script {
    NetworkConfig public activeNetworkConfig;

    struct NetworkConfig {
        uint256 deployerPrivateKey;
        address routerAddress;
        address registryAddress;
        address registrarAddress;
        address eth_usd_priceFeedAddress;
        address linkAddress;
        uint32 gasLimit;
    }

    uint256 public constant ANVIL_PRIVATE_KEY =
        0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80;

    constructor() {
        uint256 deployerPrivateKey = vm.envUint("PRIVATE_KEY");
        address routerAddress = address(0);
        address registryAddress = 0x0000000000000000000000000000000000000000;
        address registrarAddress = 0x0000000000000000000000000000000000000000;
        address eth_usd_priceFeedAddress = 0x0000000000000000000000000000000000000000;
        address linkAddress = 0x0000000000000000000000000000000000000000;
        uint32 gasLimit = 999999;
        if (block.chainid == 43113) {
            // Avalanche Fuji
            routerAddress = 0xF694E193200268f9a4868e4Aa017A0118C9a8177;
            registryAddress = 0x819B58A646CDd8289275A87653a2aA4902b14fe6;
            registrarAddress = 0xD23D3D1b81711D75E1012211f1b65Cc7dBB474e2;
            linkAddress = 0x0b9d5D9136855f6FEc3c0993feE6E9CE8a297846;
        } else if (block.chainid == 11155111) {
            // Sepolia
            routerAddress = 0x0BF3dE8c5D3e8A2B34D2BEeB17ABfCeBaf363A59;
            registryAddress = 0xE16Df59B887e3Caa439E0b29B42bA2e7976FD8b2;
            registrarAddress = 0x9a811502d843E5a03913d5A2cfb646c11463467A;
            eth_usd_priceFeedAddress = 0x694AA1769357215DE4FAC081bf1f309aDC325306;
            linkAddress = 0x779877A7B0D9E8603169DdbD7836e478b4624789;
        } else if (block.chainid == 31337) {
            // Anvil
            deployerPrivateKey = ANVIL_PRIVATE_KEY;
            routerAddress = address(1);
            linkAddress = address(2);
        } else {
            revert("Unsupported chain");
        }
        activeNetworkConfig = NetworkConfig(
            deployerPrivateKey,
            routerAddress,
            registryAddress,
            registrarAddress,
            eth_usd_priceFeedAddress,
            linkAddress,
            gasLimit
        );
    }
}
