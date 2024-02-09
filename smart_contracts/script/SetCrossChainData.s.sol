// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

import {Script} from "forge-std/Script.sol";
import {DevOpsTools} from "./DevOpsTools.s.sol";
import {HelperConfig} from "./HelperConfig.s.sol";
import "../src/Utils.sol";

contract SetCrossChainData is Script {
    struct ChainMetadata {
        uint64 chainId;
        uint64 chainSelector;
        address utilsAddress;
    }
    DevOpsTools devOpsTools;

    function run() external {
        devOpsTools = new DevOpsTools();

        address utilsAddress = devOpsTools.get_most_recent_deployment(
            "Utils",
            block.chainid
        );

        Utils utils = Utils(utilsAddress);
        HelperConfig helperConfig = new HelperConfig();
        (uint256 deployerPrivateKey, , , , , , ) = helperConfig
            .activeNetworkConfig();

        ChainMetadata[] memory chains = getAllChains();
        for (uint256 i = 0; i < chains.length; i++) {
            if (block.chainid == chains[i].chainId) {
                continue;
            }
            uint64 chainId = chains[i].chainId;
            uint64 chainSelector = chains[i].chainSelector;
            address otherUtilsAddress = chains[i].utilsAddress;

            vm.startBroadcast(deployerPrivateKey);
            utils.setChainSelectorToContractAddress(
                chainSelector,
                otherUtilsAddress
            );
            utils.setChainIdToChainSelector(chainId, chainSelector);
            vm.stopBroadcast();
        }
    }

    function getAllChains() public view returns (ChainMetadata[] memory) {
        ChainMetadata[] memory chains = new ChainMetadata[](2);
        chains[0] = ChainMetadata(
            43113,
            14767482510784806043,
            devOpsTools.get_most_recent_deployment("Utils", 43113)
        );
        chains[1] = ChainMetadata(
            11155111,
            16015286601757825753,
            devOpsTools.get_most_recent_deployment("Utils", 11155111)
        );
        return chains;
    }
}
