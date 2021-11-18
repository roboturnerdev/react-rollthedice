import React, { Component } from 'react';
import Die from './Die';

class RollDice extends Component {
    constructor(props) {
        super(props);
        this.state = {d1: 'one', d2: 'one'}
    };

    render() {
        return (
        <div>
            <Die face={this.state.d1}/>
            <Die face={this.state.d2}/>
        </div>
        )
    }
}

export default RollDice;