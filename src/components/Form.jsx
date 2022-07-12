import "./style/Form.css"

const Form = () => {
    return (
    
        <div className="containerForm">
        <h1 className="h1form">Balance ton Bandit</h1>
        <form>
          <label for="fname">Son Nom</label>
          <input type="text" id="fname" name="firstname" placeholder="El Bandidos" />
      
          <label for="sujet">Localisation</label>
          <input type="text" id="sujet" name="sujet" placeholder="Ahlowa" />
      
          <label for="emailAddress">Prime</label>
          <input id="emailAddress" type="email" name="email" placeholder="$$$" />
      
      
          <label for="subject">Quel type de criminel ?</label>
          <textarea id="subject" name="subject" placeholder="Votre message"></textarea>
      
          <input type="submit" value="Envoyer" />
        </form>
      </div>
      
    )
}

export default Form