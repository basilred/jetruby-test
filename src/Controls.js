import React from 'react';
import './Controls.css';

function Controls(props) {
    return (
        <div className="Controls">
            <div className="Controls__round">
                <span className="Round">{props.hasFreePair ? `Round ${props.round}` : `You won the game in ${props.round} rounds!`}</span>
                {!props.hasFreePair &&
                    <button className="Controls-button" onClick={props.onNewGameClick}>New Game</button>}
            </div>
            <label className="Controls__easy">
                <input className="Controls__checkbox" type="checkbox" onChange={props.onSimpleModeChange}/>Simplified version
            </label>
        </div>
    );
};

export default Controls;
