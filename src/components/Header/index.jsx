import React from "react";
import "./index.css";
import { Web3Button } from "@web3modal/react";

const Header = () => {
  return (
    <div className='header-main'>
      <div className='header-title'>
        {/* <img src={logo} width='130' height='130' alt='img' /> */}LOGO
      </div>
      <div className='header-sections'>
        <div>About</div>
        <div>How It Works</div>
        <div>Community</div>
        <div className='header-button'>
          <Web3Button />
        </div>
      </div>
    </div>
  );
};
export default Header;
