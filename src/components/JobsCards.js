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
              href='https://microsoft.com/'
              src='images/microsoft-logo.jpeg'
              text='Microsoft'
              label='Software Engineer Intern'
              team='Microsoft Edge'
            />
            <CardItem
              href='https://www.sling.com/'
              src='images/SlingTv-Dark.jpeg'
              text='Sling TV'
              label='Associate Software Engineer'
              team='Adaptive Player JS'
            />
            <CardItem
              href='https://amazon.jobs/en/teams/lab126/'
              src='images/Amazon_logo.png'
              text='Amazon Lab126'
              label='Software Engineer Intern'
              team='FireTV'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              href='https://beatbread.com/'
              src='images/beatBreadPB.jpg'
              text='beatBread'
              label='Software Engineer Intern'
              team='Development'
            />
            <CardItem
              href='https://cs.byu.edu/'
              src='images/byu_logo.png'
              text='BYU Computer Science'
              label='Research/Teaching Assistant'
              team='Lab. Interactive Machines'
            />
            <CardItem
              href='https://applaudostudios.com/'
              src='images/applaudoStudios_logo.jpeg'
              text='Applaudo Studios'
              label='Software Engineer Trainee'
              team='General'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default JobsCards;
