import { Link } from 'react-router-dom';

import bandidos-logo from '../img/BANDIDOS.png'

import './style/Header.css';

const Header = () => {
    return (
      <header className="headerContainer">
        <img src={bandidos-logo} className="bandidos-logo" alt="logo" />
        <ul>
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/">Vos malfrats</Link></li>
            <li><Link to="/">Délation</Link></li>
        </ul>
      </header>
    );
}

export default Header
