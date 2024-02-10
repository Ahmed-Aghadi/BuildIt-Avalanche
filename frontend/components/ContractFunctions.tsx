import { AuthConnectButton } from "@/components/AuthConnectButton";
import { useAccount, useAccountInfo } from "@particle-network/connectkit";
import { isEVMProvider, EVMProvider } from "@particle-network/connectors";
import { useEffect, useState } from "react";
import {
  Map__factory,
  Marketplace__factory,
  Utils__factory,
  Faucet__factory,
  LinkTokenInterface__factory,
} from "@/types";
import { ethers } from "ethers";
import {
  SupportedChainIds,
  contractAddresses,
} from "@/utils/contractAddresses";

export const ContractFunctions = ({
  account,
  connected,
  provider,
}: {
  account: string | undefined;
  connected: boolean;
  provider: ethers.BrowserProvider | undefined;
}) => {
  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    // @ts-ignore
    window.ethers = ethers;
    // @ts-ignore
    window.chainId = chainId;
    // @ts-ignore
    window.walletAddress = walletAddress;
    // @ts-ignore
    window.isConnected = isConnected;
    // @ts-ignore
    window.getSigner = getSigner;
    // @ts-ignore
    window.getMapContract = getMapContract;
    // @ts-ignore
    window.getMarketplaceContract = getMarketplaceContract;
    // @ts-ignore
    window.getUtilsContract = getUtilsContract;
    // @ts-ignore
    window.getFaucetContract = getFaucetContract;
    // @ts-ignore
    window.getLinkTokenInterfaceContract = getLinkTokenInterfaceContract;

    return () => {
      // @ts-ignore
      delete window.ethers;
      // @ts-ignore
      delete window.chainId;
      // @ts-ignore
      delete window.walletAddress;
      // @ts-ignore
      delete window.isConnected;
      // @ts-ignore
      delete window.getSigner;
      // @ts-ignore
      delete window.getMapContract;
      // @ts-ignore
      delete window.getMarketplaceContract;
      // @ts-ignore
      delete window.getUtilsContract;
      // @ts-ignore
      delete window.getFaucetContract;
      // @ts-ignore
      delete window.getLinkTokenInterfaceContract;
    };
  }, [account, connected, provider]);

  function walletAddress() {
    return account;
  }

  function isConnected() {
    return connected;
  }

  async function chainId() {
    return (
      await provider?.getNetwork()
    )?.chainId.toString() as SupportedChainIds;
  }

  async function getSigner() {
    const signer = provider?.getSigner();
    return signer;
  }

  async function getMapContract() {
    const mapContractAddress = contractAddresses[await chainId()].Map;
    const map = Map__factory.connect(mapContractAddress, await getSigner());
    return map;
  }

  async function getMarketplaceContract() {
    const marketplaceContractAddress =
      contractAddresses[await chainId()].Marketplace;
    const marketplace = Marketplace__factory.connect(
      marketplaceContractAddress,
      await getSigner()
    );
    return marketplace;
  }

  async function getUtilsContract() {
    const utilsContractAddress = contractAddresses[await chainId()].Utils;
    const utils = Utils__factory.connect(
      utilsContractAddress,
      await getSigner()
    );
    return utils;
  }

  async function getFaucetContract() {
    const faucetContractAddress = contractAddresses[await chainId()].Faucet;
    const faucet = Faucet__factory.connect(
      faucetContractAddress,
      await getSigner()
    );
    return faucet;
  }

  async function getLinkTokenInterfaceContract() {
    const linkTokenInterfaceContractAddress =
      contractAddresses[await chainId()].LinkToken;
    const linkTokenInterface = LinkTokenInterface__factory.connect(
      linkTokenInterfaceContractAddress,
      await getSigner()
    );
    return linkTokenInterface;
  }

  // async function testMap() {
  //   if (!connected) {
  //     console.error("Not connected");
  //     return;
  //   }
  //   const mapContractAddress = contractAddresses[await chainId()].Map;
  //   const map = Map__factory.connect(mapContractAddress, provider);
  //   const owner = await map.baseUri();
  //   console.log(owner);

  //   // // let functionName = "baseUri" as keyof Map;
  //   // const functionName = "baseUri";
  //   // const owner2 = await map[functionName]();
  //   // console.log(owner2);
  // }

  //   <button
  //   onClick={testMap}
  //   className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md"
  // >
  //   Test Map
  // </button>

  return <></>;
};
