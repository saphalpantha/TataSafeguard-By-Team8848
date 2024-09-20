import React from 'react';
import TestingVideoInput from '../../assets/TestingVideoInput.mp4';
import TestingVideoResult from '../../assets/TestingVideoResult.mp4';
import UnderDev from '../../assets/under-development.png'
import './AutoMobileVideoDetection.css';

const AutoMobileVideoDetection = () => (
  <div className="damageHeader">
    <h1 className="gradient__text">Automobiles Stage-III: Video Analysis based on DeepLearning Algorithm </h1>
    <div className="embed-container" id="detection">
      <div className="image-container">
        <a href="">
          <img src={UnderDev} alt="input"  className="video" />
        </a>
        <p className="caption">Input field to check the damage</p>
      </div>
      <div className="image-container">
        <a href="">
          <img src={UnderDev} alt="output"  className="video" />
        </a>
        <p className="caption">Damage Detection of the Dent indentified with high accuracy </p>
      </div>
    </div>
    <div className="image-container">
      <a href="">
        <p className="caption">🔗Github link: #
        </p>
      </a>
    </div>

  </div>
);

export default AutoMobileVideoDetection;
