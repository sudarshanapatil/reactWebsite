import React from 'react';

import Carousal from './Carousal';
import LeftSection from './LeftSection';
import RightSection from './RightSection';
import '../styles/Home.css';

function Home() {
  return (
    <div className='home-container' >
      <div>
        <Carousal />
      </div>
      <div className='section-wrapper'>
        <LeftSection />
        <RightSection />
      </div>
    </div>
  );
}

export default Home;
