import React from 'react';

const WebsiteLink = ({ name, url, className }) => (    
    <a 
        title={name} 
        href={url}
    >
        Website
    </a>
)

export default WebsiteLink;
