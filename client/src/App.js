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

    pickRestaurant() {
        const pickedRestaurant = this.state.restaurants[Math.floor(Math.random() * 61)];
        this.setState({ pickedRestaurant });
    }

    render() {
        return (
            <div className="App">
                <button onClick={() => this.pickRestaurant()}>Pick!</button>
                {this.state.pickedRestaurant && 
                        <div
                            style={{border: '3px solid #bd1d00'}}
                        >
                            <h2>Your restaurant!</h2>
                            <Restaurant 
                                restaurant={this.state.pickedRestaurant}
                            />
                        </div>}
                {this.state.restaurants && this.state.restaurants.map(r => <Restaurant key={r.id} restaurant={r}/>)}
            </div>
        );
    }
}

export default App;
