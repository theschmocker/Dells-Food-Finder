import React from 'react';

import Restaurant from '../Restaurant';
import RestaurantsContext from '../restaurants-context.js';

//{JSON.parse(restaurant.opening_hours)
//                .weekday_text
//.map(day => <li>{day}</li>)}
const RestaurantList = () => (
    <RestaurantsContext.Consumer>
        {({ filteredRestaurants }) => (
            <div className="restaurant__list">
                {filteredRestaurants.map(r => (
                    <Restaurant 
                        restaurant={r} 
                        key={r.id}
                    />
                ))}
            </div>
        )}
    </RestaurantsContext.Consumer>
)

export default RestaurantList;
