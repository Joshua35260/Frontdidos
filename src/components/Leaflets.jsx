import React from 'react'
import { Marker, Popup } from 'react-leaflet'
import { useNavigate } from 'react-router-dom'
import './Leaflet.css'

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
  // const position = [47.389509, 0.693421]

  return (
    <>
      <Marker key={id} position={[latitude, longitude]}>
        <Popup position={[latitude, longitude]}>
          <div className='pop_up-contain'>
            <>
              <img src={image} alt={name} />
              <h2>{`${name}`}</h2>
              <p>{`${ville}`}</p>
              <p>{` ${[armes]}`}</p>
              <p>{`${rating}`}</p>
              <p>{`${surname}`}</p>
            </>
            <button
              className='leaflet_btn__card'
              onClick={() => navigate(`/banditdetails/${id}`)}
            >
              Détail
            </button>
          </div>
        </Popup>
      </Marker>
    </>
  )
}
