import React from "react";
import "./index.css";
import { Web3Button } from "@web3modal/react";

const Header = () => {
  return (
    <div className='header-main'>
      <div className='header-title-box'>
        <div>Shibarium</div>
        <div>Name</div>
        <div>Service</div>
      </div>

      <div className='header-sections'>
        <div onClick={() => window.open("https://dogtag.id/", "_blank")}>
          About
        </div>
        <div onClick={() => window.open("https://dogtag.id/", "_blank")}>
          How It Works
        </div>
        <div onClick={() => window.open("https://t.me/dogtag_id", "_blank")}>
          Community
        </div>
      </div>
      <div className='header-button'>
        <Web3Button />
      </div>
    </div>
  );
};
export default Header;
