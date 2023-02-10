import React from "react";
import "./index.css";
import { Web3Button } from "@web3modal/react";

import { useAccount } from "wagmi";

const Header = ({}) => {
  return (
    <header className='header-main'>
      <div className='header-title'>
        <img src='logo.png' width='130' height='130' alt='img' />
      </div>
      <div className='header-sections'></div>
      <div className='header-button'>
        <Web3Button />
      </div>
    </header>
  );
};
export default Header;
