import { Link } from 'react-router-dom';

import bandidosLogo from '../../img/BANDIDOS.png'
// import bandidosLogo from '../img/BANDIDOS.png'


import './style/Header.css';

const Header = () => {
    return (
      <header className="headerContainer">
        <img src={bandidosLogo} className="bandidos-logo" alt="logo" />
        {/* <img src={bandidosLogo} className="test" alt="test" /> */}
        <ul>
            <li><Link to="/">Concept</Link></li>
            <li><Link to="/">Vos malfrats</Link></li>
            <li><Link to="/">Délation</Link></li>
        </ul>
      </header>
    );
}

export default Header
