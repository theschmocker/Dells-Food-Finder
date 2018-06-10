import React, { Component } from 'react';

import Restaurant from '../Restaurant';
import PickerButton from './PickerButton';
import NotPicked from './NotPicked';
import PickedRestaurant from './PickedRestaurant';
import Loader from './Loader';

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
                        if (pickedRestaurant) {
                            return this.state.loading ? <Loader /> : <PickedRestaurant restaurant={pickedRestaurant} />
                        }
                    }}
                </RestaurantsContext.Consumer>
                {!this.state.loading && <PickerButton loadingFunction={this.fakeLoading}/>}
            </div>
            
        );
    }
}

export default Randomizer;
