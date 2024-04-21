// Modal.jsx
import React from 'react';
import './Modal.css';

const Modal = ({ show, onClose, title, backgroundImage, description, githubLink }) => {
  return (
    show && (
      <div className="modal">
        <div className="modal-content">
          <span className="close" onClick={onClose}></span>
          <div className="modal-header" style={{ backgroundImage: `url(${backgroundImage})` }}></div>
          <div className="modal-body">
            <h2>{title}</h2>
            <p>{description}</p>
            <a className="github-link" href={githubLink} target="_blank" rel="noopener noreferrer">GitHub Link</a>
          </div>
        </div>
      </div>
    )
  );
};

export default Modal;
