import React from 'react';

const OpenStatus = ({ restaurant, className }) => {
    const periods = restaurant && restaurant.opening_hours ? restaurant.opening_hours.periods : null;
    const status = periods ? openStatus(periods) : 'Unknown';
     
    return (
        <div
            className={className}
            role="open-status"
        >
            <span>{status}</span>
            <Indicator 
                blockClass={className}
                status={status}
            />
        </div>
    )
}

const Indicator = ({ status, blockClass }) => (    
    <span aria-hidden="true" className={`${blockClass}__indicator ${blockClass}__indicator--${status.toLowerCase()}`}></span>
)

export default OpenStatus;

function openStatus(periods) {
    if (!periods) return 'Unknown';
    if (periods.length === 1 && periods[0]) return 'Open'
    if (periods.every(p => !p.close)) return 'Open';


    const periodsMS = periods.map(p => {
        const today = new Date();
        return {
            ...p,
            open: getPeriodMilliseconds(p.open, today),
            close: getPeriodMilliseconds(p.close, today),
        }
    });

    const now = (new Date()).getTime();

    for (let period of periodsMS) {
        const { open, close } = period;
        if (now < close && now >= open) return 'Open';
    }

    return 'Closed';
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
    } else if (period.day === 0 && today.getDay() === 6) {
        date.setDate(today.getDate() + 1);
    }

    

    return date.getTime()
}
