// AboutUs.tsx
import React from 'react';
import './AboutUs.css';
import { useNavigate } from 'react-router-dom';
import fennectronLogo from '../assets/fennectron.png';
import appliancesIllustration from '../assets/team.png';

const AboutUs: React.FC = () => {
  const navigate = useNavigate();
  
  const teamMembers = [
    {
      name: "Merzouk Karim",
      title: ["Data scientist", "Full Stack dev"],
      imageUrl: "src/assets/team/karim.jpg"
    },
    {
      name: "Merzougui Mohammed",
      title: ["UI / UX Designer", "Marketing"],
      imageUrl: "src/assets/team/jalil.jpg"
    },
    {
      name: "Moulahcene Abdelmounaim",
      title: ["Front-end Dev", "Video editor"],
      imageUrl: "src/assets/team/monaim.jpg"
    },
    {
      name: "Mahrouk Mohammed",
      title: ["Front-end Dev", "UI / UX Designer"],
      imageUrl: "src/assets/team/moh.jpg"
    }
  ];

  return (
    <div className="aboutus-container">
      <div className="aboutus-content">
        <div className="aboutus-info-section">
          <div className="logo-container">
            <a href='/'><img src={fennectronLogo} alt="FenneCtron" className="logo" /></a>
          </div>
          
          
          <div className="team-section">
            <h2 className="team-heading">Meet Our Team</h2>
            <div className="team-members-grid">
              {teamMembers.map((member, index) => (
                <div key={index} className="team-member-card">
                  <div className="member-image-container">
                    <img src={member.imageUrl} alt={member.name} className="member-image" />
                  </div>
                  <h3 className="member-name">{member.name}</h3>
                  <div className="member-titles">
                    {member.title.map((title, idx) => (
                      <div key={idx} className="member-title-item">
                        <span className="bullet">•</span>
                        <span>{title}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="cta-section">
            <button className="learn-more-button" onClick={() => navigate("/pricing")}>View Pricing</button>
            <button className="signup-button" onClick={() => navigate("/signup")}>Get Started</button>
          </div>
        </div>
        
        <div className="aboutus-image-section">
            <div className='NavBar'>
            <a href='/'>Home</a>
            <a href='/aboutus' className="active">About Us</a>
            <a href='#'>Blog</a>
            <a href='/pricing' >Pricing</a>
          </div>
          <img src={appliancesIllustration} alt="Home Appliances" className="appliances-illustration" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;