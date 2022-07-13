import {useState} from 'react'



const Filter = ({isCheck})=> {
    const [noCreteria, setNoCreteria] = useState(true)
    const [creteria, setCreteria] = useState({
        rating: '',
        ville: '',
        prime: ''
      })
    

    
      const handleChange = target => {
        setNoCreteria(false)
    
        if (target.id === 'selectville') {
          setCreteria({ ...creteria, ville: target.value })
        }
        if (target.id === 'selectRating') {
          setCreteria({ ...creteria, rating: target.value })
        }
        if (target.id === 'selectprime') {
          setCreteria({ ...creteria, prime: target.value })
         }
      }


    return (
        <div>
        <select
            className='selectForm eventForm'
            id='selectville'
            onChange={e => handleChange(e.target)}
          >
            <option value=''>Tous</option>
            <option value='Paris'>Paris</option>
            <option value='Groenland'>Groenland</option>
            <option value='Lemmon'>Lemmon</option>
            <option value='Bison'>Bison</option>
            <option value='Tombstone'>Tombstone</option>
            <option value='Rapid City'>Rapid City</option>
            <option value='Lake Roberts'>Lake Roberts</option>
            <option value='NewCastle'>NewCastle</option>
            <option value='DeadWood'>DeadWood</option>
            <option value='Lake Roberts'>Lake Roberts</option>
            <option value='Shanty Town'>Shanty Town</option>
            <option value='Shoshone Falls Park'>Shoshone Falls Park</option>
            <option value='Glad Valley'>Glad Valley</option>
            <option value='Hettinger'>Hettinger</option>
            <option value='Rebel Creek'>Rebel Creek</option>
            <option value='Clyde Lake'>Clyde Lake</option>
            <option value='Bismarck'>Bismarck</option>
            <option value='Rock Springs'>Rock Springs</option>
            <option value='Hyannis'>Hyannis</option>
            <option value='Duncan'>Duncan</option>
            <option value='Albuquerque'>Albuquerque</option>
            <option value='Saskatchewan'>Saskatchewan</option>
          </select>

          <select
            className='selectForm eventForm'
            id='selectRating'
            onChange={e => handleChange(e.target)}>
            <option value= 'Très recherché'>Très recherché</option>
            <option value= 'Juste recherché'>Juste recherché</option>
          </select>
          
          <select
            className='selectForm eventForm'
            id='selectprime'
            onChange={e => handleChange(e.target)}
          >
            <option value='1'>moins de 5000$</option>
            <option value='2'>entre 5000 et 10000$</option>
            <option value='3'>entre 10000 et 15000$</option>
            <option value='4'>entre 15000 et 20000$</option>
            <option value='5'>entre 20000 et 25000$</option>
            <option value='6'>supérieur à 25 000$</option>
          </select> 
          <button
            className='buttonForm buttonEvent'
            onClick={e => isCheck(e, creteria)}
          ></button>
        </div>
 )
}

export default Filter;