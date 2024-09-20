import React from "react";
// import { useNavigate } from 'react-router-dom';

import Damage from "../../containers/damageAssesment/Damage";
import Contact from "../../containers/contactUs/ContactUs";
// import VideoDetection from '../../containers/videoDetection';
import VideoDetection from "../../containers/videoDetection_/VideoDetection";
import CnnModal from "../../containers/cnnModal/CnnModal";

import { Footer, Possibility, WhatGPT3, Header } from "../../containers";
import Navbar from "../navbar/Navbar";

import "./landingPage.css";
import AutoMobileDamage from "../../containers/damageAssesment/AutoMobileDamage";
import AutoMobileCnnModal from "../../containers/cnnModal/AutoMobileCnnModel";
import AutoMobileVideoDetection from "../../containers/videoDetection_/AutoMobileVideoDetection";
import GenAIStageI from "../../containers/genai/GenAIStageI";
import GenAIStageII from "../../containers/genai/GenAIStageII";
import GenAIStageIII from "../../containers/genai/GenAIStageIII";

function LandingPage() {
  // const navigate = useNavigate();
  // navigate('/modelViewer');

  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <WhatGPT3 />
      <CnnModal />
      <Damage />
      <VideoDetection />
      <AutoMobileCnnModal />
      <AutoMobileDamage />
      <AutoMobileVideoDetection />
      <GenAIStageI/>
      <GenAIStageII/>
      <GenAIStageIII/>
      <Contact />
      <Possibility />
      <Footer />
      <div className="chatbot">
        <iframe
          src="https://al-yx.github.io/chatbot/"
          style={{ border: "none" }}
          width="100%"
          height="500px"
          title="chatbot"
        />
      </div>
    </div>
  );
}

export default LandingPage;
