import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className='footer-container'>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='social-icons'>
            <a
              class='social-icon-link github'
              href='https://github.com/ErnestAV'
              target='_blank'
              aria-label='Github'
              rel="noopener noreferrer"
            >
              <i class='fab fa-github' />
            </a>
            <a
              class='social-icon-link instagram'
              href='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </a>
            <a
              class='social-icon-link youtube'
              href='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </a>
            <a
              class='social-icon-link twitter'
              href='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </a>
          </div>
        </div>
      </section>
      <section>
        <img className='logo' src='EV_logo1.png' alt='EV-Logo'/>
      </section>
    </div>
  );
}

export default Footer;
