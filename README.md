# Dice Exercise

Practice using React states, states as props, and some conditional rendering.

# Complete: Notable Take-aways

### Parent Gives Child Data
`RollDice` sets the default states of the die and handles the rolling logic.

* Sends down props to `Die` including rolling. This allows us to have a stateless component: `Die` that can be updated to a new numbered face. `Die` also has logic to return the jsx with the animation class or not based on the state prop it got from RollDice.

### Ternary Operator and Short-Circuiting
* I have noticed a lot of this in React to simplify the readability within jsx. I really enjoy how it works and I feel like it is an elegant solution.

<br>

> This example, while short and sweet, helped me see a use case for conditional rendering. It also explores designing Components in a way that accounts for this data flow to child Components. I can easily see how this frontend combined with a MVC design backend marry well together to form a RESTful app.

## Final Thoughts
The more time I spend with React the more I love it. I got curious and peeked ahead after reading an article about Next.js. I want to get to Next and start looking at Electron and deploying cross platform applications.


<img src="https://i.imgur.com/RPVyvSC.png">

<img src="https://i.imgur.com/N8JuYLr.png">

# Original Post

## Requirements

## Component Structure

* RollDice - parent component that manages the state of the dice.
* Die - individual die that takes props and displays the correct face of the die based on props.

## Making Dice

Fontawesome has dice icon class.

The Die are stateless, and RollDice sends them their state as a prop, allowing them to just display whatever face came down.

State changes it re-renders the die and sends in new props.

## Rolling The Dice

* RollDice has state for both dice.
* a roll() method that rolls them to randomly get a new result

## Optional

* Animation

* Changing button text
