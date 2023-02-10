import React from "react";
import "./index.css";
import gif from "../../assets/gorilla.gif";

const OurCollection = () => {
  return (
    <div className='ourcollection'>
      <div className='ourcollection-title'>Our Collection</div>
      <div className='ourcollection-image-holder'>
        
        <img src={gif} alt='img' className='ourcollection-img' height="300"/>
      </div>
      <div className='ourcollection-image-holder'>
        
      </div>
    </div>
  );
};

export default OurCollection;
