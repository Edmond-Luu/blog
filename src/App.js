import React from "react"
import Navi from "./Navi"
import Footer from "./Footer"
import ScrollToTop from "./utils/ScrollToTop"
import Home from "./pages/Home"
import About from "./pages/About"
import FunFacts from "./pages/FunFacts"
import Projects from "./pages/Projects"
import SiteInfo from "./pages/SiteInfo"
import Contact from "./pages/Contact"
// import Error from "./pages/Error"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom'

function App() {


  return (
    <div className="App">
      <ScrollToTop />
      <Navi />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/siteinfo" element={<SiteInfo />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/funfacts" element={<FunFacts />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;