import React from 'react';

function CardItem(props) {
  return (
    <>
      <li className='cards__item'>
        <a className='cards__item__link' href={props.href} target='_blank' rel="noopener noreferrer">
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <img
              className='cards__item__img'
              alt='Logo'
              src={props.src}
              draggable="false"
            />
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.text}</h5>
            {props.team && <p className='cards__item__team'>{`@ ${props.team}`}</p>}
          </div>
        </a>
      </li>
    </>
  );
}

export default CardItem;
