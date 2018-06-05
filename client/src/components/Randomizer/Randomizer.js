import React, { Component } from 'react';

import Restaurant from '../Restaurant';
import PickerButton from './PickerButton';
import NotPicked from './NotPicked';
import PickedRestaurant from './PickedRestaurant';

import RestaurantsContext from '../restaurants-context.js';

class Randomizer extends Component {
    state = {
        loading: false,
    }

    fakeLoading = () => {
        this.setState({ loading: true });
        setTimeout(() => {this.setState({ loading: false })}, 3000);
    }

    render() {
        return (
            <div className="randomizer">
                <RestaurantsContext.Consumer>
                    {({ pickedRestaurant }) => {
                        return pickedRestaurant 
                            ? <PickedRestaurant restaurant={pickedRestaurant} />
                            : <NotPicked />
                    }}
                </RestaurantsContext.Consumer>
            </div>
            
        );
    }
}

export default Randomizer;
