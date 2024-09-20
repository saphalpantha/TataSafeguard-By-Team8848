import React from 'react';
import './AutoMobileCnnModel.css';
import UnderDev from '../../assets/under-development.png';

const AutoMobileCnnModal = () => (
  <div className="damageHeader" id="detection-auto">
    <h1 className="gradient__text" style={{ textAlign: 'center' }}>AutoMobiles Stage-I: Basic CNN based ML Prediction Model</h1>
    <div className="embed-container" id="detection">
      <div className="image-container">
        <a href="#">
          <img src={UnderDev} alt="input" />
        </a>
        <p className="caption">Input field to check the damage</p>
      </div>
      <div className="image-container">
        <a href="#">
          <img src={UnderDev} alt="output" />
        </a>
        <p className="caption">Damage Detection Output with its Accuracy </p>
      </div>

    </div>
    <div className="image-container">
      <a href="#">
        <p className="caption">🔗Github link:#
        </p>
      </a>
    </div>

  </div>
);

export default AutoMobileCnnModal;
