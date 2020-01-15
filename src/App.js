import React, { Component, Fragment } from 'react';
import './App.css';

class App extends Component {
    render() {
        const name = 'John Smith';
        return (
            <div className='App'>
                <h1>Hello {name}</h1>
                <h2>Another title</h2>
            </div>
        );
    }
}

export default App;
