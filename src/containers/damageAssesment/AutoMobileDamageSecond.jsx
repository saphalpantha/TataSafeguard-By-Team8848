import React from 'react';
import './AutoMobileDamage.css';
import UnderDev from '../../assets/under-development.png';
const AutoMobileDamage = () => (
  <div className="damageHeader">
    <h1 className="gradient__text">YOLOv8 Based AutoMobiles Image Analysis and Damage Detection Model</h1>
    <div className="embed-container" id="detection">
      <div className="image-container">
        <a href='#'>
          <img src={UnderDev} alt="input" />
        </a>
        <p className="caption">Input field to check the damage</p>
      </div>
      <div className="image-container">
        <a href="#">
          <img src={UnderDev} alt="output" />
        </a>
        <p className="caption">Damage Detection of the Dent indentified with high accuracy </p>
      </div>

    </div>
    <div className="image-container">
      <a href="#">
        <p className="caption">🔗Github link: #</p>
      </a>
    </div>

  </div>
);

export default AutoMobileDamage;
