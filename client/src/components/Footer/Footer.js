import React from 'react';

const Footer = () => ( 
    <footer
        className="footer"
    >
        <h2>Dells Food Finder</h2>
        <span>Built by <a href="https://jacobschmocker.com">Jacob Schmocker</a>.</span> <span>Copyright {new Date().getFullYear()}</span>
    </footer>
)

export default Footer;
