import React, { useState } from "react";
import { ethers } from "ethers";
import { useSigner } from "wagmi";
import abi from "../../contracts/abi.json";
import "./index.css";

const Mint = () => {
  // Contract interactions
  const [domainName, setDomainName] = useState("");

  const { data: signer } = useSigner();
  const mintContract = "0x555e1eB5F358AC8cD0104fE89Aa7d0dFFBe1b27D";

  const mint = async () => {
    if (!signer) return;
    const contract = new ethers.Contract(mintContract, abi, signer);
    try {
      const mintNFT = await contract.register(domainName);
      await mintNFT.wait();
    } catch (error) {
      return alert(error.error.message);
    }
    alert("Domain minted successfully");
  };
  return (
    <div className='mint-main'>
      <div className='mint-box'>
        <div className='mint-title'>Mint Your Shibarium Domain Today!</div>
        <div className='mint-stats'>
          <p>Total Domains Minted: 540</p>
        </div>
        <div className='mint-form'>
          <form onSubmit={(e) => e.preventDefault()}>
            <input
              className='mint-input'
              placeholder='yourdomain'
              value={domainName}
              onChange={(e) => setDomainName(e.target.value)}
            />
            <h1 className='mint-inu'>.inu</h1>
          </form>
          <div className='button-holder'>
            <button className='mint-btn' onClick={mint}>
              Mint
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mint;
