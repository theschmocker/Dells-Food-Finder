import React from 'react';

const AddressLink = ({ address, url, className }) => (    
    <a 
        title={address} 
        href={url}
    >
        Map
    </a>
)

export default AddressLink;
