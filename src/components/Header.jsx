import { Link} from 'react-router-dom';
import bandidosLogo from '../img/1.png';
import Player from './Player';
import './style/Header.css';

const Header = () => {
    const toggleNav = () => {
      const hamburgerToggler = document.querySelector(".hamburger");
      const navLinksContainer = document.querySelector(".navlinks-container");
  
      hamburgerToggler.classList.toggle("open");
      const ariaToggle =
        hamburgerToggler.getAttribute("aria-expanded") === "true"
          ? "false"
          : "true";
      hamburgerToggler.setAttribute("aria-expanded", ariaToggle);
      navLinksContainer.classList.toggle("open");
    };
  
    return (
      <nav className="blue-background">
        <Link
          to="#"
          className="nav-icon"
          aria-label="visit homepage"
          aria-current="page"
        >
          <img src={bandidosLogo} alt="logo meet'n'sith" />
        </Link>
  
        <div className="main-navlinks">
          <button
            className="hamburger"
            type="button"
            aria-label="Toggle navigation"
            aria-expanded="false"
            onClick={() => toggleNav()}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <div className="navlinks-container blue-background">
            <Link aria-expanded="false" onClick={() => toggleNav()} to="/" aria-current="page">
              Home
            </Link>
  
            <Link to="/banditos">Mises à prix</Link>
            <Link to="/delation">Délation</Link>
  
          </div>
        </div>
      </nav>
    );
  };
  
  export default Header;
