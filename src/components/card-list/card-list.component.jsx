import React from 'react';
import './card-list.styles.css'
import Card from "../card/card.component";

const CardList = (props) => {
    const cat = props.monsters;

    return (
        <div className='card-list'>
            {
                cat.map((cat) => {
                    const { name, email, id } = cat;
                    return (
                        <Card name={name} email={email} id={id} key={id}/>
                    )

                })
            }
        </div>
    );
};

export default CardList;
