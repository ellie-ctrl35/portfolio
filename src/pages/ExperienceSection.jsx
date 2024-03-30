import React from 'react'
import './Services.css'
import { HiGlobeAlt } from "react-icons/hi";
import NeonCard from '../components/NeonCard';

const ExperienceSection = () => {
  return (
    <div className='container'>
     <div className='skill-container'>
     <NeonCard
        Icon={HiGlobeAlt} // Replace with your chosen icon component
        title="Web App"
        description="Lorem ipsum dolor sit amet..."
        gradientColors={['#7928CA', '#FF0080']} // Your gradient colors
        shadowColors={['#7928CA', '#FF0080']} // Your shadow colors
      />
     </div>
     <div className="skill-text">

     </div>
    </div>
  )
}

export default ExperienceSection