import React from 'react';

//{JSON.parse(restaurant.opening_hours)
//                .weekday_text
//.map(day => <li>{day}</li>)}
const Restaurant = ({ restaurant }) => (
    <div className="restaurant">
        <h2 className="restaurant__name">{restaurant.name}</h2>
        <ul className="restaurant__hours">
        </ul>
    </div>
)

export default Restaurant;
