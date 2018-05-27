import React, { Component } from 'react';

import Restaurant from '../Restaurant';
import RestaurantList from '../RestaurantList';
import Randomizer from '../Randomizer';

import RestaurantsContext from '../restaurants-context.js';

class FoodFinder extends Component {
    state = {
        restaurants: [],
        pickedRestaurant: undefined,
        updatePickedRestaurant: this.updatePickedRestaurant.bind(this)
    }

    updatePickedRestaurant(pickedRestaurant) {
        this.setState({ pickedRestaurant });
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

    render() {
        return (
            <RestaurantsContext.Provider value={this.state}>
                <main>
                    <Randomizer />
                    <RestaurantList/>
                </main>
            </RestaurantsContext.Provider>
        )
    }
}

export default FoodFinder;
