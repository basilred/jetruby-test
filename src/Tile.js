import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './Tile.css';

class Tile extends React.Component {
    handleClick = () => {
        if (this.props.isOpen) {
            return;
        }

        this.props.onTileClick(this.props.tag, this.props.index);
    }

    render() {
        return (
            <button
                className={cn("Tile", this.props.isOpen && "Tile_opened")}
                onClick={this.handleClick}
                style={
                    {
                        backgroundColor: this.props.isOpen && this.props.tag.color,
                        color: this.props.simpleMode && this.props.isOpen ? 'white' : 'transparent'
                    }
                }>
                {this.props.tag.val}
            </button>
            );
    }
}

Tile.propTypes = {
    simpleMode: PropTypes.bool,
    isOpen: PropTypes.bool,
    onTileClick: PropTypes.func,
    tag: PropTypes.object,
};

export default Tile;
