import './App.scss'

import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route }
  from "react-router-dom";

import "./App.scss";
import Home from './pages/Home'
import Contact from './pages/Contact'
import Resume from "./pages/Resume";
import ArtGallery from "./pages/ArtGallery.tsx";

function App() {
// App ist dafür da wie App allg. Definiert. Und seitenstruktur festzulegen 

//=> BrowserRouter: ReactKomp. Die React sagt wo der User gerade ist
  return (
    <Router>
    <Navbar title="Navbar"></Navbar> 

      <Routes>
        <Route path="/resume" element={<Resume />} />
      </Routes>
      
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

      <Routes>
        <Route path="/artgallery" element={<ArtGallery />} />
      </Routes>

      <Routes>
        <Route path="/contact" element={<Contact />} />
      </Routes>

    </Router>


  )
}
// Return => Funktion. Generiere reaktiven HTML Code, der synchron auf Events reagiert.

export default App
