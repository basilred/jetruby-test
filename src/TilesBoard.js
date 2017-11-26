import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import Tile from './Tile';
import './Tiles.css';

class TilesBoard extends React.Component {
    render() {
        return (
            <div className={cn("Tiles-board")}>
                {this.props.board.map((item, index) => (
                    <Tile
                        key={index}
                        index={index}
                        tag={item.tag}
                        isSimpleMode={this.props.isSimpleMode}
                        isOpen={item.isOpen}
                        onTileClick={this.props.onTileClick} />
                ))}
            </div>
            );
    }
}

Tile.propTypes = {
    board: PropTypes.array,
    isSimpleMode: PropTypes.bool,
    onTileClick: PropTypes.func,
};

export default TilesBoard;
