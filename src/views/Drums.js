import React from 'react';
import '../css/drums.css';



export const Drums = (props) => {
    return (
        <button className="drum-pad" onClick={props.sound} >
            {props.name}
        </button>
    );
};