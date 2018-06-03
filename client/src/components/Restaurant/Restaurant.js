import React from 'react';

import OpenStatus from './OpenStatus';
import AddressLink from './AddressLink';
import WebsiteLink from './WebsiteLink';
import PhoneLink from './PhoneLink';
import Hours from './Hours';

const Restaurant = ({ restaurant }) => {
    return (
        <div className="restaurant">
            <h2 className="restaurant__name">{restaurant.name}</h2>
            <AddressLink 
                url={restaurant.url}
                address={restaurant.formatted_address}
                className="restaurant__address"
            />
            <WebsiteLink 
                url={restaurant.website}
                name={restaurant.name}
                className="restaurant__website"
            />
            <PhoneLink 
                number={restaurant.formatted_phone_number}
                className="restaurant__phone-number"
            />
            <Hours 
                hours={restaurant 
                        && restaurant.opening_hours 
                        && restaurant.opening_hours.weekday_text}
                className="restaurant__hours"
            />
            <OpenStatus 
                restaurant={restaurant}
                className="restaurant__open-status"
            />
        </div>
    )
}

export default Restaurant;
