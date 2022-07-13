import React from 'react'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';

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
        <div> 
			<h2>{bandito.name}</h2>
			<div>
				<img src={require(`../assets/img/${bandito.image}`)} alt={bandito.name} />
			</div>
			<div>{bandito.surname}</div>
            <div>Âge: {bandito.age}</div>
                    <div>Ville :{bandito.ville}</div>
                    <div>Armes : {bandito.armes}</div>
            <div>Rating: {bandito.rating}</div>
            <div>prime: {bandito.prime}</div>
            <div>Crimes: {bandito.crimes}</div>
		</div>
      ): null}
    </>    
  )
}

export default Banditodetails  