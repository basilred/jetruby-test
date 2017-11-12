import React from 'react';
import './Tile.css';

class Tile extends React.Component {
    handleClick = () => {
        if (this.props.isOpen) {
            return;
        }

        this.props.onTileClick(this.props.tag, this.props.index);
    }

    render() {
        let classNames = "Tile";
        if (this.props.isOpen) {
            classNames += " Tile_opened";
        }

        return (<div className={classNames} onClick={this.handleClick}>{this.props.tag}</div>);
    }
}

export default Tile;
