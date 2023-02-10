import React from "react";
import "./index.css";
import image from "../../assets/gorilla.gif";

const AboutUs = () => {
  return (
    <div className='aboutus'>
      <div className='aboutus-left'>
        <div></div>
        <div></div>
      </div>
      <div className='aboutus-right'>
        <center>
          <div className='aboutus-title'>About Us</div>

          <div className='aboutus-text'>
            Our purpose is to disrupt the way we travel eliminating
            intermediaries and become a bridge between travel and luxury
            experiences enthusiasts with the NFT world. Receive immediate IRL
            benefits by belonging to a like-minded community that enjoy caring,
            traveling, exploring, and protecting our planet earth and its
            species. Riviera Maya Sostenible is our official NGO partner which
            will handle the donations of 5% based on mint and 5% of global
            secondary sales to habitat conservation for 21 threatened or
            endangered animal species. <br />
          </div>

          <div>
            <button className='aboutus-btn'>
              <a
                href='https://opensea.io/collection/jttribe-official-genesis-collection'
                className='aboutus-btn-link'>
                <img src='opensea.png' alt='buttonpng' border='0' />
                <br></br>Opensea
              </a>
            </button>
          </div>
        </center>
        <div>
          <img src={image} alt='' className='aboutus-image' />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
