import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Nav = ({ match }) => (
    <nav className="nav">
        <Title />
        <Links />
    </nav>
)

const Title = () => (
    <Link to="/" ><h1 className="nav__title">Dells Food Finder 🍔</h1></Link>
)

const Links = () => (
    <div className="nav__links">
        <NavLink 
            className="nav__link" 
            activeClassName="nav__link--active"
            to="/about"
        >
            About
        </NavLink>
    </div>
)

export default Nav;
