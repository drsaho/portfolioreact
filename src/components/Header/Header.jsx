import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  // Declare a state variable 'activeTab' with the initial value 'aboutMe'
  const [activeTab, setActiveTab] = useState('aboutMe');

  // Function to handle setting the active tab
  const handleSetActiveTab = (tab) => {
    setActiveTab(tab); // Update the activeTab state
  };

  return (
    <header>
      <h1>Amadou Saho</h1>
      <nav>
        <ul>
          <li className={activeTab === 'aboutMe' ? 'active' : ''}>
            <Link 
              to="aboutMe" 
              smooth={true} 
              duration={500} 
              onClick={() => handleSetActiveTab('aboutMe')}
            >
              About Me
            </Link>
          </li>
          <li className={activeTab === 'portfolio' ? 'active' : ''}>
            <Link 
              to="portfolio" 
              smooth={true} 
              duration={500} 
              onClick={() => handleSetActiveTab('portfolio')}
            >
              Portfolio
            </Link>
          </li>
          <li className={activeTab === 'contact' ? 'active' : ''}>
            <Link 
              to="contact" 
              smooth={true} 
              duration={500} 
              onClick={() => handleSetActiveTab('contact')}
            >
              Contact
            </Link>
          </li>
          <li className={activeTab === 'resume' ? 'active' : ''}>
            <Link 
              to="resume" 
              smooth={true} 
              duration={500} 
              onClick={() => handleSetActiveTab('resume')}
            >
              Resume
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
