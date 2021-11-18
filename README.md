# Dice Exercise

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
