import { AuthConnectButton } from "@/components/AuthConnectButton";
import { useAccount, useAccountInfo } from "@particle-network/connectkit";
import { isEVMProvider, EVMProvider } from "@particle-network/connectors";
import { useEffect, useState } from "react";
import { Map, Map__factory } from "@/types";
import { ethers } from "ethers";
import {
  SupportedChainIds,
  contractAddresses,
} from "@/utils/contractAddresses";
import { ContractFunctions } from "./ContractFunctions";

export const MainSection = () => {
  const { account, particleProvider } = useAccountInfo();
  const [connected, setConnected] = useState(false);
  const [provider, setProvider] = useState<ethers.BrowserProvider>();

  useEffect(() => {
    if (account && particleProvider && isEVMProvider(particleProvider)) {
      setConnected(true);
      const ethersProvider = new ethers.BrowserProvider(particleProvider);
      setProvider(ethersProvider);
    } else {
      setConnected(false);
    }
  }, [account]);

  return (
    <div>
      <div className="absolute top-4 right-4">
        <AuthConnectButton />
      </div>
      <ContractFunctions
        account={account}
        connected={connected}
        provider={provider}
      />
    </div>
  );
};
