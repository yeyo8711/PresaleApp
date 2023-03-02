import React, { useState, useEffect } from "react";
import "./main.css";
import { useSigner, useAccount } from "wagmi";
import { ethers } from "ethers";
import { rewardABI } from "../../abi.js/rewardABI";
import { tokenABI } from "../../abi.js/tokenABI";

const tokenAddress = "0xbC8BE1B7544F26b6E46B25fE1ca3fD51f2096D80";
const rewardAddress = "0xEC5c5383d73E4F41E6001547948ad17D6cf014b6";

const Main = () => {
  const [tokenContract, setTokenContract] = useState();
  const [rewardContract, setRewardContract] = useState();
  const [playerArray, setPlayerArray] = useState([]);
  const [rewardArray, setRewardArray] = useState([]);
  const [userTokens, setUserTokens] = useState(0);
  const [contractTokens, setContractTokens] = useState(0);
  const [playerRewards, setPlayerRewards] = useState(0);

  const { data: signer } = useSigner();
  const { address } = useAccount();

  useEffect(() => {
    const token = new ethers.Contract(tokenAddress, tokenABI, signer);
    setTokenContract(token);

    const reward = new ethers.Contract(rewardAddress, rewardABI, signer);
    setRewardContract(reward);
  }, [signer]);

  useEffect(() => {
    if (!tokenContract || !rewardContract) return;
    getTokenBalances();
  }, [signer, rewardContract, tokenContract]);

  const getTokenBalances = async () => {
    try {
      setUserTokens(await tokenContract.balanceOf(address));
      setContractTokens(await tokenContract.balanceOf(rewardAddress));
      setPlayerRewards(await rewardContract.rewards(address));
    } catch (error) {
      console.log(error);
    }
  };

  const updateRewards = async () => {
    if (!rewardContract) return;
    console.log(typeof playerArray, typeof rewardArray);

    try {
      await rewardContract.updateRewards(playerArray, rewardArray);
    } catch (error) {
      console.log(error);
    }
  };

  const claim = async () => {
    if (!rewardContract) return;
    try {
      await rewardContract.claimRewards();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='main'>
      <div className='card'>
        <div className='card-title'>Update Rewards</div>
        <div className='inputholder'>
          <input
            placeholder={`"address","address","address"`}
            className='input'
            onChange={(e) => setPlayerArray([e.target.value])}
          />
          <input
            placeholder={`reward,reward,reward`}
            className='input'
            onChange={(e) =>
              setRewardArray([ethers.utils.parseEther(e.target.value)])
            }
          />
        </div>
        <div className='claim-button'>
          <button className='button-5' onClick={() => updateRewards()}>
            Submit
          </button>
        </div>
      </div>
      <div className='card'>
        <div className='card-title'>Claim Rewards</div>
        <div className='inputholder'>
          <div className='rewards-amount'>
            Reward Tokens in Contract:{" "}
            {ethers.utils.formatEther(contractTokens)}
          </div>
          <div className='rewards-amount'>
            Your Available Rewards: {ethers.utils.formatEther(playerRewards)}
          </div>
          <div className='rewards-amount'>
            Tokens in your wallet: {ethers.utils.formatEther(userTokens)}
          </div>
        </div>
        <div className='claim-button'>
          <button className='button-5' onClick={() => claim()}>
            Claim
          </button>
        </div>
      </div>
    </div>
  );
};
export default Main;
