import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import { useSigner } from "wagmi";
import "./main.css";
import abi from "../../contracts/abi.json";
import { useAccount } from "wagmi";
import whitelist from "../../constants/whitelist.json";

const Main = () => {
  const { data: signer } = useSigner();
  const [mintAmount, setMintAmount] = useState(1);
  const [pricePerMint, setPricePerMint] = useState(null);
  const [proofAddress, setProofAddress] = useState(null);
  const [contract, setContract] = useState(null);
  const { address } = useAccount();
  const userAddress = address;

  // Contract interactions

  const mintContract = "0xBA00E8CDE3DE3172910421C353196A66CA9C7F2E";

  useEffect(() => {
    if (!signer || !userAddress) return;
    if (whitelist.proofs[userAddress]) {
      setProofAddress(whitelist.proofs[userAddress].proof);
    }
    const fetchPrice = async () => {
      if (!signer || !userAddress) return;

      const nftContract = new ethers.Contract(mintContract, abi, signer);
      setContract(nftContract);
      const presalePrice = await nftContract.getTotalEarlyPrice();
      setPricePerMint(ethers.utils.formatEther(presalePrice));
    };
    fetchPrice();

    console.log("User proof: ", proofAddress);
    console.log("User Wallet: ", userAddress);
  }, [signer, userAddress, proofAddress]);

  const mint = async () => {
    const presalePrice = await contract.getTotalEarlyPrice();
    setPricePerMint(ethers.utils.formatEther(presalePrice));

    const value = pricePerMint * Number(mintAmount) * 1.0001;

    console.log(pricePerMint, value);

    if (!whitelist.proofs[userAddress]) {
      alert("You are not whitelisted");
    }

    try {
      console.log(value);
      await contract.mintEarlySale(mintAmount, proofAddress, {
        value: ethers.utils.parseEther(value.toString()),
      });
    } catch (error) {
      console.log(error.code);
    }
  };

  const handleAmountChange = (change) => {
    if (change === -1) {
      if (mintAmount < 2) return;
      setMintAmount(mintAmount - 1);
    } else if (change === +1) setMintAmount(mintAmount + 1);
  };

  return (
    <div className='main'>
      <div className='main-title'>
        <img
          src={"main.gif"}
          width='50%'
          alt='img'
          className='main-title-img'
        />
      </div>
      <div className='main-mint'>
        <h1 className='main-title-top'>
          Mint early presale NFT for only $55 USD
        </h1>
        <div className='main-mint-buttons'>
          <button
            className='mint-amount-button'
            onClick={() => handleAmountChange(-1)}>
            -
          </button>
          <div className='main-mint-amount'>{mintAmount}</div>
          <button
            className='mint-amount-button'
            onClick={() => handleAmountChange(+1)}>
            +
          </button>
        </div>
        <button className='mint-button' onClick={mint}>
          Mint
        </button>
      </div>
    </div>
  );
};
export default Main;
