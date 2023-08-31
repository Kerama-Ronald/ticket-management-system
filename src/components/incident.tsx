import React from 'react';

const IncidentComponent: React.FC = () => {
  const sectionStyle = {
    backgroundColor: '#0b5cde',
    padding: '10px',
    marginBottom: '10px',
    color: 'white',
    textTransform: 'uppercase',
  };

  return (
    <div>
      <h2 style={sectionStyle}>INCIDENT IDENTIFICATION</h2>
      <h2 style={sectionStyle}>INCIDENT CATEGORISATION</h2>
      <h2 style={sectionStyle}>INCIDENT RESPONSE</h2>
      <h2 style={sectionStyle}>INCIDENT CLOSURE</h2>
      <h2 style={sectionStyle}>INCIDENT MANAGEMENT BEST PRATICE</h2>
    </div>
  );
}

export default IncidentComponent;
