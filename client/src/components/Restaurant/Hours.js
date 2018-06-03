
import React from 'react';

const Hours = ({ hours, className }) => (    
    <ul className={className}>
        {hours && hours.map(h => <li key={h}>{h}</li>)}
    </ul>
)

export default Hours;
