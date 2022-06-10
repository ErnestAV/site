import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function JobsCards() {
  return (
    <div className='cards'>
      <h1>Where I've worked</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              href='https://www.dish.com/'
              src='images/Dish-sling.jpeg'
              text='DISH Network (Sling)'
              label='Associate Software Engineer'
            />
            <CardItem
              href='https://amazon.jobs/en/teams/lab126/'
              src='images/AmazonLab126_logo.avif'
              text='Amazon Lab126'
              label='Software Development Engineer Intern'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              href='https://beatbread.com/'
              src='images/beatBread_logo.jpeg'
              text='beatBread'
              label='Software Engineer Intern'
            />
            <CardItem
              href='https://cs.byu.edu/'
              src='images/byu_off.png'
              text='BYU Computer Science'
              label='Research/Teaching Assistant'
            />
            <CardItem
              href='https://applaudostudios.com/'
              src='images/applaudoStudios_logo2.png'
              text='Applaudo Studios'
              label='Software Engineer Trainee'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default JobsCards;
