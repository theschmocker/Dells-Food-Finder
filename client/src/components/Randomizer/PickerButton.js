import React, { Fragment } from 'react';

import RestaurantsContext from '../restaurants-context.js';

const PickerButton = ({ loadingFunction }) => (
        <RestaurantsContext.Consumer>
            {({ filteredRestaurants, pickedRestaurant, updatePickedRestaurant, openToggle, toggleFilter }) => {
                return (
                    <Fragment>
                        <button 
                            onClick={() => {
                                loadingFunction();
                                const restaurant = randomRestaurant(filteredRestaurants, pickedRestaurant);
                                updatePickedRestaurant(restaurant)
                            }}
                            className="randomizer__button"
                        >
                            {!!pickedRestaurant 
                                    ? 'Pick Another'
                                    : 'Random Restaurant'}
                        </button>
                        <OpenToggle openToggle={openToggle} toggleFilter={toggleFilter}/>
                    </Fragment>
                )
            }}
        </RestaurantsContext.Consumer>
)

export default PickerButton;

const OpenToggle = ({ openToggle, toggleFilter }) => ( 
    <div className="open-toggle">
        <span className="open-toggle__label">Open Restaurants Only</span>
        <input 
            className="open-toggle__input"
            type="checkbox" 
            id="switch" 
            checked={openToggle} 
            onClick={toggleFilter}
        />
        <label 
            htmlFor="switch"
            className="open-toggle__button"
        >Toggle</label>
    </div>
)

function randomRestaurant(restaurants, lastPicked) {
    const getRandomRestaurant = () => {
        const randomIndex = Math.floor(Math.random() * restaurants.length);
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
