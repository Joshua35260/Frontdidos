import { Routes, Route } from "react-router-dom";

import Banditos from "./screens/Banditos.jsx";
import Delation from "./screens/Delation.jsx";
import Footer from "./components/Footer.jsx";
import Home from "../src/screens/Home.jsx";
import Header from "./components/Header.jsx";
import BanditosDetails from "./components/Banditodetails.jsx";
import { useState } from "react";
import "./App.css";

function App() {
  // const[isplaying, setisplaying] = useState(false)
  // const[play, setPlay] = useState(false)

  // const songUrl = 'https://www.youtube.com/watch?v=6FrlCfkffVI'

  return (
    <div className="App">
<<<<<<< HEAD
      <Home/>
      {/* <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/bandits' element={<Bandits />} />
        <Route path='/informers' element={<Informers />} />
        <Route path='/contact' element={<Contact />} /> 
      </Routes> */}
=======
      <Header />
      {/* <Player isplaying={isplaying} setisplaying={setisplaying} play={play} setPlay={setPlay}/>
      {play ? <ReactPlayer url={songUrl} playing={true} height='1px' width='1px'/> : <ReactPlayer url={songUrl} playing={false} height='1px' width='1px'/>} */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/banditos" element={<Banditos />} />
        <Route path="/delation" element={<Delation />} />
        <Route path="/bandits/:id" element={<BanditosDetails />} />
        {/* <Route path='/informers' element={<Informers />} /> */}
        {/* <Route path='/contact' element={<Contact />} />  */}
      </Routes>
      <Footer />
>>>>>>> dev
    </div>
  );
}

export default App;
