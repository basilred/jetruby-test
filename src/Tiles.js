import React from 'react';
import TilesBoard from './TilesBoard';
import Controls from './Controls';

class Tiles extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            round: 1,
            hasFreePair: 8,
            pairTiles: [],
            tilesState: [],
            tags: props.tags
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

                    this.setState(prevState => ({
                        round: prevState.round + 1,
                        pairTiles: [],
                        tilesState: newState
                    }));

                    this.throttle = false;
                }, 500);
            } else {
                let countDown = this.state.hasFreePair - 1;
                this.setState(prevState => ({
                    round: countDown ? (prevState.round + 1) : prevState.round,
                    hasFreePair: countDown,
                    pairTiles: []
                }));
            }
        }
    }

    handleButtonClick = () => {
        this.setState(prevState => ({ tilesState: prevState.tilesState.map(item => {
            item.isOpen = false;
            return item;
        })}));
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
                <TilesBoard board={this.state.tilesState} isSimpleMode={this.state.simpleMode} onTileClick={this.handleTileClick} />

                <Controls
                    hasFreePair={this.state.hasFreePair}
                    round={this.state.round}
                    onNewGameClick={this.handleButtonClick}
                    onSimpleModeChange={this.handleCheckbox}
                />
            </div>
        );
    }
}

export default Tiles;
