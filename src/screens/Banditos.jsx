import {useState, useEffect} from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Bandito from "../components/Bandito";
import "../screens/Banditos.css"
import Guns from "../img/guns.png"


import axios from "axios";

const Banditos = () =>{

    const [banditos, setBanditos]= useState([])
    useEffect(()=>{
        axios
            .get('urL de notre back')
            .then((res)=>setBanditos(res.data))
    },[]);


    return (
    <div className="banditosContainer">
      
        <div className="banditos">
            <h1 className="banditosTilte"> Les bandits les plus recherchés du farwest ! </h1>
            <img src={Guns} alt="guns" />
            
            <div className="banditosCards">
                {/* .map de l'axios pour récuperer les avis de recherche. */}
                {banditos.map((bandito)=>(
                    <div key={bandito.id}>
                        <Bandito
                            id={bandito.id}
                            name={bandito.name}
                            image={bandito.image}
                            prime={bandito.prime}
                            />
                    </div>
                ))}
            </div>
        </div>
        
    </div>)
};

export default Banditos;