import React from 'react';
import './sidebar.css';
import Cards from './Cards';

const Sidebar = () => {
  const Text = ["Legal","Safety and Privacy Center", "Privacy Policy", "Cookies", "About Ads", "Accessibility"] 
  return (
    <div className='sidebarMainContainer'>
        <div className="sidebarTopSection">
          <h1>Your Library</h1>
          <p>+</p>
        </div>

        <div className="sidebarMiddleSection">
          <Cards heading="Create your first playlist" subheading="It's easy,we'll help you" buttontext="Create playlist"  />
          <Cards heading="Let's find some podcasts to follow" subheading="We'll keep you updated on new episodes" buttontext="Browse podcasts" />
        </div>

        <div className="sidebarBottomSection">
          <div className="sidebarBottomSectionTopSection">
            {
              Text.map((ele)=>{
                return(
                <p>{ele}</p>
                )
              })
            }
          </div>

          <div className="sidebarBottomSectionBottomSection">
            <p>Cookies</p>
            
            <button>English</button>
          </div>

        </div>
    </div>
  );
};

export default Sidebar;
