import React from "react";
import "./index.css";
import logo from "../../assets/JTTribesLogo.png";
import image from "../../assets/JERS-Tokn.png";

const OurSpecialty = () => {
  return (
    <div>
      <div className='specialty-top'>BENEFITS
FOR TRIBERS</div>
      <div className='specialty-top-image-holder'>
        <img src={image} alt='img' className='specialty-top-image' />
      </div>
      <div className='specialty-bottom'>
        <div className='specialty-card'>
          <div className='specialty-card-image'>
            <img src={logo} alt='img' className='specialty-card-image' />
          </div>
          <div className='specialty-card-title'>TRAVEL OUTLET TRIPFLIX PLATFORM</div>
          <div className='specialty-card-text'>
          Save up to 60%

Enjoy traveling around the world at clean rates saving thousands of dollars.
          </div>
        </div>
        <div className='specialty-card'>
          <div className='specialty-card-image'>
            <img src={logo} alt='img' className='specialty-card-image' />
          </div>
          <div className='specialty-card-title'>YACHT MEMBERSHIP PASS</div>
          <div className='specialty-card-text'>
          JTTribe holders will enjoy unlimited yatch rentals, up to 50% off on 40 to 60 ft yatchs in Cancun, Riviera Maya, Cozumel, Los Cabos y Punta Cana.
          </div>
        </div>
        <div className='specialty-card'>
          <div className='specialty-card-image'>
            <img src={logo} alt='img' className='specialty-card-image' />
          </div>
          <div className='specialty-card-title'>E-LOCAL PASS IN RIVIERA MAYA</div>
          <div className='specialty-card-text'>
          The JTT community will receive up to 50% off lifetime discounts in hundreds of restaurants, shops, services, tours, night clubs, bars, shows & entertainment in riviera maya destinations such as Cancun, Playa del Carmen and Tulum.
          </div>
        </div>
        <div className='specialty-card'>
          <div className='specialty-card-image'>
            <img src={logo} alt='img' className='specialty-card-image' />
          </div>
          <div className='specialty-card-title'>WELLNESS PASS AT PUEBLO SACBE PLAYA DEL CARMEN</div>
          <div className='specialty-card-text'>
          Sacbe, sustainable & Soul Wellness Center at Playa del Carmen. Preferential prices for JTTribe holders
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurSpecialty;
