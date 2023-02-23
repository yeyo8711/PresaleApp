import React, { useState } from "react";
import "./index.css";
import { ethers } from "ethers";
import { useSigner } from "wagmi";
import abi from "../../contracts/abi.json";

const Modal = () => {
  // Contract interactions
  const [domainName, setDomainName] = useState("");

  const { data: signer } = useSigner();
  const mintContract = "0x8f1d05CBC1C0426d0d499cB1E6d818459AE2b49A";

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
    <div>
      <div className='mint-box'>
        <div className='mint-title'>Mint Your Shibarium Domain Today!</div>
        <div>Price: 12345 $SNS</div>
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

export default Modal;
