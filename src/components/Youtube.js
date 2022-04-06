import React from 'react';
import '../App.css';
import './Youtube.css';
import { Button } from './Button';
import { Parallax } from 'react-parallax'

function HeroSection() {
  return (
    <Parallax bgImage='images/sf_bg.jpeg' strength={500}>
      <div className='youtube-container'> 
          <div className='flexbox-container'>
            <div className='flexbox-child'>
              <div className='youtube-title-box'>
                <h1>Ernesto Valencia</h1>
                <p>Youtube Content Creator</p>
                <Button buttonStyle='btn--outline'><i class='fab fa-youtube' /> Watch on YouTube</Button>
              </div>
            </div>
            <div className='flexbox-child'>
              <img id='profile-pic' src='images/youtube_photo.png' alt='Youtube Profile' />
            </div>
          </div>
      </div>
    </Parallax>
  );
}

export default HeroSection;
