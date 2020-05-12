import React from 'react';
import './CreditCard.css';

const CreditCard = ({type, number, expirationMonth, expirationYear, bank, owner, bgColor, color}) => {
    const divStyle = {
        backgroundColor: bgColor,
        color: color,
    };
    let logo;
    const credicardNumber = number.substring(12);

    if(type === "Visa"){
        logo = './img/visa.png';
    }else {
        logo = './img/master-card.svg';
    }
   return (
       <div className="creditcard" style={divStyle}>
           <div className="logo">
               <img src={logo} alt=''></img>
           </div>
           <div className="number">
                <p>•••• •••• •••• {credicardNumber}</p>
           </div>
           <div className="expiration-date">
                <p>Expires {expirationMonth}/{expirationYear}        {bank}</p>
                <p>{owner}</p>
           </div>
       </div>
    );

};

export default CreditCard;