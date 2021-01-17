import React from 'react';
import myVideo from "./videos/vid.mp4";
import dep from '../assets/bb.png';



import './HeroSection.css';

function HeroSection() {
    return (
      
      <div className='hero-container'>
        <div className="description">
        <div><img width={250}   src={dep} alt="dep logo" />
        <center><p><font color="Black" ><b>Department management</b></font></p></center>
        </div>
        </div>
        <video controls autoPlay loop muted>
          <source src={myVideo} type="video/mp4"></source>
        </video>

      </div>
    );
  }
  
  export default HeroSection;
  