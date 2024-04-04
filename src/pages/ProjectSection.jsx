import {useState} from 'react'
import './Projects.css'

const ProjectSection = () => {
  const [selectedTab, setSelectedTab] = useState('web');
  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };
  return (
    <div className='container2'>
      <nav className='project-nav'>
        <div className="project-header">
          <div className="dash"></div>
          <h1>Projects</h1>
        </div>
        
        <ul>
          <li onClick={() => handleTabChange('web')}>Web</li>
          <li onClick={() => handleTabChange('mobile')}>Mobile</li>
          <li onClick={() => handleTabChange('desktop')}>Desktop</li>
        </ul>
      </nav>
      <div className="project-container">

      </div>
    </div>
  )
}

export default ProjectSection