import React, { useState } from 'react';
import './Projects/ProjectType.css';

const ProjectCard = ({ backgroundImage, description, githubLink,projectname }) => {
  const [showDetails, setShowDetails] = useState(false);

  const handleCardClick = () => {
    setShowDetails(true);
  };

  return (
    <div className="project-card" style={{ backgroundImage: `url(${backgroundImage})` }} onClick={handleCardClick}>
        <p className='project-name'>{projectname}</p>
        <div className="card-details">
          <p className="card-description">{description}</p>
          <a className="github-link" href={githubLink} target="_blank" rel="noopener noreferrer">GitHub Link</a>
        </div>
    </div>
  );
};

export default ProjectCard;
