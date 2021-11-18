import React, { Component } from 'react';
import Die from './Die';

class RollDice extends Component {

    static defaultProps = {
        sides: ['one', 'two', 'three', 'four', 'five', 'six']
    };

    constructor(props) {
        super(props);
        this.state = {d1: 'one', d2: 'one'}
        this.roll = this.roll.bind(this);
    };

    roll() {
        const newDie1 = this.props.sides[ 
          Math.floor(Math.random() * this.props.sides.length)
        ];
        const newDie2 = this.props.sides[ 
          Math.floor(Math.random()*this.props.sides.length)
        ];

        this.setState({ d1: newDie1, d2: newDie2 });
    }

    // any time the state is set in these functions, they send a render()
    render() {
        return (
        <div>
            <Die face={this.state.d1}/>
            <Die face={this.state.d2}/>
            <button onClick={this.roll}>Roll The Bones</button>
        </div>
        )
    }
}

export default RollDice;