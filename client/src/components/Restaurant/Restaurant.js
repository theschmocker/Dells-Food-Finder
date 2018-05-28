import React from 'react';

import OpenStatus from './OpenStatus';
import AddressLink from './AddressLink';
import WebsiteLink from './WebsiteLink';
import Hours from './Hours';

const Restaurant = ({ restaurant }) => {
    return (
        <div className="restaurant">
            <h2 className="restaurant__name">{restaurant.name}</h2>
            <AddressLink 
                url={restaurant.url}
                address={restaurant.formatted_address}
            />
            <WebsiteLink 
                url={restaurant.website}
                name={restaurant.name}
            />
            <Hours 
                hours={restaurant 
                        && restaurant.opening_hours 
                        && restaurant.opening_hours.weekday_text}
            />
            <OpenStatus restaurant={restaurant}/>
            <ul className="restaurant__hours">
            </ul>
        </div>
    )
}

export default Restaurant;
