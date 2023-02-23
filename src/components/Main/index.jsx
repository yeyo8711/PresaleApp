import React from "react";
import { motion } from "framer-motion";
import grass from "../../assets/GRASS@3x.png";

import "./main.css";

const Main = () => {
  return (
    <div className='main'>
      <motion.div className='main-left' whileInView='visible' initial='hidden'>
        <div className='main-left-top'>
          <div>Your key to a</div>
          <div className='shibarium-holder'>
            <div className='main-shibarium'>Shibarium</div>
            <span>.inu</span>
          </div>

          <div>Address</div>
        </div>
        <div className='main-left-bottom'>
          Every .inu domain represents your wallet so you can receive crypto,
          NFTs and just about anything else in the Shibarium Metaverse
        </div>
      </motion.div>
      <motion.img
        src={grass}
        alt='grass'
        className='grass'
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 100, opacity: 1 }}
      />
    </div>
  );
};
export default Main;
