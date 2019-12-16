import React from 'react';
import '../css/drums.css';



export const Drums = (props) => {

    function playsound(){
        var soundElement = new Audio(props.sound);
        soundElement.play();
    }

    return (
        <button className="drum-pad" onClick={() => {playsound, props.setStateName}} >
            {props.name}
        </button>
    );
};