import React from 'react';

const AddressLink = ({ address, url, className }) => (    
    <a 
        title={address} 
        href={url}
        className={className}
    >
        Map
    </a>
)

export default AddressLink;
