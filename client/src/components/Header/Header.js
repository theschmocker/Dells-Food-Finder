import React from 'react';
import { withRouter } from 'react-router-dom';

import Nav from './Nav';
import Hero from './Hero';

const Header = ({ location }) => (
    <header className="header">
        <Nav />
        {location.pathname === '/' && <Hero />}
    </header>
)

export default withRouter(Header);
