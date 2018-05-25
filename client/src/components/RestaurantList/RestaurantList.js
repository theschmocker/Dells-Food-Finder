import React from 'react';

import Restaurant from '../Restaurant';
import RestaurantsContext from '../restaurants-context.js';

//{JSON.parse(restaurant.opening_hours)
//                .weekday_text
//.map(day => <li>{day}</li>)}
const RestaurantList = () => (
    <RestaurantsContext.Consumer>
        {({ restaurants }) => (
            <div className="restaurant__list">
                {restaurants.map(r => (
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
