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
        title="Web Development"
        description="Lorem ipsum dolor sit amet..."
        gradientColors={['#3b108c', '#20b7d4']} // Your gradient colors
      />
      <NeonCard
        Icon={HiGlobeAlt} // Replace with your chosen icon component
        title="Mobile Development"
        description="Lorem ipsum dolor sit amet... Lorem ipsumhj efvbjeklceklkxzklnc kllkdkmlkcv kle dvnc,mdn ckn ckl
        ml fdknleklnklecklmkl mklklmv;lcklklvmlmklvklenvklnpocfk[pwmckocochibuihreoihponvkjbkjabiucniocniubiucijb
          jodncpodpojmcioninckenciln"
        gradientColors={['#4ea7cc', '#9d58fc']} // Your gradient colors// Your shadow colors
      />
      <NeonCard
        Icon={HiGlobeAlt} // Replace with your chosen icon component
        title="Desktop Development"
        description="Lorem ipsum dolor sit amet..."
        gradientColors={['#993b6f', '#410f92']} // Your gradient colors
      />
      
     </div>
     <div className="skill-text">

     </div>
    </div>
  )
}

export default ExperienceSection