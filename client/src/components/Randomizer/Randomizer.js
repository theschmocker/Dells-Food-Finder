import React from 'react';

import Restaurant from '../Restaurant';
import PickerButton from './PickerButton';
import NotPicked from './NotPicked';
import PickedRestaurant from './PickedRestaurant';

import RestaurantsContext from '../restaurants-context.js';

import './styles.css'

const Randomizer = () => (
    <div className="randomizer">
        <RestaurantsContext.Consumer>
            {({ pickedRestaurant }) => {
                return pickedRestaurant 
                    ? <PickedRestaurant restaurant={pickedRestaurant} />
                    : <NotPicked />
            }}
        </RestaurantsContext.Consumer>
    </div>
)

export default Randomizer;
