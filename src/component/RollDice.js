import React, { Component } from 'react';
import Die from './Die';
import './RollDice.css';

class RollDice extends Component {

    static defaultProps = {
        sides: ['one', 'two', 'three', 'four', 'five', 'six']
    };

    constructor(props) {
        super(props);
        this.state = {d1: 'one', d2: 'one', rolling: false};
        this.roll = this.roll.bind(this);
    };

    roll() {
        const newDie1 = this.props.sides[ 
          Math.floor(Math.random() * this.props.sides.length)
        ];
        const newDie2 = this.props.sides[ 
          Math.floor(Math.random()*this.props.sides.length)
        ];

        this.setState({ d1: newDie1, d2: newDie2, rolling: true });

        // wait one second then rolling false
        // state change pushes a new render
        setTimeout(() => {
            this.setState({rolling: false});
        }, 1000);
    }

    // any time the state is set in these functions, they send a render()
    render() {
        return (
        <div className="RollDice">
            <div className="RollDice--container">
                <Die face={this.state.d1} rolling={this.state.rolling} />
                <Die face={this.state.d2} rolling={this.state.rolling} />
            </div>
            <button onClick={this.roll} disabled={this.state.rolling}>
                { this.state.rolling ? 'Rolling...': 'Roll Dice!'}
            </button>
        </div>
        )
    }
}

export default RollDice;