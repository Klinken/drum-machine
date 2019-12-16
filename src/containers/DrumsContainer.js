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
    }

        handleKeyPress (event){
            var keyPressed = event.keyCode;
            var audioElement;

            switch (keyPressed) {
                case 81:
                    audioElement = new Audio(sounds.bass.filePath);
                    this.setState({name: sounds.bass.text});
                    break;
                case 87:
                    audioElement = new Audio(sounds.cymbal.filePath);
                    this.setState({name: sounds.cymbal.text});
                    break;
                case 69:
                    audioElement = new Audio(sounds.floorTom.filePath);
                    this.setState({name: sounds.floorTom.text});
                    break;
                case 65:
                    audioElement = new Audio(sounds.hihat.filePath);
                    this.setState({name: sounds.hihat.text});
                    break;
                case 83:
                    audioElement = new Audio(sounds.mediumTom.filePath);
                    this.setState({name: sounds.mediumTom.text});
                    break;
                case 68:
                    audioElement = new Audio(sounds.snare.filePath);
                    this.setState({name: sounds.snare.text});
                    break;
                case 90:
                    audioElement = new Audio(sounds.snareTwo.filePath);
                    this.setState({name: sounds.snareTwo.text});
                    break;
                case 88:
                    audioElement = new Audio(sounds.sticks.filePath);
                    this.setState({name: sounds.sticks.text});
                    break;
                case 67:
                    audioElement = new Audio(sounds.tom.filePath);
                    this.setState({name: sounds.tom.text});
                    break;
                default:
                    this.setState({name: ""});
            }

            if(audioElement){
                audioElement.play();
            }
            
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
                <Drums 
                name="Q" 
                sound={sounds.bass.filePath} 
                setTheState={() => {this.setState({name: sounds.bass.text})}} />

                <Drums 
                name="W" 
                sound={sounds.cymbal.filePath} 
                setTheState={() => {this.setState({name: sounds.cymbal.text})}} />

                <Drums 
                name="E" 
                sound={sounds.floorTom.filePath} 
                setTheState={() => {this.setState({name: sounds.floorTom.text})}} />

                <Drums 
                name="A" 
                sound={sounds.hihat.filePath} 
                setTheState={() => {this.setState({name: sounds.hihat.text})}} />

                <Drums 
                name="S" 
                sound={sounds.mediumTom.filePath} 
                setTheState={() => {this.setState({name: sounds.mediumTom.text})}} />

                <Drums 
                name="D" 
                sound={sounds.snare.filePath} 
                setTheState={() => {this.setState({name: sounds.snare.text})}} />

                <Drums 
                name="Z" 
                sound={sounds.snareTwo.filePath} 
                setTheState={() => {this.setState({name: sounds.snareTwo.text})}} />

                <Drums 
                name="X" 
                sound={sounds.sticks.filePath} 
                setTheState={() => {this.setState({name: sounds.sticks.text})}} />

                <Drums 
                name="C" 
                sound={sounds.tom.filePath} 
                setTheState={() => {this.setState({name: sounds.tom.text})}} />

              </div>

            </div>
        );
    }
}