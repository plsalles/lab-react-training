import React from 'react';
import './Random.css';

const Random = ({min, max}) => {
    let array = [];
    for (let i = min; i < max; i++){
        array.push(i);
    }
    let random = Math.floor(Math.random() * array.length);
    return (
        <div>
            <h3 className='random'>Random value between {min} and {max} => {random}</h3>
        </div>
    )
};

export default Random;