import React from 'react';
import './Damage.css';
import inputImage from '../../assets/air-stage-2.jpg';
import imageDetection from '../../assets/imageDetection.png';

const Damage = () => (
  <div className="damageHeader">
    <h1 className="gradient__text">Aircraft Stage-II: Image Analysis based on DeepLearning Algorithm </h1>
    <div className="embed-container" id="detection">
      <div className="image-container">
        <a target='_blank' href="https://github.com/bishalrauniyar/TataSafeguard-Aircraft-Feature1-ImageAnalysis-Deeplearning">
          <img src={inputImage} alt="input" />
        </a>
        <p className="caption">Input field to check the damage</p>
      </div>
      <div className="image-container">
        <a target='_blank' href="https://huggingface.co/spaces/Bishal-Rauniyar/DeepLearning-based-Aircraft-Image-Analysis">
          <img src={imageDetection} alt="output" />
        </a>
        <p className="caption">Damage Detection of the Dent indentified with high accuracy </p>
      </div>

    </div>
    <div className="image-container">
      <a target='_blank' href="https://github.com/bishalrauniyar/TataSafeguard-Aircraft-Feature1-ImageAnalysis-Deeplearning">
        <p className="caption">🔗Github link: https://github.com/bishalrauniyar/TataSafeguard-Aircraft-Feature1-ImageAnalysis-Deeplearning</p>
      </a>
      <a target='_blank' href="https://github.com/bishalrauniyar/TataSafeguard-Aircraft-Feature1-ImageAnalysis-Deeplearning">
        <p className="caption">🚀Deployed link: https://github.com/bishalrauniyar/TataSafeguard-Aircraft-Feature1-ImageAnalysis-Deeplearning</p>
      </a>
    </div>

  </div>
);

export default Damage;
