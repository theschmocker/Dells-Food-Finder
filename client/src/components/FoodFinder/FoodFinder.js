import React, { Component } from 'react';

import RestaurantList from '../RestaurantList';
import Randomizer from '../Randomizer';

import RestaurantsContext from '../restaurants-context.js';

import openStatus from '../../util/openStatus';

class FoodFinder extends Component {
    state = {
        restaurants: [],
        filteredRestaurants: [],
        openToggle: false,
        pickedRestaurant: undefined,
        updatePickedRestaurant: this.updatePickedRestaurant.bind(this)
    }

    updatePickedRestaurant(pickedRestaurant) {
        this.setState({ pickedRestaurant });
    }

    async componentDidMount() {
        try {
            let restaurants;

            if (sessionStorage.getItem('restaurants')) {
                restaurants = JSON.parse(sessionStorage.getItem('restaurants'));
            } else {
                const res = await fetch('/api/restaurants');
                restaurants = await res.json();

                // handle server response error
                if (!restaurants.ok) return this.setState({ restaurantsError: restaurants.error });

                restaurants = restaurants.data;
                sessionStorage.setItem('restaurants', JSON.stringify(restaurants));
            }


            // calculate open status of restaurants
            restaurants = this.transformRestaurants(restaurants);

            this.setState({ 
                restaurants,
                filteredRestaurants: restaurants,
            });

        } catch (err) { // handle fetch error
            this.setState({ fetchError: err });
        }

    }

    toggleFilter = () => {
        this.setState({ openToggle: !this.state.openToggle });
        this.filterRestaurants();
    }

    filterRestaurants() {
        const filteredRestaurants = !this.state.openToggle 
            ? this.state.restaurants.filter(r => r.opening_hours.open_status === 'Open')
            : this.state.restaurants;

        this.setState({ filteredRestaurants });
    }

    transformRestaurants(restaurants) {
        return restaurants.map(r => {
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
    }

    render() {
        return (
            <RestaurantsContext.Provider 
                value={{
                    ...this.state,
                    toggleFilter: this.toggleFilter,
                }}
            >
                <main>
                    <Randomizer />
                    <RestaurantList/>
                </main>
            </RestaurantsContext.Provider>
        )
    }
}

export default FoodFinder;
