import React from 'react';
import { Image } from 'react-bootstrap';

import '../styles/LeftSection.css'

function LeftSection() {
  return (
    <div className='left-wrapper'>
      <div style={{
        backgroundColor: 'blue',
        color: 'white',
        fontSize: 24, padding: 5,
      }}>
        Introdunction
    </div>
      <div className='left-data'>
        <div className='left-image'>
          <Image src={(require('../images/P9.jpg'))} thumbnail />
        </div>
        <div className='left-info'>
          Pandit Sanjeev Abhyankar, the maestro from the Mewati Gharana, is an artist of international acclaim in the field of Hindustani Classical and Devotional Music. An extremely popular artist, he is the inspiration for the young generation. With his magical singing, he has attracted the young generation towards the Indian Classical music. In a career spanning more than 25 years, he has assumed the mantle of a role model of dedication, hard work, patience and perseverance.
        </div>
      </div>
    </div>
  );
}

export default LeftSection;





