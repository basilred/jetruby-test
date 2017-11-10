import React from 'react';

class Tiles extends React.Component {
    getTiles() {
        const tiles = [];
        for (var i = 0; i < 16; i++) {
            tiles.push(<span key={i}>Tile</span>);
        }
        return tiles;
    }

    render() {
        return (<div className="Tiles">{this.getTiles()}</div>);
    }
}

export default Tiles;
