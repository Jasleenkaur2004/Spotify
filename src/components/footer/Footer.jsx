import React from 'react';
import { FaInstagram, FaSnapchatGhost } from 'react-icons/fa'; // Import both icons
import './footer.css';

const Footer = () => {
  const instagramUrl = "https://www.instagram.com/j_jandoria24/";
  const snapchatUrl = "https://www.snapchat.com/add/j_jandoria"; // Replace with your actual Snapchat username

  return (
    <div className='footerSectionMainContainer'>
      {/* Instagram Icon */}
      <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
        <FaInstagram size={30} style={{ color: '#E1306C', cursor: 'pointer', marginRight: '15px' }} />
      </a>

      {/* Snapchat Icon */}
      <a href={snapchatUrl} target="_blank" rel="noopener noreferrer">
        <FaSnapchatGhost size={30} style={{ color: '#FFFC00', cursor: 'pointer' }} />
        <p>Jasleen kaur </p>
      </a>
    </div>
  );
};

export default Footer;
