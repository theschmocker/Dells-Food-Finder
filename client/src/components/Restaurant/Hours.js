
import React from 'react';

const Hours = ({ hours }) => (    
    <ul>
        {hours && hours.map(h => <li key={h}>{h}</li>)}
    </ul>
)

export default Hours;
