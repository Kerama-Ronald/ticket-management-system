import React from 'react';
import './home.css; // You can create this CSS file to style your page

interface TeamMemberProps {
  name: string;
  role: string;
  imageSrc: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, imageSrc }) => (
  <div className="team-member">
    <div className="member-image">
      <img src={imageSrc} alt={name} />
    </div>
    <div className="member-details">
      <h3>{name}</h3>
      <p>{role}</p>
    </div>
  </div>
);

const BluePage: React.FC = () => (
  <div className="blue-page">
    <h1>MEET OUR IT TEAM</h1>
    <div className="team-container">
      <TeamMember
        name="Brian Tovo"
        role="IT Associate"
        imageSrc="src/assets/Tovo.jpeg" // Replace with actual image URL
      />
      <TeamMember
        name="Tandon Samora"
        role="SOC Analyst"
        imageSrc="src/assets/Samora.jpeg" // Replace with actual image URL
      />
    </div>
  </div>
);

export default BluePage;
