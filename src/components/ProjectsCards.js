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
              href='https://interrecipes.netlify.app/'
              src='images/InterRecipesT.png'
              text='InterRecipes'
              label='Website'
            />
            <CardItem
              href='https://github.com/ErnestAV/FamilyMapClientAndroidS'
              src='images/FamilyMap.jpeg'
              text='Family Map'
              label='Android App'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              href='https://github.com/ErnestAV/BloodMatchingProjectOld'
              src='images/bmp_logo.jpeg'
              text='Blood Matching Project'
              label='Modified for NDA'
            />
            <CardItem
              href='https://github.com/ErnestAV/SpellingCorrector'
              src='images/sc_logo.png'
              text='Spelling Corrector'
              label='Java'
            />
            <CardItem
              href='https://github.com/ErnestAV/ConvexSolver'
              src='images/convex_logo.jpeg'
              text='Convex Solver'
              label='Python'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProjectsCards;
