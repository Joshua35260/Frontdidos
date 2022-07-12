import paysage from "../img/paysage.png"
import "./style/Concept.css"

const Concept = () => {
    return ( <div className="generalPres"> 
    <div className="firstSection">
        <div className="description">
            <h1>Bandidos</h1>
            <p>Eh Amigo des Hautes Plaines aux canyons du Grand Labyrinthe, l’Ouest est vaste et t'as du mal à trouver une nouvelle prime ? En ces temps difficiles ça se comprend ! Mais heureusement nous sommes là. </p>
        </div>
        <div className="illustration">
           <img className="farwest" src={paysage} alt="paysage"/> 
        </div>
         
         
    </div>
   
    <div className="lastSection"></div>

    </div>) 
    }
    export default Concept