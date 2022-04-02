import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Where I've worked:</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/Amazon_logo.png'
              text='Amazon'
              label='Bay Area, CA'
              target="_blank"
            />
            <CardItem
              src='images/beatBread_logo.jpeg'
              text='beatBread'
              label='St. George, UT'
              path='/Projects'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/byucs_logo.jpg'
              text='BYU Computer Science'
              label='Provo, UT'
              path='/Projects'
            />
            <CardItem
              src='images/applaudoStudios_logo.jpeg'
              text='Applaudo Studios'
              label='San Salvador, ESA'
              path='/Resume'
            />
            <CardItem
              src='images/gruporoble_logo.jpg'
              text='Grupo Roble'
              label='San Salvador, ESA'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
