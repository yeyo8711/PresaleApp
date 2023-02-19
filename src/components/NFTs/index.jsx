import React, { useEffect, useState } from "react";
import "./index.css";
import { ethers } from "ethers";
import axios from "axios";
import abi from "../../contracts/abi.json";

const NFTs = () => {
  const [NFTs, setNFTs] = useState([]);
  const [NFT, setNFT] = useState();

  const contractAddress = "0x8D7B8d7bFC8b97c81efC24E045AdFB6BD622eD68";

  useEffect(() => {
    const provider = new ethers.providers.JsonRpcProvider(
      "https://rpc.ankr.com/eth_goerli"
    );
    const NFTArray = [];

    const fetchNFTs = async () => {
      if (NFTs.length > 1) return;
      const contract = new ethers.Contract(contractAddress, abi, provider);
      const lastTokenMinted = ethers.utils.formatUnits(
        await contract.totalSupply(),
        0
      );
      for (let i = 0; i < lastTokenMinted; i++) {
        const uri = await contract.tokenDomain(i);
        NFTArray.push(uri);
      }
      setNFTs(NFTArray);
    };
    fetchNFTs();

    console.log(NFTs);
  });

  useEffect(() => {
    const fetchNFT = async () => {
      const image = await axios.get(
        "http://localhost:3000/images/nakamoto.svg"
      );
      setNFT(image);
    };
    fetchNFT();
  }, []);

  const renderNFT = () => {
    let blob = new Blob([NFT.data], { type: "image/svg+xml" });
    let url = URL.createObjectURL(blob);
    return (
      <div>
        <img src={url} alt='' />
      </div>
    );
  };

  /* const renderNFT = () => {
    NFTs.map(async (i) => {
      const NFT = await axios.get(
        `https://sns-server.onrender.com/images/${i}`
      );
      const buff = new Buffer.from(NFT.data);
      const base64data = buff.toString("base64");

      return (
        <div>
          <img src={`data:image/svg+xml;base64,${base64data}`} alt='' />
        </div>
      );
    });
  }; */

  return (
    <div className='NFTs-main'>
      <div className='NFTs-title'>NFTs Minted</div>

      <div className='NFTs-holder'>{NFT ? renderNFT() : ""}</div>
    </div>
  );
};

export default NFTs;

/* const renderNFT = () => {
    NFTs.forEach(async (i) => {
      const NFT = await axios.get(
        `https://sns-server.onrender.com/images/${i}`
      );
      const buff = new Buffer.from(NFT.data);
      const base64data = buff.toString("base64");

      return (
        <div>
          <img src={`data:image/svg+xml;base64,${base64data}`} alt='' />
        </div>
      );
    });
  };*/
