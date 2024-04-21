import React from "react";
import  './Hero.css'
import { GitHub,Instagram,Mail,LinkedIn} from '@mui/icons-material';
import Profile from '../images/profile.jpg'
import GitHubCalender from "../components/GitHubCalender";

const HeroSection = () => {
  return (
  <div className='container'>
   <div className="intro-text" style={{ animationName: 'slideInFromLeft' }}>
    <h5 className="hello-text">Hello! I'm</h5>
    <h1 className="name">Emmanuel E. Nyatepe</h1>
    <h2>Full Stack Spftware Engineer </h2>
    <button className="btn-git">GET IN TOUCH</button>
    <div className="socials">
     <GitHub className="social-icon" size={60} color="white"/>
     <Instagram className="social-icon"/>
     <Mail className="social-icon"/>
     <LinkedIn className="social-icon"/>
    </div>
    <div className="contribution-graph">
      <GitHubCalender/>
    </div>
   </div>
   <div className="profile" style={{ animationName: 'slideInFromRight' }}>
    <img className="profile-pic" alt="profile" src={Profile}/>
   </div>
  </div>
  )
};

export default HeroSection;
