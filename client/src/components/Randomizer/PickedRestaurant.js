import React, { Fragment } from 'react';

import Restaurant from '../Restaurant';
import PickerButton from './PickerButton';

const PickedRestaurant = ({ restaurant }) => (
    <Restaurant restaurant={restaurant} />
)

export default PickedRestaurant;
