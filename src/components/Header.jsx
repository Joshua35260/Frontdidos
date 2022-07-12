import { Link, NavLink } from 'react-router-dom';

import bandidosLogo from '../img/bandidos.png';

import './style/Header.css';

const Header = () => {
    return (
    <header className='headerContainer'>
        <img src={bandidosLogo} className="bandidosLogo" alt="logo" />
        {/* <NavLink to="/">Concept</NavLink>
        <NavLink to="/">Vos malfrats</NavLink>
        <NavLink to="/">Délation</NavLink> */}

        <ul className='pages'>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/banditos">Avis de recherche</NavLink></li>
            <li><NavLink to="/delation">Délation</NavLink></li>
        </ul>
        </header>
    );
}

export default Header