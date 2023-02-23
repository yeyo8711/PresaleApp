import React, { useRef } from "react";

import "./index.css";
import { motion } from "framer-motion";

import birds from "../../assets/BIRDS@3x.png";
import totem from "../../assets/TOTEM@3x.png";
import Modal from "../Modal";

const Mint = () => {
  const scrollRef = useRef(null);
  return (
    <div className='mint-main' ref={scrollRef}>
      <div className='totemholder'>
        <motion.img
          src={totem}
          alt='img'
          className='totem'
          initial={{ opacity: 0, visibility: 0 }}
          whileInView={{
            opacity: 1,
            transition: { delay: 0.1, bounce: 0.2, type: "spring" },
          }}
        />
      </div>
      <motion.div className='birdholder'>
        <motion.img
          src={birds}
          alt='img'
          className='birds'
          initial={{ opacity: 0, x: 200 }}
          whileInView={{
            opacity: 3,
            x: 0,
            transition: { delay: 0.5, bounce: 0.6, type: "spring" },
          }}
        />
      </motion.div>
      <motion.div
        className='modal'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { delay: 2.5 } }}>
        <Modal />
      </motion.div>
    </div>
  );
};

export default Mint;
