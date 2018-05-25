import React from 'react';

const RestaurantsContext = React.createContext({
    restaurants: [],
    pickedRestaurant: undefined,
    updatePickedRestaurant: () => {}
});
 export default RestaurantsContext;
