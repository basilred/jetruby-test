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
            tilesState: [],
            tags: [
                { color: '#75c5d7', val: 1 },
                { color: '#75c5d7', val: 1 },
                { color: '#419ba9', val: 2 },
                { color: '#419ba9', val: 2 },
                { color: '#77c362', val: 3 },
                { color: '#77c362', val: 3 },
                { color: '#c5d837', val: 4 },
                { color: '#c5d837', val: 4 },
                { color: '#f6d725', val: 5 },
                { color: '#f6d725', val: 5 },
                { color: '#f48c22', val: 6 },
                { color: '#f48c22', val: 6 },
                { color: '#ea66a2', val: 7 },
                { color: '#ea66a2', val: 7 },
                { color: '#c160a7', val: 8 },
                { color: '#c160a7', val: 8 },
            ]
        };
        this.tags = [...this.state.tags];
        this.throttle = false;
    }

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

        if (this.throttle) return;

        const newState = [...this.state.tilesState];
        const newPairTile = [...this.state.pairTiles];

        newState[index].isOpen = true;
        newPairTile.push({tag, index});

        this.setState({
            pairTiles: newPairTile,
            tilesState: newState
        });

        if (newPairTile.length === 2) {
            if (tag.val !== newPairTile[0].tag['val']) {
                this.throttle = true;

                setTimeout(() => {
                    newState[newPairTile[0].index].isOpen = false;
                    newState[newPairTile[1].index].isOpen = false;

                    this.setState({
                        round: this.state.round + 1,
                        pairTiles: [],
                        tilesState: newState
                    });

                    this.throttle = false;
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

    handleButtonClick = () => {
        this.setState({ tilesState: this.state.tilesState.map(item => {
            item.isOpen = false;
            return item;
        })});
        setTimeout(() => {
            this.setState({...this.savedState});
            this.tags = [...this.state.tags];
            this.setTilesState();
        }, 200)
    }

    handleCheckbox = (e) => {
        this.setState({
            simpleMode: e.target.checked ? true : false
        });
    };

    componentDidMount() {
        this.setTilesState();
        this.savedState = {...this.state};
    }

    render() {
        return (
            <div className="Tiles">
                <div className="Tiles-board">
                    {this.state.tilesState.map((item, index) => (
                        <Tile
                            key={index}
                            index={index}
                            tag={item.tag}
                            simpleMode={this.state.simpleMode}
                            isOpen={item.isOpen}
                            onTileClick={this.handleTileClick} />
                    ))}
                </div>

                <div className="Controls">
                    <div className="Controls__round">
                        <span className="Round">{this.state.hasFreePair ? `Round ${this.state.round}` : `You won the game in ${this.state.round} rounds!`}</span>
                        {!this.state.hasFreePair &&
                            <button className="Controls-button" onClick={this.handleButtonClick}>New Game</button>}
                    </div>
                    <label className="Controls__easy">
                        <input type="checkbox" onChange={this.handleCheckbox}/>Simplified version
                    </label>
                </div>
            </div>
        );
    }
}

export default Tiles;
