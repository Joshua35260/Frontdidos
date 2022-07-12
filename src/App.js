import { Routes, Route } from 'react-router-dom'
import Home from './screens/Home';
import './App.css';

function App() {
  return (
    <div className="App">
      <Home/>
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
