import React, { Component } from 'react';
import Tiles from './Tiles';

import config from './config.json';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Tiles tags={config.tags} />
            </div>
        );
    }
}

export default App;
