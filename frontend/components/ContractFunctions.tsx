import { AuthConnectButton } from "@/components/AuthConnectButton";
import {
  useAccount,
  useAccountInfo,
  useConnectKit,
  useParticleProvider,
  useSwitchChains,
  Chain,
} from "@particle-network/connectkit";
import { useConnect, useEthereum } from "@particle-network/auth-core-modal";
import { isEVMProvider, EVMProvider } from "@particle-network/connectors";
import { useCallback, useEffect, useState } from "react";
import {
  Map__factory,
  Marketplace__factory,
  Utils__factory,
  Faucet__factory,
  LinkTokenInterface__factory,
} from "@/types";
import { BigNumber, ethers } from "ethers";
import {
  SupportedChainIds,
  contractAddresses,
} from "@/utils/contractAddresses";
import { Unity, useUnityContext } from "react-unity-webgl";
import SSXComponent from "./SSXComponent";

export const ContractFunctions = ({
  sendMessage,

  unityProvider,

  isLoaded,
  addEventListener,
  removeEventListener,
}: {
  sendMessage: ReturnType<typeof useUnityContext>["sendMessage"];

  unityProvider: any;
  isLoaded: boolean;
  addEventListener: any;
  removeEventListener: any;
}) => {
  const { account, particleProvider } = useAccountInfo();
  const [connected, setConnected] = useState(false);
  const [provider, setProvider] = useState<ethers.providers.Web3Provider>();
  const connectKit = useConnectKit();

  const [onWalletConnectCallback, setOnWalletConnectCallback] = useState<
    string[]
  >([]);
  const [onWalletDisconnectCallback, setOnWalletDisconnectCallback] = useState<
    string[]
  >([]);
  const [onSwitchNetworkCallback, setOnSwitchNetworkCallback] = useState<
    string[]
  >([]);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    async function invoke(route: string, payload: string) {
      console.log("invoke", route, payload);
      // This is required to convert BigNumber to string when sending to Unity ( probably ethers v5 specific as I think v6 uses bigint )
      Object.defineProperties(BigNumber.prototype, {
        toJSON: {
          value: function (this: BigNumber) {
            return this.toString();
          },
        },
      });
      if (route == "WalletConnected") {
        const r = { result: isConnected() };
        return JSON.stringify(r);
      } else if (route == "OnWalletConnect") {
        const functionName = JSON.parse(payload).arguments[0];
        setOnWalletConnectCallback((prev) => [...prev, functionName]);
        const r = { result: "" };
        return JSON.stringify(r);
      } else if (route == "OnWalletDisconnect") {
        const functionName = JSON.parse(payload).arguments[0];
        setOnWalletDisconnectCallback((prev) => [...prev, functionName]);
        const r = { result: "" };
        return JSON.stringify(r);
      } else if (route == "OnSwitchNetwork") {
        const functionName = JSON.parse(payload).arguments[0];
        setOnSwitchNetworkCallback((prev) => [...prev, functionName]);
        const r = { result: "" };
        return JSON.stringify(r);
      } else if (route == "ChainId") {
        const r = {
          result: await getChainId(),
        };
        return JSON.stringify(r);
      } else if (route == "WalletAddress") {
        const r = { result: account };
        return JSON.stringify(r);
      } else if (route == "ContractAddress") {
        const args = JSON.parse(payload).arguments;
        const chainId = await getChainId();
        const contractName =
          args[0] as keyof (typeof contractAddresses)[SupportedChainIds];
        const r = { result: contractAddresses[chainId][contractName] };
        return JSON.stringify(r);
      } else if (route == "ContractRead") {
        const args = JSON.parse(payload).arguments;
        const contractName =
          args[0] as keyof (typeof contractAddresses)[SupportedChainIds];
        const contract = await getContract(contractName);
        const functionName = args[1] as keyof typeof contract;
        const functionArgs = JSON.parse(args[2]);
        console.log("functionArgs", functionArgs);
        // @ts-ignore
        const result = await contract[functionName](...functionArgs);
        console.log("result", result);
        const r = { result: result };
        console.log("r", { r });
        return JSON.stringify(r);
      } else if (route == "ContractWrite") {
        const args = JSON.parse(payload).arguments;
        const contractName =
          args[0] as keyof (typeof contractAddresses)[SupportedChainIds];
        const contract = await getContract(contractName);
        const functionName = args[1] as keyof typeof contract;
        const functionArgs = JSON.parse(args[2]);
        console.log("functionArgs", functionArgs);
        let isValue = false;
        let value = 0;
        if (
          typeof functionArgs[0] === "object" &&
          functionArgs[0].hasOwnProperty("value")
        ) {
          isValue = true;
          value = functionArgs[0].value;
          functionArgs.shift();
        }
        let tx;
        if (isValue) {
          // @ts-ignore
          tx = await contract[functionName](...functionArgs, { value: value });
        } else {
          // @ts-ignore
          tx = await contract[functionName](...functionArgs);
        }
        const receipt = await tx.wait();
        console.log("result", receipt);
        const r = { result: receipt };
        console.log("r", { r });
        return JSON.stringify(r);
      }
    }

    // @ts-ignore
    window.customBridge = {
      invoke,
    };

    return () => {
      // @ts-ignore
      delete window.customBridge;
    };
  }, [account, connected, provider]);

  useEffect(() => {
    if (account && particleProvider && isEVMProvider(particleProvider)) {
      setConnected(true);
      const ethersProvider = new ethers.providers.Web3Provider(
        particleProvider,
        // TODO: This "any" should be removed and provider should be re initialized if network changes but I'm not doing now to avoid causing issues. Once I've tested the current implementation, I'll remove this "any".
        "any" // NOTE: This is required as we want to detect network changes. Also I wasn't able to detect network changes in v6. Refer: https://docs.ethers.org/v5/concepts/best-practices/#best-practices--network-changes
      );
      setProvider(ethersProvider);
    } else {
      setConnected(false);
    }
  }, [account, particleProvider]);

  useEffect(() => {
    if (connected) {
      console.log("Connected");
      onWalletConnectCallback.forEach((functionName) => {
        sendMessage("ContractManager", functionName);
      });
    } else {
      console.log("Disconnected");
      onWalletDisconnectCallback.forEach((functionName) => {
        sendMessage("ContractManager", functionName);
      });
    }
  }, [connected]);

  const onNetworkChange = useCallback(
    (chain: Chain | undefined) => {
      console.log("Chain Changed", chain);
      onSwitchNetworkCallback.forEach((functionName) => {
        sendMessage("ContractManager", functionName);
      });
    },
    [onSwitchNetworkCallback]
  );

  useEffect(() => {
    // For detecting network changes in v5
    // provider?.on("network", (newNetwork, oldNetwork) => {
    //   console.log("network", { newNetwork, oldNetwork });
    //   // When a Provider makes its initial connection, it emits a "network"
    //   // event with a null oldNetwork along with the newNetwork. So, if the
    //   // oldNetwork exists, it represents a changing network
    //   if (oldNetwork) {
    //     console.log("Network changed: ", newNetwork);
    //     onSwitchNetworkCallback.forEach((functionName) => {
    //       sendMessage("ContractManager", functionName);
    //     });
    //   }
    // });

    connectKit.on("chainChanged", onNetworkChange);
    return () => {
      connectKit.off("chainChanged", onNetworkChange);
    };
  }, [connectKit, onSwitchNetworkCallback]);

  function isConnected() {
    return connected;
  }

  async function getChainId() {
    return (
      await provider?.getNetwork()
    )?.chainId.toString() as SupportedChainIds;
  }

  async function getSigner() {
    const signer = provider?.getSigner();
    return signer;
  }

  async function getContract(
    contractName: keyof (typeof contractAddresses)[SupportedChainIds]
  ) {
    if (contractName === "Map") {
      return getMapContract();
    } else if (contractName === "Marketplace") {
      return getMarketplaceContract();
    } else if (contractName === "Utils") {
      return getUtilsContract();
    } else if (contractName === "Faucet") {
      return getFaucetContract();
    } else if (contractName === "LinkToken") {
      return getLinkTokenInterfaceContract();
    } else {
      throw new Error("Invalid contract name");
    }
  }

  async function getMapContract() {
    const mapContractAddress = contractAddresses[await getChainId()].Map;
    const map = Map__factory.connect(mapContractAddress, (await getSigner())!);
    return map;
  }

  async function getMarketplaceContract() {
    const marketplaceContractAddress =
      contractAddresses[await getChainId()].Marketplace;
    const marketplace = Marketplace__factory.connect(
      marketplaceContractAddress,
      (await getSigner())!
    );
    return marketplace;
  }

  async function getUtilsContract() {
    const utilsContractAddress = contractAddresses[await getChainId()].Utils;
    const utils = Utils__factory.connect(
      utilsContractAddress,
      (await getSigner())!
    );
    return utils;
  }

  async function getFaucetContract() {
    const faucetContractAddress = contractAddresses[await getChainId()].Faucet;
    const faucet = Faucet__factory.connect(
      faucetContractAddress,
      (await getSigner())!
    );
    return faucet;
  }

  async function getLinkTokenInterfaceContract() {
    const linkTokenInterfaceContractAddress =
      contractAddresses[await getChainId()].LinkToken;
    const linkTokenInterface = LinkTokenInterface__factory.connect(
      linkTokenInterfaceContractAddress,
      (await getSigner())!
    );
    return linkTokenInterface;
  }

  return (
    <>
      <SSXComponent
        unityProvider={unityProvider}
        provider={provider}
        isLoaded={isLoaded}
        addEventListener={addEventListener}
        removeEventListener={removeEventListener}
        sendMessage={sendMessage}
      />
    </>
  );
};
