import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import Tile from './Tile';
import './Tiles.css';

function TilesBoard(props) {
    return (
        <div className={cn("Tiles-board")}>
            {props.board.map((item, index) => (
                <Tile
                    key={index}
                    index={index}
                    tag={item.tag}
                    isSimpleMode={props.isSimpleMode}
                    isOpen={item.isOpen}
                    onTileClick={props.onTileClick} />
            ))}
        </div>
        );
}

Tile.propTypes = {
    board: PropTypes.array,
    isSimpleMode: PropTypes.bool,
    onTileClick: PropTypes.func,
};

export default TilesBoard;
