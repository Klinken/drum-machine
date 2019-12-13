import React from 'react';
import { Drums } from '../presentation/Drums';
import '../css/drumscontainer.css';
import { sounds } from '../data/sounds.db';

export class DrumsContainer extends React.Component {
    constructor(props){
        super(props);

        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

        handleKeyPress (event){
            var keyPressed = event.keyCode;
            var audioElement;

            switch (keyPressed) {
                case 81:
                    audioElement = new Audio(sounds.bass);
                    break;
                case 87:
                    audioElement = new Audio(sounds.cymbal);
                    break;
                case 69:
                    audioElement = new Audio(sounds.floorTom);
                    break;
                case 65:
                    audioElement = new Audio(sounds.hihat);
                    break;
                case 83:
                    audioElement = new Audio(sounds.mediumTom);
                    break;
                case 68:
                    audioElement = new Audio(sounds.snareTwo);
                    break;
                case 90:
                    audioElement = new Audio(sounds.snare);
                    break;
                case 88:
                    audioElement = new Audio(sounds.sticks);
                    break;
                case 67:
                    audioElement = new Audio(sounds.tom);
                    break;
                default:
                    audioElement = null;
            }

            if(audioElement){
                audioElement.play();
            }
            
        }

    render() {
        document.addEventListener("keydown", this.handleKeyPress);
        return (
            <div id="drum-machine">
                <Drums name="Q" sound={sounds.bass}/>
                <Drums name="W" sound={sounds.cymbal}/>
                <Drums name="E" sound={sounds.floorTom}/>
                <Drums name="A" sound={sounds.hihat}/>
                <Drums name="S" sound={sounds.mediumTom}/>
                <Drums name="D" sound={sounds.snareTwo}/>
                <Drums name="Z" sound={sounds.snare}/>
                <Drums name="X" sound={sounds.sticks}/>
                <Drums name="C" sound={sounds.tom}/>
            </div>
        );
    }
}