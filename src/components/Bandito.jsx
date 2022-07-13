import "./style/Bandito.css";

import {Link} from "react-router-dom";


const Bandito =({id, name, image, prime}) =>{
    const linkToBandito = `/bandits/${id}`
    return (
        <div>

            <Link className="linkDetails" to={linkToBandito}> 
                <div className="poster"> 
                    <h1 className="wanted">WANTED</h1> 
                    <p className="subheading">Dead or Alive</p> 
                    <img className="mugshot" src={require(`../assets/img/${image}`)} alt={name}/> 
                    <p className="name">{name} </p>
                    <h2 className="reward">Reward</h2> 
                    <div className="price"> {prime}$</div> 
                </div>    
            </Link>
        </div>
    )
}

export default Bandito;