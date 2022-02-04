import React from 'react';

import { FooterOverlay, Newsletter } from '../../components';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi'
import './Footer.css';
import { images } from '../../constants';

const Footer = () => (
  <div className='app__footer section__padding'>
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">9/7 Beissel Street, Belconnen, ACT 2617</p>
        <p className="p__opensans">+1234 567 890</p>
        <p className="p__opensans">+1234 567 890</p>
      </div>
       
      <div className="app__footer-links_logo">
      <img src={images.gericht} alt="spoon-images" />
        <p className="p__opensans">"The best way to find yourself is to lose yourself in the service of others."</p>
        <img src={images.spoon} className='spoon_img' style={{marginTop: 15}} alt="spoon" />

        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className="app__footer-links_work">
      <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Monday - Friday:</p>
        <p className="p__opensans">08:00 am - 12:00 am</p>
        <p className="p__opensans">Saturday - Sunday</p>
        <p className="p__opensans">07:00 am - 11:00 pm</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">@2022 Gangtok. All Rights Reserved</p>
    </div>
  </div>
);

export default Footer;
