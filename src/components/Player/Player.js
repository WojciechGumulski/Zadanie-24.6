import React from 'react';
import './Player.css';

const Player = (props) => (
  <li className="Player">
    <p className="Player__name">{props.name}</p>
    <p className="Player__score">{props.score}</p>
    <button className="Player__button" onClick={() => props.onPlayerScoreChange(1)} >+</button>
    <button className="Player__button" onClick={() => props.onPlayerScoreChange(-1)} >-</button>
    <button className="delete-button" onClick={() => props.onPlayerRemove()} >Usuń</button>
  </li>
);

export default Player;