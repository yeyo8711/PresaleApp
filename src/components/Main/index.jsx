import React from "react";

import "./main.css";
import satoshi from "../../assets/satoshi.svg";
import shiba from "../../assets/shiba.svg";
import shibarium from "../../assets/shibarium.svg";
import cz from "../../assets/cz.svg";

const Main = () => {
  return (
    <div className='main'>
      <div className='main-left'>
        <div className='main-left-top'>Your key to a Shibarium Address</div>
        <div className='main-left-bottom'>
          Every .inu domain represents your wallet so you can receive crypto,
          NFTs and just about anything else in the Shibarium Metaverse
        </div>
      </div>
      <div className='main-right'>
        <div className='main-right-imgholder'>
          <img src={satoshi} alt='img' className='dogtag' />
          <img src={shiba} alt='img' className='dogtag' />
        </div>
        <div className='main-right-imgholder'>
          <img src={shibarium} alt='img' className='dogtag' />
          <img src={cz} alt='img' className='dogtag' />
        </div>
      </div>
    </div>
  );
};
export default Main;
