import React from 'react';

import FaGithub from 'react-icons/lib/fa/github';
import FaLinkedIn from 'react-icons/lib/fa/linkedin';
import FaGlobe from 'react-icons/lib/fa/globe';

const Footer = () => ( 
    <footer className="footer">
        <h2 className="footer__title">Dellish</h2>
        <div className="footer__contact-container">
            <h3 className="footer__contact-title">Contact / Suggestions:</h3>
            <a href="mailto:jacobschmocker@gmail" className="footer__contact-email">jacobschmocker@gmail.com</a>
        </div>
        <div className="footer__social-container">
            <p className="footer__social-madewith">Made with 🍕 by Jacob Schmocker</p> 
            <div className="footer__social-icons">
                <a 
                    className="social-icon" 
                    href="https://github.com/theschmocker"
                ><FaGithub /></a>
                <a 
                    className="social-icon" 
                    href=""
                ><FaLinkedIn /></a>
                <a 
                    className="social-icon" 
                    href=""
                ><FaGlobe /></a>
            </div>
        </div>
        <span className="footer__copyright">&copy; Copyright {new Date().getFullYear()}</span>
    </footer>
)

export default Footer;
