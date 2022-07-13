import { Link} from 'react-router-dom';
import bandidosLogo from '../img/1.png';
import Player from './Player';
import './style/Header.css';
import ReactPlayer from 'react-player'
import { useState } from 'react';

const Header = () => { 
  const[isplaying, setisplaying] = useState(false)
  const[play, setPlay] = useState(false)
  const songUrl = 'https://www.youtube.com/watch?v=6FrlCfkffVI'

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
        <div className='Music'>
        <Player isplaying={isplaying} setisplaying={setisplaying} play={play} setPlay={setPlay}/>
        
        </div>
        <div className='hidden-player'>{play ?<ReactPlayer url={songUrl} playing={true} config={{youtube: {playerVars: {disablekb: 1}}}} height='1px' width='1px'/> : <ReactPlayer url={songUrl} playing={false} height='1px' width='1px'/>}
        </div>
        
      </nav>
      
    );
  };
  
  export default Header;
