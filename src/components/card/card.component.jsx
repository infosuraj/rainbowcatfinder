import React from 'react';
import './card.styles.css'

const Card = ({name, id, email}) => {
    return (
        <div className='card-container' key={id}>
            <img className='card-img-top' alt={`Cat ${name}`} src={`https://robohash.org/${id + 10}?set=set4&size=180x180`}/>
            <div className='card-body'>
                <h2 className='card-title'>{name}</h2>
                <p className='card-text'>{email}</p>
            </div>
        </div>
    );
};

export default Card;
