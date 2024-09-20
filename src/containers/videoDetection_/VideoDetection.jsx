import React from 'react';
import TestingVideoInput from '../../assets/TestingVideoInput.mp4';
import TestingVideoResult from '../../assets/TestingVideoResult.mp4';

import './VideoDetection.css';

const VideoDetection = () => (
  <div className="damageHeader">
    <h1 className="gradient__text">Aircraft Stage-III: Video Analysis based on DeepLearning Algorithm </h1>
    <div className="embed-container" id="detection">
      <div className="image-container">
        <a target='_blank' href="https://github.com/bishalrauniyar/TataSafeguard-Feature2-Aircraft-VideoAnalysis-Deeplearning">
          <video src={TestingVideoInput} alt="input" autoPlay loop muted className="video" />
        </a> 
        <p className="caption">Input field to check the damage</p>
      </div>
      <div className="image-container">
        <a target='_blank' href="https://huggingface.co/spaces/Bishal-Rauniyar/DeepLearning-Based-Aircraft-Video-Analysis">
          <video src={TestingVideoResult} alt="output" autoPlay loop muted className="video" />
        </a>
        <p className="caption">Damage Detection of the Dent indentified with high accuracy </p>
      </div>
    </div>
    <div className="image-container">
      <a target='_blank' href="https://github.com/bishalrauniyar/TataSafeguard-Feature2-Aircraft-VideoAnalysis-Deeplearning">
        <p className="caption">🔗Github link:https://github.com/bishalrauniyar/TataSafeguard-Feature2-Aircraft-VideoAnalysis-Deeplearning
        </p>
      </a>
      <a target='_blank' href="https://huggingface.co/spaces/Bishal-Rauniyar/DeepLearning-Based-Aircraft-Video-Analysis">
        <p className="caption">🚀Deployed link:https://huggingface.co/spaces/Bishal-Rauniyar/DeepLearning-Based-Aircraft-Video-Analysis
        </p>
      </a>
    </div>

  </div>
);

export default VideoDetection;
