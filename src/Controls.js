import React from 'react';
import './Controls.css';

import Checkbox from './Checkbox';

function Controls(props) {
    return (
        <div className="Controls">
            <div className="Controls__round">
                <span className="Round">{props.hasFreePair ? `Round ${props.round}` : `You won the game in ${props.round} rounds!`}</span>
                {!props.hasFreePair &&
                    <button className="Controls-button" onClick={props.onNewGameClick}>New Game</button>}
            </div>
            <Checkbox
                handleChange={props.onSimpleModeChange}
                text={`Simplified version`}
            />
        </div>
    );
};

export default Controls;
