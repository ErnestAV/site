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
                <span className='info-text'>Institution: </span>
                <span className='info-text'>Brigham Young University</span>
              </p>
              <p>
                <span className='info-text'>Degree: </span>
                <span className='info-text'>Bachelor of Science in Computer Science</span>
              </p>
              <p>
                <span className='info-text'>Emphasis: </span>
                <span className='info-text'>Software Engineering</span>
              </p>
              <Link to='/Contact'>
                <Button buttonStyle='btn--outline'><i className="fas fa-id-card"></i> Message Me!</Button>
              </Link> &nbsp;&nbsp;
              {/* <Link to='/documents/Ernesto_Resume_UTD.pdf'>
                <Button buttonStyle='btn--outline'><i className="fas fa-scroll"></i> Resume</Button>
              </Link> */}
            </div>
          </div>
          <div className='flexbox-child'>
            <img
              id='profile-pic'
              src='images/youtube_photo.png'
              alt='Youtube Profile'
              draggable="false"
            />
          </div>
        </div>
      </div>
    </Parallax >
  );
}

export default HeroSection;
