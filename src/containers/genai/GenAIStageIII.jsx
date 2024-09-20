import React from 'react';
import './GenAIStageIII.css';
import TestingImageCNN from '../../assets/TestingImageCNN.jpeg';
import img1 from '../../assets/stage-one.png'
import img2 from '../../assets/stage-onee.png'
import gen1 from '../../assets/gen_1.png'
import gen2 from '../../assets/gen_2.png'
import gen3 from '../../assets/gen_3.png'
import gen4 from '../../assets/gen_4.png'
import TestingImageResultCNN from '../../assets/TestingImageResultCNN.jpeg';
import loading from '../../assets/under-development.png'

const GenAIStageIII = () => (
  <div className="damageHeader" id="detection-genai">
    <h1 className="gradient__text" style={{ textAlign: 'center' }}>Generative AI Stage-III: Prompt to Video Generation Assessement</h1>
    <div className="embed-container" id="detection">
      <div className="image-container">
        <a target='_blank' href="#">
          <img src={loading} alt="input" />
        </a>
        <p className="caption">Under Development...</p>
      </div>
      <div className="image-container">
        <a target='_blank' href="#">
          <img src={loading} alt="output" />
        </a>
        <p className="caption">Under Development... </p>
      </div>

    </div> 
  

    <div className="image-container">
      <a target='_blank' href="#">
        <p className="caption">🔗Github link: #
        </p>
      </a>
      <a target='_blank' href="#">
        <p className="caption">🚀AI AirCarft Deployed link: #
        </p>
      </a>
      <a target='_blank' href="#">
        <p className="caption">🚀AI Car Deployed link: #
        </p>
      </a>
    </div>

  </div>
);

export default GenAIStageIII;
