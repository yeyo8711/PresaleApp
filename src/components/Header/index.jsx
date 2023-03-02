import React from "react";
import "./index.css";
import { Web3Button } from "@web3modal/react";

const Header = () => {
  return (
    <div className='header-main'>
      <div className='header-title-box '>KART</div>

      <div className='header-sections'>
        <div>About</div>
        <div>How It Works</div>
        <div>Community</div>
      </div>
      <div className='header-button'>
        <Web3Button />
      </div>
    </div>
  );
};
export default Header;
