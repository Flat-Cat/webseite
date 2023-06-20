import './App.scss'

import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route, //Link 
}
  from "react-router-dom";

import "./App.scss";
import Home from './pages/Home'
import Contact from './components/Contact/Contact'
import Resume from "./pages/Resume";
import ArtGallery from "./pages/ArtGallery.tsx";
// import Imprint from './pages/Imprint.tsx'
import 'react-tooltip/dist/react-tooltip.css'

function App() {
// App ist dafür da wie App allg. Definiert. Und seitenstruktur festzulegen 

// import HtmlWebpackPlugin from 'html-webpack-plugin';

  return (

    <Router>
    <Navbar title="Navbar"></Navbar> 

    <div style={{marginTop: "52px"}}>
      <Routes>
        <Route path="/resume" element={<Resume/>}/>
        <Route path="/" element={<Home/>}/>
        
        <Route path="/artgallery" element={<ArtGallery/>}/>

        <Route path="/contact" element={<Contact/>}/>

        {/* <Route path="/imprint" element={<Imprint/>}/> */}

      </Routes>
    </div>
      <footer className="footer has-background-primary-light">
  <div className="content has-text-centered">

    <strong>Website & Artgallery </strong>
    <span>Copyright  ©Jennifer Flaig <strong>E-mail: </strong> Flaig_1994@pm.me</span>
    <p>
      <span>Art in Home-Page by </span>
      <a href="https://www.youtube.com/@StudioBakuAnimation" target="_blank">
      ©Studio Baku

      {/* <span> | </span> */}
      {/* <Link to="/imprint">Imprint</Link>*/}
    
    </a>
    </p>

  </div>
</footer>

    </Router>


  )
}
// Return => Funktion. Generiere reaktiven HTML Code, der synchron auf Events reagiert.

export default App
