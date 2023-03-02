import React, { useEffect } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
//import { useAccount } from "wagmi";

import {
  EthereumClient,
  modalConnectors,
  walletConnectProvider,
} from "@web3modal/ethereum";
import { Web3Modal } from "@web3modal/react";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { bscTestnet } from "wagmi/chains";
import { switchNetwork } from "./utils";

function App() {
  const chains = [bscTestnet];
  //const { address } = useAccount();

  useEffect(() => {
    window.ethereum.on("chainChanged", (chainId) => {
      if (chainId !== "0x97") {
        alert("Please make sure your are on the right network");
        switchNetwork();
      }
    });
  }, []);

  // Wagmi client
  const { provider } = configureChains(
    [bscTestnet],
    [walletConnectProvider({ projectId: "2f1f53444758c9a32897f70a77b810ef" })]
  );

  const wagmiClient = createClient({
    autoConnect: true,
    connectors: modalConnectors({ appName: "SNS", chains }),
    provider,
  });

  // Web3Modal Ethereum Client
  const ethereumClient = new EthereumClient(wagmiClient, chains);

  return (
    <WagmiConfig client={wagmiClient}>
      <Header />
      <Main />

      <Web3Modal
        projectId='2f1f53444758c9a32897f70a77b810ef'
        ethereumClient={ethereumClient}
      />
    </WagmiConfig>
  );
}

export default App;
