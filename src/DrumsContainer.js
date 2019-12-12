import React from 'react';
import { Drums } from './Drums';
import './drumscontainer.css';
import { beats } from './sounds/beats.db';

export class DrumsContainer extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            name: "Hello"
        };

        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    handleKeyPress (event){
        if (event.keyCode === 65){
        this.setState({name: beats.beatOne});
        return alert(this.state.name);
        } else {
        return alert(this.state.name);
        }
    }

    render() {
        document.addEventListener("keydown", this.handleKeyPress);
        return (
            <div className="drum-container">
                <Drums name="Nooo" />
            </div>
        );
    }
}