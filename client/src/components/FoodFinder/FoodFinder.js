import React, { Component } from 'react';

import RestaurantList from '../RestaurantList';
import Randomizer from '../Randomizer';

import RestaurantsContext from '../restaurants-context.js';

import openStatus from '../../util/openStatus';

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
            let restaurants = await res.json();

            // handle server response error
            if (!restaurants.ok) return this.setState({ restaurantsError: restaurants.error });

            // calculate open status of restaurants
            restaurants = restaurants.data.map(r => {
                const opening_hours = r.opening_hours ? {
                    ...r.opening_hours,
                    open_status: openStatus(r.opening_hours.periods),
                } : {
                    open_status: openStatus(null)
                }

                return {
                    ...r,
                    opening_hours
                }
            });

            

            this.setState({ restaurants });

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
