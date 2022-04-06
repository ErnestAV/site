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
              rel="noopener noreferrer"
            >
              <i class='fab fa-instagram' />
            </a>
            <a
              class='social-icon-link youtube'
              href='/'
              target='_blank'
              aria-label='Youtube'
              rel="noopener noreferrer"
            >
              <i class='fab fa-youtube' />
            </a>
            <a
              class='social-icon-link twitter'
              href='/'
              target='_blank'
              aria-label='LinkedIn'
              rel="noopener noreferrer"
            >
              <i class='fab fa-linkedin' />
            </a>
          </div>
        </div>
      </section>
      <section>
        <p className='author-statement'>This site was developed by Ernesto Valencia using the React Framework</p>
      </section>
      <section>
        <img className='logo' src='EV_WhiteLogo.png' alt='EV-Logo'/>
      </section>
    </div>
  );
}

export default Footer;
