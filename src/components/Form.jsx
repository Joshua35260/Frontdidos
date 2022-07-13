import axios from "axios"
import { useEffect, useState } from "react"
import "./style/Form.css"

const Form = () => {
  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [age, setAge] = useState(0)
  const [prime, setPrime] = useState(0)
  const [description, setDescription] = useState('')
  const [crimes, setCrimes] = useState('')
  const [dead, setDead] = useState(false)
  const [alive, setAlive] = useState(false)
  const [deadoralive, setDeadoralive] = useState(false)
  const [status, setStatus] = useState(false)
  const [image, setImage] = useState('')
  const [ville, setVille] = useState('')
  const [rating, setRating] = useState('')

  // const { name, surname, prime, age, prime, description, crimes, dead, alive, deadoralive, status, image, voix, ville, latitude, longitude, rating, armes } = details

function submit() {
    // axios.post('http://localhost:4242', ) //url, details
    console.log( name, surname, prime, age, description, crimes, dead, alive, deadoralive, status, image, ville, rating )
// }

// const deadButton = () => {
//   setDead(!dead)
//   // setAlive(false)
//   // setDeadoralive(false)
//   console.log(dead, alive, deadoralive)
}
// const aliveButton = () => {
//   setDead(false)
//   setAlive(!alive)
//   setDeadoralive(false)
// }
// const deadoraliveButton = () => {
//   setDead(false)
//   setAlive(false)
//   setDeadoralive(!deadoralive)
// }

    return (
    
        <div className="containerForm">
        <h1 className="h1form">Balance ton Bandit</h1>
        <form onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="fname">Son Nom</label>
          <input type="text" id="fname" name="firstname" placeholder="El Bandidos" value={name} onChange={(e) => setName(e.target.value)}/>
      
          <label htmlFor="surname">Localisation</label>
          <input type="text" id="surname" name="surname" placeholder="Billy the Kid" value={surname} onChange={(e) => setSurname(e.target.value)}/>
      
          <label htmlFor="age">Prime</label>
          <input id="age" type="number" name="age" placeholder="$$$" value={age} onChange={(e) => setAge(e.target.value)}/>
          
          <label htmlFor="prime">Prime</label>
          <input id="prime" type="number" name="prime" placeholder="age" value={prime} onChange={(e) => setPrime(e.target.value)}/>

          <label htmlFor="desctiption">Localisation</label>
          <input type="text" id="desctiption" name="desctiption" placeholder="description physique - personnalité" value={description} onChange={(e) => setDescription(e.target.value)}/>

          <label htmlFor="crimes">Localisation</label>
          <input type="text" id="crimes" name="crimes" placeholder="voleur de vache" value={crimes} onChange={(e) => setCrimes(e.target.value)}/>
      
          <label htmlFor="subject">Quel type de criminel ?</label>
          <textarea id="subject" name="subject" placeholder="Votre message"></textarea>

          <label htmlFor="deadoralive">Dead or alive </label>
          <input type="radio" value={dead} name="deadoralive" onChange={(e) => setDead(e.target.value)} /> Mort
          <input type="radio" value={alive} name="deadoralive" onChange={(e) => setAlive(e.target.value)}/> Vif
          <input type="radio" value={deadoralive} name="deadoralive" onChange={(e) => setDeadoralive(e.target.value)}/> Mort ou Vif

          <label htmlFor="status">En liberté?</label>
          <input type="checkbox" value={status} name="status" onChange={(e) => setStatus(e.target.value)}/> {status && "Oui"}

          <label htmlFor="ville">Localisation</label>
          <input type="text" id="ville" name="ville" placeholder="Las Vegas" value={ville} onChange={(e) => setVille(e.target.value)}/>

          <label htmlFor="rating">Rating</label>
          <input type="checkbox" value={rating} name="Trés recherché" onChange={(e) => setRating(true)}/>{name}
          <input type="checkbox" value={rating} name="juste recherché" onChange={(e) => setRating(false)}/>{name}
      
          <input type="submit" value="Envoyer" onSubmit={axios.post('http://localhost:4242/bandits', {name, surname, prime, age, description, crimes, dead, alive, deadoralive, status, image, ville, rating})}/>
        </form>
      </div>
    )
}

export default Form