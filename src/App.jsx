import {Routes, Route} from 'react-router-dom'

import ScrollManager from './components/ScrollManager';
import NavigationBar from './components/NavigationBar';
import Home from './Home';
import GCE from './projects/GCE';
import Robot from './projects/Robot'
import StoreSimulator from './projects/StoreSimulator';
import KitchenChaos from './projects/KitchenChaos';
import PersonalPortfolio from './projects/PersonalPortfolio';
import EmbeddedSpider from './projects/EmbeddedSpider';
import Robobuddy from './projects/Robobuddy'
import PillPal from './projects/PillPal'
import Farmadillo from './projects/Farmadillo'
import MusicBox from './projects/MusicBox';
import Footer from './components/Footer'

import './App.css'


function App() {
  return (
  <>
    <NavigationBar />
    <ScrollManager />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects/GCE" element={<GCE/>}/>
      <Route path="/projects/Robot" element={<Robot/>}/>
      <Route path="/projects/StoreSimulator" element={<StoreSimulator/>}/>
      <Route path="/projects/KitchenChaos" element={<KitchenChaos/>}/>
      <Route path="/projects/EmbeddedSpider" element={<EmbeddedSpider/>}/>
      <Route path="/projects/PersonalPortfolio" element={<PersonalPortfolio/>}/>
      <Route path="/projects/Robobuddy" element={<Robobuddy/>}/>
      <Route path="/projects/PillPal" element={<PillPal/>}/>
      <Route path="/projects/Farmadillo" element={<Farmadillo/>}/>
      <Route path="/projects/MusicBox" element={<MusicBox/>}/>
    </Routes>
    <Footer />
  </>
  )
}

export default App
