import React from "react";
import  './Hero.css'
import { Home01Icon } from '@hugeicons/react-pro';

const HeroSection = () => {
  return (
  <div className='container'>
   <div className="intro-text">
    <h5 className="hello-text">Hello! I'm</h5>
    <h1 className="name">Emmanuel E. Nyatepe</h1>
    <h2>Full Stack Developer</h2>
    <button className="btn-git">GET IN TOUCH</button>
    <div className="socials">
     <Home01Icon size={32} color="white"/>
    </div>
   </div>
   <div className="profile">
    
   </div>
  </div>)
};

export default HeroSection;
