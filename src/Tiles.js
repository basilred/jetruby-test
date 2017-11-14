import React from 'react';
import Tile from './Tile';
import './Tiles.css';

class Tiles extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            round: 1,
            hasFreePair: 8,
            pairTiles: [],
            tilesState: []
        };
    }

    tags = ['#75c5d7', '#75c5d7', '#419ba9', '#419ba9', '#77c362', '#77c362', '#c5d837', '#c5d837', '#f6d725', '#f6d725', '#f48c22', '#f48c22', '#ea66a2', '#ea66a2', '#c160a7', '#c160a7'];

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

        const newState = [...this.state.tilesState];
        const newPairTile = [...this.state.pairTiles];

        newState[index].isOpen = true;
        newPairTile.push({tag, index});

        this.setState({
            pairTiles: newPairTile,
            tilesState: newState
        });

        if (newPairTile.length === 2) {
            if (tag !== newPairTile[0].tag) {
                setTimeout(() => {
                    newState[newPairTile[0].index].isOpen = false;
                    newState[newPairTile[1].index].isOpen = false;

                    this.setState({
                        round: this.state.round + 1,
                        pairTiles: [],
                        tilesState: newState
                    });
                }, 500);
            } else {
                let countDown = this.state.hasFreePair - 1;
                this.setState({
                    round: countDown ? (this.state.round + 1) : this.state.round,
                    hasFreePair: countDown,
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
            <div>
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
                <span className="Round">{this.state.hasFreePair ? `Round ${this.state.round}` : `You won the game in ${this.state.round} rounds!`}</span>
            </div>
        );
    }
}

export default Tiles;
