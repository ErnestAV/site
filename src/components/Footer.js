import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='social-icons'>
            <a
              className='social-icon-link github'
              href='https://github.com/ErnestAV'
              target='_blank'
              aria-label='Github'
              rel="noopener noreferrer"
            >
              <i className='fab fa-github' />
            </a>
            <a
              className='social-icon-link stack overflow'
              href='https://stackoverflow.com/users/16856321/ernesto-valencia'
              target='_blank'
              aria-label='Stack Overflow'
              rel="noopener noreferrer"
            >
              <i className='fab fa-stack-overflow' />
            </a>
            <a
              className='social-icon-link twitter'
              href='/'
              target='_blank'
              aria-label='LinkedIn'
              rel="noopener noreferrer"
            >
              <i className='fab fa-linkedin' />
            </a>
          </div>
        </div>
      </section>
      <section>
        <p className='author-statement'>This site was developed by Ernesto Valencia using the React Framework</p>
      </section>
      <section>
        <img className='logo' src='EV_WhiteLogo.png' alt='EV-Logo' />
      </section>
    </div>
  );
}

export default Footer;
