import React from 'react';
import './Tile.css';

class Tile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasPair: false,
            isOpen: false
        }
    }

    handleClick = () => {
        if (this.state.isOpen) {
            return;
        } else {
            this.setState({
                isOpen: true,
            });
        }

        this.props.onTileClick(this.props.pairNumber, this.props.index);
    }

    render() {
        return (<div className="Tile" onClick={this.handleClick}>{this.props.index}</div>);
    }
}

export default Tile;
