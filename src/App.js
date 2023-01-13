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
        <Route path="/blog" element={<Home />}></Route>
        <Route path="/blog/about" element={<About />}></Route>
        <Route path="/blog/projects" element={<Projects />}></Route>
        <Route path="/blog/siteinfo" element={<SiteInfo />}></Route>
        <Route path="/blog/contact" element={<Contact />}></Route>
        <Route path="/blog/funfacts" element={<FunFacts />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;