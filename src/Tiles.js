import React from 'react';
import Tile from './Tile';
import './Tiles.css';

class Tiles extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pairTiles: [],
            tilesState: []
        };
    }

    tags = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];

    getTag = () => this.tags.splice(Math.floor(Math.random() * this.tags.length), 1)[0];

    setTilesState = () => {
        const tiles = [];

        for (let i = 0; i < 16; i++) {
            tiles.push({
                tag: this.getTag(),
                isOpen: false
            });
        }

        this.setState({
            tilesState: tiles
        });
    }

    handleTileClick = (tag, index) => {

        const newState = this.state.tilesState;
        const newPairTile = this.state.pairTiles;

        newState[index].isOpen = true;
        newPairTile.push({tag, index});

        this.setState({
            pairTiles: newPairTile,
            tilesState: newState
        });

        if (this.state.pairTiles.length === 2) {
            if (tag !== this.state.pairTiles[0].tag) {
                setTimeout(() => {
                    newState[this.state.pairTiles[0].index].isOpen = false;
                    newState[this.state.pairTiles[1].index].isOpen = false;

                    this.setState({
                        pairTiles: [],
                        tilesState: newState
                    });
                }, 500);
            } else {
                this.setState({
                    pairTiles: []
                });
            }
        }
    }

    componentDidMount() {
        this.setTilesState();
    }

    render() {
        return (
            <div className="Tiles">
                {this.state.tilesState.map((item, index) => (
                    <Tile
                        key={index}
                        index={index}
                        tag={item.tag}
                        isOpen={item.isOpen}
                        onTileClick={this.handleTileClick} />
                ))}
            </div>
        );
    }
}

export default Tiles;
