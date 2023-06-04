import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';

import "./CSS/Style.css"
import "./CSS/Navbar.css"
import Flowers from './Components/Flowers';
import About from './Components/About';
import Contact from './Components/Contact';
function App() {
  return (
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="About" element={<About/>}/>
    <Route path="Flowers" element={<Flowers/>}/>
    <Route path="Contact" element={<Contact/>}/>

  </Routes> 
  );
}

export default App;
