
import React from 'react';

const Hours = ({ hours, className }) => (    
    <div className={className}>
        <ul>
            {hours && hours.map(h => <li key={h}>{h}</li>)}
        </ul>
    </div>
)

export default Hours;
