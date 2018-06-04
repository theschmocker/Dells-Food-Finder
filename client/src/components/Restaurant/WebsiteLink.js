import React from 'react';
import FaExternalLink from 'react-icons/lib/fa/external-link';

const WebsiteLink = ({ name, url, className }) => (    
    <a 
        title={name} 
        href={url}
        className={className}
    >
        <FaExternalLink /> Website
    </a>
)

export default WebsiteLink;
