import React from 'react';
import { Drum } from './drum';
import './drummer.css';

export class Drummer extends React.Component {
    render() {
        return (
            <div className="drum-grid">
                Hello
                <Drum name="Press E"/>

            </div>
        );
    }
}