import React from 'react';
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons';
import CardComponents from '../CardComponents/CardComponents';
import logo from '../../assets/Innovent_logo.png';

const Footer = () => {
  const stayInTouch = 'Lets stay in touch';
  return (
    <div className="gpt3__footer section__padding">
      <div className="gpt3__footer-heading">
        <h1 className="gradient__text">Explore TataSafeguard 3D models</h1>
      </div>
      <CardComponents />

      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <img src={logo} alt="TataSafeguard" />
          <p>{stayInTouch}<br /> © TataSafeguard 2024.</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Links</h4>
          <p><FontAwesomeIcon icon={faInstagram} /> Instagram</p>
          <p><FontAwesomeIcon icon={faLinkedin} /> LinkedIn</p>
          <p><FontAwesomeIcon icon={faFacebook} /> Facebook</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Company</h4>
          <p>Terms & Conditions </p>
          <p>Privacy Policy</p>
          <p>Contact Us</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Get in touch</h4>
          <p>About us</p>
         
          <p>Brand Centre</p>
        </div>
      </div>

      <div className="gpt3__footer-copyright">
        <p>@2024 TataSafeguard. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
