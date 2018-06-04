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
            <OpenStatus 
                restaurant={restaurant}
                className="restaurant__open-status"
            />
            <Hours 
                hours={restaurant 
                        && restaurant.opening_hours 
                        && restaurant.opening_hours.weekday_text}
                className="restaurant__hours"
            />
            <AddressLink 
                url={restaurant.url}
                address={restaurant.formatted_address}
                className="restaurant__address restaurant__link"
            />
            <WebsiteLink 
                url={restaurant.website}
                name={restaurant.name}
                className="restaurant__website restaurant__link"
            />
            <PhoneLink 
                number={restaurant.formatted_phone_number}
                className="restaurant__phone-number restaurant__link"
            />
        </div>
    )
}

export default Restaurant;
