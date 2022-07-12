import {Link} from "react-router-dom";
import Home from "../screens/Home";

import "./style/Footer.css";
import homeLogo from "../img/bandidosLogo.png"


const Footer = () =>{
    return(
        <div className="footerContainer">
        <p>Copyright Ⓒ -Bandidos- 2022</p>
            <div className="footerLink">
                <Link to="/" element= {<Home/>} style={{ textDecoration: 'none' }}>
                    <p>Home</p>
                    <img className="footerLogo" src={homeLogo} alt="logo"/>
                </Link>
                {/* <Link to="/" element= {<Contact/>}>
                    <img className="footerLogo" src="./img/BANDIDOS.png" alt="logo"/>
                </Link> */}
                {/* <Link to="/bandits" element= {<Bandits/>}>
                    <img className="footerLogo" src="./img/BANDIDOS.png" alt="logo"/>
                </Link> */}
            </div>
        </div>
)};

export default  Footer;