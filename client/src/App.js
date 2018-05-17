import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Restaurant from './components/Restaurant';

class App extends Component {
    state = {
        restaurants: []
    }

    async componentDidMount() {
        try {
            const res = await fetch('/api/restaurants');
            const restaurants = await res.json();

            if (!restaurants.ok) return this.setState({ restaurantsError: restaurants.error });

            this.setState({ restaurants: restaurants.data });
        } catch (err) {
            this.setState({ fetchError: err });
        }

    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                {this.state.restaurants && this.state.restaurants.map(r => <Restaurant key={r.id} restaurant={r}/>)}
            </div>
        );
    }
}

export default App;
