import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function ProjectsCards() {
  return (
    <div className='cards'>
      <h1>Personal Projects</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              href='https://www.amazon.com/'
              src='images/Amazon_logo.png'
              text='Amazon'
              label='Bay Area, CA'
            />
            <CardItem
              href='https://beatbread.com/'
              src='images/beatBread_logo.jpeg'
              text='beatBread'
              label='St. George, UT'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              href='https://cs.byu.edu/'
              src='images/byu_logo.png'
              text='BYU Computer Science'
              label='Provo, UT'
            />
            <CardItem
              href='https://applaudostudios.com/'
              src='images/applaudoStudios_logo.jpeg'
              text='Applaudo Studios'
              label='San Salvador, ESA'
            />
            <CardItem
              href='https://www.gruporoble.com/'
              src='images/gruporoble_logo.jpg'
              text='Grupo Roble'
              label='San Salvador, ESA'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProjectsCards;
