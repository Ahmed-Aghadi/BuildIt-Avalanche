import { AuthConnectButton } from "@/components/AuthConnectButton";
import { useAccount } from "@particle-network/connectkit";
import { useEffect, useState } from "react";

export const MainSection = () => {
  const account = useAccount();
  const [connected, setConnected] = useState(false);

  useEffect(() => {
    if (account) {
      setConnected(true);
    } else {
      setConnected(false);
    }
  }, [account]);
  return (
    <div>
      <div className="absolute top-4 right-4">
        <AuthConnectButton />
      </div>
    </div>
  );
};
