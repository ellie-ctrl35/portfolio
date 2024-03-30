import React from 'react';
import './NeonCard.css'; // Make sure to create a NeonCard.css file for styles

const NeonCard = ({ Icon, title, description, gradientColors, shadowColors }) => {
  const backgroundStyle = {
    background: `linear-gradient(${gradientColors.join(', ')})`,
    boxShadow: shadowColors.map(color => `0 0 10px ${color}`).join(', '),
  };

  return (
    <div className="neon-card" style={backgroundStyle}>
      <div className='header-txt'>
        {Icon && <Icon className="neon-card-icon" />}
        <h3 className="neon-card-title">{title}</h3>
      </div>
      <p className="neon-card-description">{description}</p>
    </div>
  );
};

export default NeonCard;
