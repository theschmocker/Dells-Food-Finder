import React, { Component } from 'react';
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

            // handle server response error
            if (!restaurants.ok) return this.setState({ restaurantsError: restaurants.error });

            this.setState({ restaurants: restaurants.data });

        } catch (err) { // handle fetch error
            this.setState({ fetchError: err });
        }

    }

    pickRestaurant() {
        const getRandomRestaurant = () => {
            const randomIndex = Math.floor(Math.random() * this.state.restaurants.length + 1);
            const pickedRestaurant = this.state.restaurants[randomIndex];

            return pickedRestaurant;
        }

        const sameRestaurant = (lastRestaurant, nextRestaurant) => {
            return lastRestaurant !== undefined && lastRestaurant.id === nextRestaurant.id;
        }

        // pick restaurant
        let restaurant = getRandomRestaurant();

        // if restaurant is undefined or the same as the last restaurant, pick a new one
        while (!restaurant || sameRestaurant(this.state.pickedRestaurant, restaurant)) {
            restaurant = getRandomRestaurant() 
        }

        this.setState({ pickedRestaurant: restaurant });
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
