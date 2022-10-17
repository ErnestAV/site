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
              href='https://www.sling.com/'
              src='images/SlingTv-Dark.jpeg'
              text='Sling TV'
              label='Associate Software Engineer'
            />
            <CardItem
              href='https://amazon.jobs/en/teams/lab126/'
              src='images/Amazon_logo.png'
              text='Amazon Lab126'
              label='Software Engineer Intern'
            />
            <CardItem
              href='https://beatbread.com/'
              src='images/beatBreadPB.jpg'
              text='beatBread'
              label='Software Engineer Intern'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              href='https://cs.byu.edu/'
              src='images/byu_logo.png'
              text='BYU Computer Science'
              label='Research/Teaching Assistant'
            />
            <CardItem
              href='https://applaudostudios.com/'
              src='images/applaudoStudios_logo.jpeg'
              text='Applaudo Studios'
              label='Software Engineer Trainee'
            />
            <CardItem
              href='https://beatbread.com/'
              src='images/grupoRoble.jpeg'
              text='Grupo Roble'
              label='Technical Support Specialist'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default JobsCards;
