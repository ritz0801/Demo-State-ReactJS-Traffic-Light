import React, { Component } from 'react';
import classNames from 'classnames';

import './TrafficLight.css';

const RED = 0;
const ORANGE = 1;
const GREEN = 2;

class TrafficLight extends Component {
    render() {
        const { color } = this.props;
        return <div className="TrafficLight">
            <div className={classNames('bulb', 'red', {
                active: color === RED
            })}></div>
            <div className={classNames('bulb', 'orange', {
                active: color === ORANGE
            })}></div>
            <div className={classNames('bulb', 'green', {
                active: color === GREEN
            })}></div>
        </div>
    }
}

export default TrafficLight;