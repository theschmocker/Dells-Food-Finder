import React, { Component } from 'react';

import PickerButton from './PickerButton';
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
            <div class="randomizer__container">
                <div className="randomizer">
                    
                    <RestaurantsContext.Consumer>
                        {({ pickedRestaurant }) => {
                            if (pickedRestaurant) {
                                return this.state.loading ? <Loader /> : <PickedRestaurant restaurant={pickedRestaurant} />
                            }
                            else {
                                return <h2 class="randomizer__heading">Randomizer</h2>
                            }
                        }}
                    </RestaurantsContext.Consumer>
                    {!this.state.loading && <PickerButton loadingFunction={this.fakeLoading}/>}
                </div>
            </div>
            
        );
    }
}

export default Randomizer;
