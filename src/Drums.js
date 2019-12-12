import React from 'react';
import './drums.css';


export const Drums = (props) => {

    return (
        <div className="drum-wrapper">
        <button className="drum">{props.name}</button>
        </div>
    );
};