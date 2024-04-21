// WebProjects.jsx
import React, { useState } from 'react';
import './ProjectType.css';
import ProjectCard from '../ProjectCard';
import Modal from '../Modal';
import Photo from '../../images/profile.jpg';

const WebProjects = () => {
  const [modalData, setModalData] = useState(null);

  const openModal = (data) => {
    setModalData(data);
  };

  const closeModal = () => {
    setModalData(null);
  };

  return (
    <div className='content'>
      <ProjectCard
        projectName="Project Name 1"
        backgroundImage={Photo}
        title="Project Title 1"
        description="Project Description 1"
        githubLink="https://github.com/yourusername/project-repo1"
        onClick={() => openModal({
          title: "Project Title 1",
          backgroundImage: Photo,
          description: "Project Description 1",
          githubLink: "https://github.com/yourusername/project-repo1"
        })}
      />
      <ProjectCard
        projectName="Project Name 2"
        backgroundImage={Photo}
        title="Project Title 2"
        description="Project Description 2"
        githubLink="https://github.com/yourusername/project-repo2"
        onClick={() => openModal({
          title: "Project Title 2",
          backgroundImage: Photo,
          description: "Project Description 2",
          githubLink: "https://github.com/yourusername/project-repo2"
        })}
      />
      {/* Add more ProjectCard components as needed */}
      {modalData && (
        <Modal
          show={true}
          onClose={closeModal}
          title={modalData.title}
          backgroundImage={modalData.backgroundImage}
          description={modalData.description}
          githubLink={modalData.githubLink}
        />
      )}
    </div>
  );
}

export default WebProjects;
