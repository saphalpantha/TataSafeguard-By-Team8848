import React from 'react';
import './CnnModal.css';
import TestingImageCNN from '../../assets/TestingImageCNN.jpeg';
import img1 from '../../assets/stage-one.png'
import img2 from '../../assets/stage-onee.png'
import TestingImageResultCNN from '../../assets/TestingImageResultCNN.jpeg';

const CnnModal = () => (
  <div className="damageHeader" id="detection-air">
    <h1 className="gradient__text" style={{ textAlign: 'center' }}>Aircraft Stage-I: Basic CNN based ML Prediction Model</h1>
    <div className="embed-container" id="detection">
      <div className="image-container">
        <a target='_blank' href="https://github.com/bishalrauniyar/TataSafeguard-Basic-MLprediction-damage-detection-model">
          <img src={img1} alt="input" />
        </a>
        <p className="caption">Input field to check the damage</p>
      </div>
      <div className="image-container">
        <a target='_blank' href="https://cnnbased-mlprediction-damage-detection-model.streamlit.app/">
          <img src={img2} alt="output" />
        </a>
        <p className="caption">Damage Detection Output with its Accuracy </p>
      </div>

    </div> 
    <div className="image-container">
      <a target='_blank' href="https://github.com/bishalrauniyar/TataSafeguard-Basic-MLprediction-damage-detection-model">
        <p className="caption">🔗Github link:https://github.com/bishalrauniyar/TataSafeguard-Basic-MLprediction-damage-detection-model
        </p>
      </a>
      <a target='_blank' href="https://cnnbased-mlprediction-damage-detection-model.streamlit.app/">
        <p className="caption">🚀Deployed link:https://cnnbased-mlprediction-damage-detection-model.streamlit.app/
        </p>
      </a>
    </div>

  </div>
);

export default CnnModal;
