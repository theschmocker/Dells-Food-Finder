import React from 'react';

import RestaurantsContext from '../restaurants-context.js';

const PickerButton = ({ className }) => (
        <RestaurantsContext.Consumer>
            {({ restaurants, pickedRestaurant, updatePickedRestaurant }) => {
                return (
                    <button 
                        onClick={() => {
                            const restaurant = randomRestaurant(restaurants, pickedRestaurant);
                            updatePickedRestaurant(restaurant)
                        }}
                        className={className}
                    >
                        {!!pickedRestaurant 
                                ? 'Pick Another'
                                : 'Random Restaurant'}
                    </button>
                )
            }}
        </RestaurantsContext.Consumer>
)

export default PickerButton;

function randomRestaurant(restaurants, lastPicked) {
    const getRandomRestaurant = () => {
        const randomIndex = Math.floor(Math.random() * restaurants.length + 1);
        const pickedRestaurant = restaurants[randomIndex];

        return pickedRestaurant;
    }

    const sameRestaurant = (lastRestaurant, nextRestaurant) => {
        return lastRestaurant !== undefined && lastRestaurant.id === nextRestaurant.id;
    }

    // pick restaurant
    let restaurant = getRandomRestaurant();

    // if restaurant is undefined or the same as the last restaurant, pick a new one
    while (!restaurant || sameRestaurant(lastPicked, restaurant)) {
        restaurant = getRandomRestaurant() 
    }

    return restaurant;
}
