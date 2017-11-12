import React from 'react';
import Tile from './Tile';

class Tiles extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPairNumber: null,
            tiles: [],
            tilesState: []
        };
    }

    getTiles = () => {
        const tiles = [];
        const tilesState = [];
        for (let i = 1; i <= 16; i++) {
            const delim = i % 2;
            tilesState.push(0);
            tiles.push(
                <Tile
                    key={i}
                    onTileClick={this.handleTileClick}
                    index={i-1}
                    pairNumber={delim ? i + 1 : i}
                    open={tilesState[i-1]}/>
                );
        }

        this.setState({
            tiles: tiles,
            tilesState: tilesState
        });
    }

    handleTileClick = (pairNumber, index) => {
        const tile = this.state.tiles[index];
        const tiles = this.state.tiles;
        tiles.splice(index, 1, tile);

        this.setState({
            tiles: tiles
        });
    }

    componentDidMount() {
        this.getTiles();
    }

    render() {
        return (<div className="Tiles">{this.state.tiles}</div>);
    }
}

export default Tiles;
