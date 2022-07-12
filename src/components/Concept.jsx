import paysage from "../img/land.png"
import "./style/Concept.css"
import gun from "../img/gun.png"
import bullet from "../img/bullete.png"

const Concept = () => {
    return ( <div className="generalPres"> 
    <div className="firstSection">
        <div className="description">
            <h1 className="title">BANDIDOS</h1>
            <p className="desc">Eh Amigo des Hautes Plaines aux canyons du Grand Labyrinthe, l’Ouest est vaste et t'as du mal à trouver une nouvelle prime ? En ces temps difficiles ça se comprend ! Mais heureusement pour vous, nous sommes là. </p>
            <img className="bullet" src={bullet} alt="balle" />
        </div>
        <div className="illustration">
           <img className="farwest" src={paysage} alt="paysage"/> 
        </div>
    </div>
   
    <div className="lastSection">
        <div className="illustration">
                <img className="gun" src={gun} alt="gun" />
                </div>
            <div className="explication">
                <p className="explparag">Vous en avez assez de vous faire piller ou alors vous cherchez un moyen d'arrondir votre fin de mois et n'avez pas peur du danger ?
            Si c'est le cas, vous êtes au bon endroit ! Vous pouvez consultez ici ou mettre à jour des infos sur les têtes mises à prix, comme sur la prime ou le dernier endroit ou le bandit a été vu afin de vous aider dans votre quête de chasseur de primes !
            </p>
            <div className="button">
    <div className="box">B</div>
    <div className="box">A</div>
    <div className="box">N</div>
    <div className="box">D</div>
    <div className="box">I</div>
    <div className="box">T</div>
    <div className="box">S</div>
</div>
    </div>
</div>
    </div>) 
    }
    export default Concept