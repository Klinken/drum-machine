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
        this.playSound = this.playSound.bind(this);
        this.setName = this.setName.bind(this);
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

        playSound(sound){
            var soundElement = new Audio(sound);
            soundElement.play();
        }

        setName(newState){
            this.setState({name: newState});
        }
        
    render() {
        document.addEventListener("keydown", this.handleKeyPress);
        return (
            
            <div id="drum-machine">

              <div className="title">
                <h1>DRUM MACHINE</h1>
                <h2>Keep on drumming</h2>
              </div>
              
              <p id="display">
                  {this.state.name}
              </p>
              
              <div className="drum-grid">
                <Drums 
                name="Q" 
                sound={() => {
                    this.playSound(sounds.bass.filePath);
                    this.setName(sounds.bass.text);
                }} />
                
                <Drums 
                name="W" 
                sound={() => {
                    this.playSound(sounds.cymbal.filePath);
                    this.setName(sounds.cymbal.text);
                }} />
                
                <Drums 
                name="E" 
                sound={() => {
                    this.playSound(sounds.floorTom.filePath);
                    this.setName(sounds.floorTom.text);
                }} />
                
                <Drums 
                name="A" 
                sound={() => {
                    this.playSound(sounds.hihat.filePath);
                    this.setName(sounds.hihat.text);
                }} />
                
                <Drums 
                name="S" 
                sound={() => {
                    this.playSound(sounds.mediumTom.filePath);
                    this.setName(sounds.mediumTom.text);
                }} />
                
                <Drums 
                name="D" 
                sound={() => {
                    this.playSound(sounds.snare.filePath);
                    this.setName(sounds.snare.text);
                }} />
                
                <Drums 
                name="Z" 
                sound={() => {
                    this.playSound(sounds.snareTwo.filePath);
                    this.setName(sounds.snareTwo.text);
                }} />
                
                <Drums 
                name="X" 
                sound={() => {
                    this.playSound(sounds.sticks.filePath);
                    this.setName(sounds.sticks.text);
                }} />
                
                <Drums 
                name="C" 
                sound={() => {
                    this.playSound(sounds.tom.filePath);
                    this.setName(sounds.tom.text);
                }} />
                
              </div>

            </div>
        );
    }
}