 import React from 'react'

 import { Marker, Popup } from 'react-leaflet'
 import { useNavigate } from 'react-router-dom'
 import './style/Leaflet.css'

 export const Leaflet = ({
 surname,
   name,
   image,
   id,
   ville,
   rating,
   armes,
   latitude,
   longitude
 }) => {
   let navigate = useNavigate()
   // const position = [41.249335, -104.668069]

   return (
     <>
       <Marker key={id} position={[latitude, longitude]}>
         <Popup position={[latitude, longitude]}>
           <div className='pop_up-contain'>
             <>
               
               <h2>{name}</h2>
               <p>{rating}</p>
               <p>{surname}</p>
               <p>{armes}</p>
             </>
             <button
               className='leaflet_btn__card'
               onClick={() => navigate(`/banditos/${id}`)}
             >
               Détail
             </button>
           </div>
         </Popup>
       </Marker>
     </>
   )
 }
