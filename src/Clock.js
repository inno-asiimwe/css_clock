import React, { Component } from 'react';
import './Clock.css'

class Clock extends Component {
    componentDidMount() {
        const currentTime = new Date();
        this.svg.style.setProperty('--start-seconds', currentTime.getSeconds());
        this.svg.style.setProperty('--start-minutes', currentTime.getMinutes());
        this.svg.style.setProperty('--start-hours', currentTime.getHours() % 12);
    }

    render() {
        return (
            <svg viewBox="0 0 40 40" ref={el => {this.svg = el; }}>
                <circle cx="20" cy="20" r="19" />
                <g className="marks">
                <line x1="15" y1="0" x2="16" y2="0" />
                <line x1="15" y1="0" x2="16" y2="0" />
                <line x1="15" y1="0" x2="16" y2="0" />
                <line x1="15" y1="0" x2="16" y2="0" />
                <line x1="15" y1="0" x2="16" y2="0" />
                <line x1="15" y1="0" x2="16" y2="0" />
                <line x1="15" y1="0" x2="16" y2="0" />
                <line x1="15" y1="0" x2="16" y2="0" />
                <line x1="15" y1="0" x2="16" y2="0" />
                <line x1="15" y1="0" x2="16" y2="0" />
                <line x1="15" y1="0" x2="16" y2="0" />
                <line x1="15" y1="0" x2="16" y2="0" />
                </g>
                <text x="0" y="0" className="tiaText">#TIA</text>
                <line x1="0" y1="0" x2="9" y2="0" className="hour" />
                <line x1="0" y1="0" x2="13" y2="0" className="minute" />
                <line x1="0" y1="0" x2="16" y2="0" className="seconds" />
                <circle cx="20" cy="20" r="0.7" className="pin" />
            </svg>
        );
    }
}


export default Clock;
