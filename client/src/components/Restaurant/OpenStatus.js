import React from 'react';

const OpenStatus = ({ restaurant }) => {
    const periods = restaurant && restaurant.opening_hours ? restaurant.opening_hours.periods : null;

    return (
        <p>
            {!!periods 
                    ? 
                    isOpen(periods) 
                    ? 'Open' 
                    : 'Closed'
                    : 
                    'Unknown'
            }

        </p>
    )
}

export default OpenStatus;

function isOpen(periods) {
    const today = new Date();
    const now = today.getTime();
    const period = periods[today.getDay()];


    // open 24 hours
    if (period.open && !period.close) return true;

    const openMS = getPeriodMilliseconds(period.open, today);
    const closeMS = getPeriodMilliseconds(period.close, today);

    return (now >= openMS && now < closeMS);
}

function getPeriodMilliseconds(period, today) {
    const hours = period.time.slice(0, 2);
    const minutes = period.time.slice(2, 4);
    
    const date = new Date();
    date.setHours(hours)
    date.setMinutes(minutes)

    // handle case where restaurant closes at or after midnight
    if (period.day > today.getDay()) {
        const difference = period.day - today.getDay();
        date.setDate(today.getDate() + difference);
    }

    

    return date.getTime()
}
