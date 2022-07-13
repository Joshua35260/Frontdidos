import React from 'react'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';

import "./style/Banditodetails.css";

function Banditodetails() {

    const [bandito, setBandito] = useState()
    let {id} = useParams()
    console.log(id)
     useEffect(() =>{
            axios
          .get(`http://localhost:4242/bandits/${id}`)
          .then((res) => console.log('test', bandito) || setBandito(res.data));
    },[])


  
  return (
    <>
    {bandito? (
      <div className='containerDetails'>
        <div className='posterDetails'>
          <div className='profilDetails'>
          <h1 className="wantedDetails">WANTED</h1>
            <h2>{bandito.name}</h2>
            <div>
              <img className='imgDetails' src={require(`../assets/img/${bandito.image}`)} alt={bandito.name} />
            </div>
            <div>{bandito.surname}</div>
          </div>
          <div className='descriptionDetails'>
            <div>Âge: {bandito.age} ans</div>
                    <div>Localisation : {bandito.ville}</div>
                    <div> Armes favorites : {bandito.armes}</div>
            <div>Indice de recherche : {bandito.rating}</div>
            <div>prime : {bandito.prime}$</div>
            <div>Recherché pour : {bandito.crimes}</div>
          </div>
      </div> 
		</div>
      ): null}
    </>    
  )
}

export default Banditodetails  