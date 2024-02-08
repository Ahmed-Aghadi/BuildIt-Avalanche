// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

import {Script} from "forge-std/Script.sol";
import {HelperConfig} from "./HelperConfig.s.sol";
import "../src/Map.sol";
import "../src/Utils.sol";
import "../src/Marketplace.sol";
import "../src/Forwarder.sol";
import "../src/Faucet.sol";

contract DeployAll is Script {
    string public constant UTILS_BASE_URI = "https://www.example.com/utils/";
    string public constant MAP_BASE_URI = "https://www.example.com/map/";
    uint8 public constant SIZE = 15;
    uint8 public constant PER_SIZE = 5;
    uint8 public constant UTILS_MINT_COUNT = 3;
    uint256 public constant UTILS_MINT_AMOUNT = 1000;
    uint256 public constant TRANSFER_UTILS_AMOUNT = 500;

    HelperConfig public helperConfig;

    function run()
        external
        returns (Forwarder, Map, Utils, Marketplace, Faucet)
    {
        helperConfig = new HelperConfig();

        // (
        //     address routerAddress,
        //     address registryAddress,
        //     address registrarAddress,
        //     address eth_usd_priceFeedAddress,
        //     address linkAddress,
        //     uint32 gasLimit
        // ) = helperConfig.activeNetworkConfig();

        (
            Forwarder forwarder,
            Map map,
            Utils utils,
            Marketplace marketplace,
            Faucet faucet
        ) = deployAllContracts();
        mintUtils(utils);
        fundFaucet(utils, faucet);
        return (forwarder, map, utils, marketplace, faucet);
    }

    function deployAllContracts()
        public
        returns (Forwarder, Map, Utils, Marketplace, Faucet)
    {
        // deploy all contracts
        Forwarder forwarder = deployForwarder();
        Utils utils = deployUtils(forwarder);
        Map map = deployMap(utils, forwarder);
        Marketplace marketplace = deployMarketplace(map, utils, forwarder);
        Faucet faucet = deployFaucet(forwarder);

        return (forwarder, map, utils, marketplace, faucet);
    }

    function deployForwarder() public returns (Forwarder) {
        (uint256 deployerPrivateKey, , , , , , ) = helperConfig
            .activeNetworkConfig();
        vm.startBroadcast(deployerPrivateKey);
        Forwarder forwarder = new Forwarder();
        vm.stopBroadcast();
        return forwarder;
    }

    function deployUtils(Forwarder forwarder) public returns (Utils) {
        (
            uint256 deployerPrivateKey,
            address routerAddress,
            ,
            ,
            ,
            address linkAddress,

        ) = helperConfig.activeNetworkConfig();
        vm.startBroadcast(deployerPrivateKey);
        Utils utils = new Utils(
            UTILS_BASE_URI,
            address(forwarder),
            linkAddress,
            routerAddress
        );
        vm.stopBroadcast();
        return utils;
    }

    function deployMap(Utils utils, Forwarder forwarder) public returns (Map) {
        (uint256 deployerPrivateKey, , , , , , ) = helperConfig
            .activeNetworkConfig();
        vm.startBroadcast(deployerPrivateKey);
        Map map = new Map(
            SIZE,
            PER_SIZE,
            MAP_BASE_URI,
            address(utils),
            address(forwarder)
        );
        vm.stopBroadcast();
        return map;
    }

    function deployMarketplace(
        Map map,
        Utils utils,
        Forwarder forwarder
    ) public returns (Marketplace) {
        (
            uint256 deployerPrivateKey,
            ,
            ,
            address registrarAddress,
            address eth_usd_priceFeedAddress,
            address linkAddress,
            uint32 gasLimit
        ) = helperConfig.activeNetworkConfig();

        vm.startBroadcast(deployerPrivateKey);
        Marketplace marketplace = new Marketplace(
            eth_usd_priceFeedAddress,
            address(map),
            address(utils),
            linkAddress,
            registrarAddress,
            gasLimit,
            address(forwarder)
        );
        vm.stopBroadcast();
        return marketplace;
    }

    function deployFaucet(Forwarder forwarder) public returns (Faucet) {
        (uint256 deployerPrivateKey, , , , , , ) = helperConfig
            .activeNetworkConfig();
        vm.startBroadcast(deployerPrivateKey);
        Faucet faucet = new Faucet(address(forwarder));
        vm.stopBroadcast();
        return faucet;
    }

    function mintUtils(Utils utils) public {
        (uint256 deployerPrivateKey, , , , , , ) = helperConfig
            .activeNetworkConfig();
        for (uint8 i = 1; i <= UTILS_MINT_COUNT; i++) {
            vm.startBroadcast(deployerPrivateKey);
            utils.mint(UTILS_MINT_AMOUNT);
            vm.stopBroadcast();
        }
    }

    function fundFaucet(Utils utils, Faucet faucet) public {
        (uint256 deployerPrivateKey, , , , , , ) = helperConfig
            .activeNetworkConfig();
        address deployerAddress = vm.addr(deployerPrivateKey);
        for (uint8 i = 1; i <= UTILS_MINT_COUNT; i++) {
            vm.startBroadcast(deployerPrivateKey);
            utils.safeTransferFrom(
                deployerAddress,
                address(faucet),
                i,
                TRANSFER_UTILS_AMOUNT,
                ""
            );
            (address(faucet), TRANSFER_UTILS_AMOUNT);
            vm.stopBroadcast();
        }
    }
}
