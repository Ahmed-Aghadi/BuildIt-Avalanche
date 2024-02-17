"use client";

import { ModalProvider } from "@particle-network/connectkit";
import { EntryPosition } from "@particle-network/wallet";
import { AvalancheTestnet, EthereumSepolia } from "@particle-network/chains";
import { evmWallets } from "@particle-network/connectors";
import { MainSection } from "./MainSection";

// if you want to custom connet button, you can use ConnectButton.Custom.
export const AuthCore = () => {
  return (
    <ModalProvider
      options={{
        projectId: process.env.NEXT_PUBLIC_AUTH_CORE_PROJECT_ID!,
        clientKey: process.env.NEXT_PUBLIC_AUTH_CORE_CLIENT_KEY!,
        appId: process.env.NEXT_PUBLIC_AUTH_CORE_APP_ID!,
        chains: [AvalancheTestnet, EthereumSepolia],
        wallet: {
          //optional: particle wallet config
          visible: true, //display wallet button when connect particle success.
          themeType: "dark", //optional: wallet theme, default light
          customStyle: {}, //optional: custom wallet style
          entryPosition: EntryPosition.BR,
        },
        promptSettingConfig: {
          //optional: particle security account config
          //prompt set payment password. 0: None, 1: Once(default), 2: Always
          promptPaymentPasswordSettingWhenSign: 1,
          //prompt set master password. 0: None(default), 1: Once, 2: Always
          promptMasterPasswordSettingWhenLogin: 1,
        },
        connectors: evmWallets({
          projectId: process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID!, //replace with walletconnect projectId
          showQrModal: false,
        }),
      }}
      theme={"light"}
      language={"en"} //optional：localize, default en
      walletSort={["Particle Auth", "Wallet"]} //optional：walelt order
    >
      <div className="min-h-screen">
        <MainSection />
      </div>
    </ModalProvider>
  );
};
