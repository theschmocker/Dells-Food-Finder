import React from 'react';
import FaMapMarker from 'react-icons/lib/fa/map-marker';

const AddressLink = ({ address, url, className }) => (    
    <a 
        title={address} 
        href={url}
        className={className}
    >
        <FaMapMarker /> Map
    </a>
)

export default AddressLink;
