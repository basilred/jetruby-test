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

    handleAnimationEnd = e => {
        console.log(e.type);
    }

    handleTransitionEnd = e => {
        console.log(e.type);
    }

    render() {
        return (
            <button
                className={cn("Tile", this.props.isOpen && "Tile_opened")}
                onClick={this.handleClick}
                onAnimationEnd={this.handleAnimationEnd}
                onTransitionEnd={this.handleTransitionEnd}
                style={
                    {
                        backgroundColor: this.props.isOpen && this.props.tag.color,
                        color: this.props.isSimpleMode && this.props.isOpen ? 'white' : 'transparent'
                    }
                }>
                {this.props.tag.val}
            </button>
            );
    }
}

Tile.propTypes = {
    isSimpleMode: PropTypes.bool,
    isOpen: PropTypes.bool,
    onTileClick: PropTypes.func,
    tag: PropTypes.object,
};

export default Tile;
