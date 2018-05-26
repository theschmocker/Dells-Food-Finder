import React, { Fragment } from 'react';

import Restaurant from '../Restaurant';
import PickerButton from './PickerButton';

const PickedRestaurant = ({ restaurant }) => (
    <Fragment>
        <Restaurant restaurant={restaurant} />
        <PickerButton />
    </Fragment>
)

export default PickedRestaurant;
