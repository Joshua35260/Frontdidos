import {Link} from "react-router-dom";
import Home from "../screens/Home";

import "./style/Footer.css";
import footerlogo from "../img/bandidos.png"


const Footer = () =>{
    return(
        <div className="footerContainer">
            <Link to="/" element= {<Home/>}>
                <img className="footerLogo" src={footerlogo} alt="logo"/>
            </Link>
        <p className="copyright">Copyright Ⓒ -Bandidos- 2022</p>
            <div className="footerLink">
                <ul>
                    <li><Link to="/banditos">Avis de recherche</Link></li>
                    <li><Link to="/delation">Délation</Link></li>
                </ul>
            </div>
        </div>
)};

export default  Footer;