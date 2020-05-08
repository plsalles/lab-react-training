import React from 'react';
import './IdCard.css';

const IdCard = props => {
    return (    
        <div className="idcard">
            <div>
                <img src={props.picture} alt="lab"></img>
            </div>
            <div>
                <h4>First Name: {props.firstName}</h4>
                <h4>Last Name: {props.lastName}</h4>
                <h4>Gender: {props.gender}</h4>
                <h4>Height: {props.height}</h4>
                <h4>Birth: {props.birth}</h4>
            </div>
        </div>
    );
};
export default IdCard;