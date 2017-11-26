import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import Tile from './Tile';
import './Tiles.css';

class TilesBoard extends React.Component {
    render() {
        return (
            <div className="Tiles-board">
                {this.props.board.map((item, index) => (
                    <Tile
                        key={index}
                        index={index}
                        tag={item.tag}
                        simpleMode={this.props.isSimpleMode}
                        isOpen={item.isOpen}
                        onTileClick={this.props.onTileClick} />
                ))}
            </div>
            );
    }
}

// Tile.propTypes = {
//     simpleMode: PropTypes.bool,
//     isOpen: PropTypes.bool,
//     onTileClick: PropTypes.func,
//     tag: PropTypes.object,
// };

export default TilesBoard;
