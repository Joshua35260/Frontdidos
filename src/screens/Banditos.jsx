import {useState, useEffect} from "react";
import { MapContainer, TileLayer } from 'react-leaflet'
import { Leaflet } from '../components/Leaflet'
import Filter from "../components/Filter";
import Bandito from "../components/Bandito";

import "../screens/Banditos.css"
import Guns from "../img/guns.png"


import axios from "axios";

const Banditos = () =>{

    const [banditos, setBanditos]= useState([])
    const [bandidosFilter, setbandidosFilter] = useState([])
    const [noResult, setNoResult] = useState(false)
    const [noCreteria, setNoCreteria] = useState(true)
    const [creteria, setCreteria] = useState({
        rating: '',
        ville: '',
        prime: ''
      })


      const filter1 = (arr, strCompare) => {
        return arr.filter(el => el.ville?.includes(strCompare))
      }
    
      const filter2 = (arr, strCompare) => {
        return arr.filter(el => el.rating?.includes(strCompare))
      }
    
     const filter3 = (arr) => {
        return arr.filter(el =>{ switch(creteria.prime)
            {
            case '1':
                return el.prime < 5000 
            case '2':
                return el.prime >= 5000 && el.prime < 10000
            case '3':
                return el.prime >= 10000 && el.prime < 15000

            case '4':
                return el.prime >= 15000 && el.prime < 20000

            case '5':
                return el.prime >= 20000 && el.prime < 25000

            case '6':
                return el.prime >= 25000

            default: 
                return true
            
            }})}
            


    const checkCreteria = (e, creteria, noCreteria) => {
        e.preventDefault()
        console.log('ETAT BORDEL', creteria)
        let result = banditos
        result = creteria.ville ? filter1(result, creteria.ville) : result
        result = creteria.rating ? filter2(result, creteria.rating) : result
        result = creteria.prime ? filter3(result, creteria.prime) : result
      
        setCreteria(creteria)
        setbandidosFilter(result)
        setNoCreteria(noCreteria)
        setNoResult(true)
      }


    
    useEffect(()=>{
        axios
            .get('http://localhost:4242/bandits/')
            .then((res)=>setBanditos(res.data))
    },[]);

    useEffect(() => {
    
    }, [banditos])

    return (
    <div className="banditosContainer">
      
        <div className="banditos">
            <h1 className="banditosTilte"> Les bandits les plus recherchés du farwest ! </h1>
            <img className="guns" src={Guns} alt="guns" />
            <Filter isCheck={checkCreteria} />
                <div className="containerLeafletBandito">
                
                    <div className='wrap-leaf'>
                        {
                        <MapContainer
                        style={{height:'50vh', width:'100vw'}}
                            center={[41.249335, -104.668069]}
                            zoom={5}
                            scrollWheelZoom={false}
                        >
                            <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                            />

                            {!noCreteria  && bandidosFilter.length
                            && bandidosFilter.map((bandito)=>(
                                <Leaflet
                                key={bandito.idbandits}
                                id={bandito.idbandits}
                                name={bandito.name}
                                surname={bandito.surname}
                                rating={bandito.rating}
                                image={bandito.image}
                                armes={bandito.arme}
                                prime={bandito.prime}
                                latitude={bandito.latitude}
                                longitude={bandito.longitude}
                                />
                            ))}

                            {noCreteria  &&
                            banditos !== null &&
                            banditos.map ((bandito)=> (
                                <Leaflet
                                key={bandito.idbandits}
                                id={bandito.idbandits}
                                name={bandito.name}
                                surname={bandito.surname}
                                rating={bandito.rating}
                                image={bandito.image}
                                armes={bandito.arme}
                                prime={bandito.prime}
                                latitude={bandito.latitude}
                                longitude={bandito.longitude}
                                />
                            ))}
                        </MapContainer>
                        }
                    </div>
                
            
                    <div className="banditosCards">
                        {/* .map de l'axios pour récuperer les avis de recherche. */}
                            {!noCreteria  && bandidosFilter.length
                                ? bandidosFilter.map((bandito)=>(
                                        <Bandito
                                        key={bandito.idbandits}
                                        id={bandito.idbandits}
                                        name={bandito.name}
                                        image={bandito.image}
                                        prime={bandito.prime}
                                        />
                                    )): noResult && (
                                        <p className='noResultAff'>
                            Malheureusement, il n'y a aucun résultat qui correspond à
                            votre recherche
                            </p>)}
                            {noCreteria  &&
                            banditos !== null &&
                                banditos.map ((bandito)=> (
                                    <Bandito
                                    key={bandito.idbandits}
                                    id={bandito.idbandits}
                                    name={bandito.name}
                                    image={bandito.image}
                                    prime={bandito.prime}
                                    />
                                ))}
                    </div>
                </div>                
            </div>
    </div>
    )
};

export default Banditos;