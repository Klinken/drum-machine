import React from 'react';
import { Drums } from '../views/Drums';
import '../css/drumscontainer.css';
import { sounds } from '../data/sounds.db';

export class DrumsContainer extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            name: ""
        };

        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.changeState = this.changeState.bind(this);
    }

        handleKeyPress (event){
            var keyPressed = event.keyCode;
            var audioElement;

            switch (keyPressed) {
                case 81:
                    audioElement = new Audio(sounds.bass);
                    this.setState({name: "Bass"});
                    break;
                case 87:
                    audioElement = new Audio(sounds.cymbal);
                    this.setState({name: "Cymbal"});
                    break;
                case 69:
                    audioElement = new Audio(sounds.floorTom);
                    this.setState({name: "Floor Tom"});
                    break;
                case 65:
                    audioElement = new Audio(sounds.hihat);
                    this.setState({name: "The Hi Hat"});
                    break;
                case 83:
                    audioElement = new Audio(sounds.mediumTom);
                    this.setState({name: "The Medium Tom"});
                    break;
                case 68:
                    audioElement = new Audio(sounds.snareTwo);
                    this.setState({name: "The Secondary Snare"});
                    break;
                case 90:
                    audioElement = new Audio(sounds.snare);
                    this.setState({name: "The Snare"});
                    break;
                case 88:
                    audioElement = new Audio(sounds.sticks);
                    this.setState({name: "Sticks & Stones"});
                    break;
                case 67:
                    audioElement = new Audio(sounds.tom);
                    this.setState({name: "Well you know Tom"});
                    break;
                default:
                    this.setState({name: ""});
            }

            if(audioElement){
                audioElement.play();
            }
            
        }

        changeState (toState){
            this.setState({name: toState});
        }

    render() {
        document.addEventListener("keydown", this.handleKeyPress);
        return (
            <div id="drum-machine">

              <div className="title">
                <h1>DRUM MACHINE</h1>
                <h2>Keep on drumming</h2>
              </div>
              
              <p id="display">{this.state.name}</p>
              
              <div className="drum-grid">
                <Drums name="Q" sound={sounds.bass} setStateName={()=> this.setState({name: "Bass"})} />
                <Drums name="W" sound={sounds.cymbal} />
                <Drums name="E" sound={sounds.floorTom} />
                <Drums name="A" sound={sounds.hihat} />
                <Drums name="S" sound={sounds.mediumTom} />
                <Drums name="D" sound={sounds.snareTwo} />
                <Drums name="Z" sound={sounds.snare} />
                <Drums name="X" sound={sounds.sticks} />
                <Drums name="C" sound={sounds.tom} />
              </div>

            </div>
        );
    }
}