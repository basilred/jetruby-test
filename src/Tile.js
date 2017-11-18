import React from 'react';
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
            <div
                className={cn("Tile", this.props.isOpen && "Tile_opened")}
                onClick={this.handleClick}
                style={{backgroundColor: this.props.isOpen && this.props.tag.color}} />
            );
    }
}

export default Tile;
