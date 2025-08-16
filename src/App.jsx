import {Routes, Route} from 'react-router-dom'

import NavigationBar from './components/NavigationBar';
import Home from './Home';
import BuddyBot from './projects/BuddyBot'
import PillPal from './projects/PillPal'
import Farmadillo from './projects/Farmadillo'
import MusicBox from './projects/MusicBox';

import './App.css'


function App() {

  return (
    <>
      <NavigationBar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/BuddyBot" element={<BuddyBot/>}/>
        <Route path="/projects/PillPal" element={<PillPal/>}/>
        <Route path="/projects/Farmadillo" element={<Farmadillo/>}/>
        <Route path="/projects/MusicBox" element={<MusicBox/>}/>
      </Routes>
    </>
  )
}

export default App
