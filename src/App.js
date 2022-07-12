import { Routes, Route } from 'react-router-dom'
import Home from "../src/screens/Home.jsx";
import './App.css';
import Concept from './components/Concept.jsx';

function App() {
  return (
    <div className="App">
      <p>poulet</p>
      <Home />
      {/* <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/bandits' element={<Bandits />} />
        <Route path='/informers' element={<Informers />} />
        <Route path='/contact' element={<Contact />} /> 
      </Routes> */}
    </div>
  );
}

export default App;
