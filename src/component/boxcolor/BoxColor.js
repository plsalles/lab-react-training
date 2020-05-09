import React from 'react';
import './BoxColor.css';

const BoxColor = ({r, g, b}) => {
    const divStyle = {
        backgroundColor: `rgb(${r},${g},${b})`
    };
    let hexR = ('0'+ r.toString(16).toUpperCase()).slice(-2);
    let hexG = ('0'+ g.toString(16).toUpperCase()).slice(-2);
    let hexB = ('0'+ b.toString(16).toUpperCase()).slice(-2);

    return (
        <div className='boxcolor' style={divStyle}>
            <h3 >rgb({r},{g},{b})</h3>
    <h3 >#{hexR}{hexG}{hexB}</h3>
        </div>
    )
};

export default BoxColor;