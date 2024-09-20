import React from 'react';
import './GenAIStageI.css';
import TestingImageCNN from '../../assets/TestingImageCNN.jpeg';
import img1 from '../../assets/stage-one.png'
import img2 from '../../assets/stage-onee.png'
import gen1 from '../../assets/gen_1.png'
import gen2 from '../../assets/gen_2.png'
import gen3 from '../../assets/gen_3.png'
import gen4 from '../../assets/gen_4.png'
import TestingImageResultCNN from '../../assets/TestingImageResultCNN.jpeg';

const GenAIStageI = () => (
  <div className="damageHeader" id="detection-genai">
    <h1 className="gradient__text" style={{ textAlign: 'center' }}>Generative AI Stage-I: Prompt to Text Assessement</h1>
    <div className="embed-container" id="detection">
      <div className="image-container">
        <a target='_blank' href="https://github.com/krishnashah122/AI-Repair-Mechanic">
          <img src={gen1} alt="input" />
        </a>
        <p className="caption">AI Aircraft Repair Mechanic Input</p>
      </div>
      <div className="image-container">
        <a target='_blank' href="https://aiaircraftmechanic.azurewebsites.net/">
          <img src={gen2} alt="output" />
        </a>
        <p className="caption">AI Aircraft Repair Mechanic Output </p>
      </div>

    </div> 
    <div className="embed-container" id="detection">
      <div className="image-container">
        <a target='_blank' href="https://github.com/krishnashah122/AI-Repair-Mechanic">
          <img src={gen3} alt="input" />
        </a>
        <p className="caption">AI Car Mechanic Input</p>
      </div>
      <div className="image-container">
        <a target='_blank' href="https://aicarmechanic.azurewebsites.net/">
          <img src={gen4} alt="output" />
        </a>
        <p className="caption">AI Car Mechanic Output </p>
      </div>

    </div> 
    <div className="image-container">
      <a target='_blank' href="https://github.com/krishnashah122/AI-Repair-Mechanic">
        <p className="caption">🔗Github link: https://github.com/krishnashah122/AI-Repair-Mechanic
        </p>
      </a>
      <a target='_blank' href="https://aiaircraftmechanic.azurewebsites.net/">
        <p className="caption">🚀AI AirCarft Deployed link: https://aiaircraftmechanic.azurewebsites.net/
        </p>
      </a>
      <a target='_blank' href="https://aicarmechanic.azurewebsites.net/">
        <p className="caption">🚀AI Car Deployed link:https://aicarmechanic.azurewebsites.net/
        </p>
      </a>
    </div>

  </div>
);

export default GenAIStageI;
