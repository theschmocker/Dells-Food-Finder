import React from 'react';

const OpenStatus = ({ restaurant, className }) => {
    const status = restaurant.opening_hours.open_status;
     
    return (
        <div
            className={className}
            aria-label="open status"
        >
            <Indicator 
                blockClass={className}
                status={status}
            />
            <span>{status}</span>
        </div>
    )
}

const Indicator = ({ status, blockClass }) => (    
    <span aria-hidden="true" className={`${blockClass}__indicator ${blockClass}__indicator--${status.toLowerCase()}`}></span>
)

export default OpenStatus;
