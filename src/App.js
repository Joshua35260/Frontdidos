import { Routes, Route } from 'react-router-dom'

import Banditos from './screens/Banditos.jsx';
import Delation from './screens/Delation.jsx';
import Footer from './components/Footer.jsx';
import Home from "../src/screens/Home.jsx";
import Header from "./components/Header.jsx";

import { useEffect, useRef, useState } from "react";
import "./App.css";
import Player from './components/Player.jsx';
import { songdata } from './components/style/audio/audio.js';

function App() {
  const[songs, setSongs] = useState(songdata)
  const[isplaying, setisplaying] = useState(false)
  const [currentSong, setCurrentSong] = useState(songdata[0])

  const audioElem =useRef();

  useEffect(()=>{
    if(isplaying) {
      audioElem.current.play()
    }
    else {
      audioElem.current.pause()
    }
  },[isplaying])

  return (
    <div className="App">
      <audio src="https://www.youtube.com/watch?v=6FrlCfkffVI" ref={audioElem}/>
      <Header/>
      <Player songs={songs} setSongs={setSongs} isplaying={isplaying} setisplaying={setisplaying} audioElem={audioElem}/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/banditos' element={<Banditos />} />
        <Route path='/delation' element={<Delation />} />
        {/* <Route path='/informers' element={<Informers />} /> */}
        {/* <Route path='/contact' element={<Contact />} />  */}
      </Routes>
      <Footer/>
    </div>
    
  );
}

export default App;
