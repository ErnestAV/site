import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import './Youtube.css';
import { Button } from './Button';
import { Parallax } from 'react-parallax'

function HeroSection() {
  return (
    <Parallax bgImage='images/bg-texture.jpeg' strength={500}>
      <div className='youtube-container'>
        <div className='flexbox-container'>
          <div className='flexbox-child'>
            <div className='youtube-title-box'>
              <h1>Ernesto Valencia</h1>
              <h3>Software Engineer</h3>
              <p>
                Brigham Young University <br></br>
                Computer Science, Software Engineering emphasis <br></br>
                <br></br>
              </p>
              <Link to='/Contact'>
                <Button buttonStyle='btn--outline'><i class="fas fa-id-card"></i> Message Me!</Button>
              </Link> &nbsp;&nbsp;
              <a
                href='documents/Ernesto_Resume.pdf'
                target='_blank'
              >
                <Button buttonStyle='btn--outline'><i class="fas fa-scroll"></i> Resume</Button>
              </a>
            </div>
          </div>
          <div className='flexbox-child'>
            <img
              id='profile-pic'
              src='images/youtube_photo.png'
              alt='Youtube Profile'
              draggable="false"
              ondragstart="return false;"
            />
          </div>
        </div>
      </div>
    </Parallax>
  );
}

export default HeroSection;
