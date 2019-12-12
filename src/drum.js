import React from 'react';
import './drum.css';

export const Drum = (props) => {
    return (
        <div className="drum-container">
            <button className="drum">{props.name}</button>
        </div>
    );
};