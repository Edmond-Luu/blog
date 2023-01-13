import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div className="footer">
      <div className="footerLeft">
        <Link to="/"><img src="images/logo.png" className="footerLogo" alt="Edmond Luu Logo" /></Link>
        <h3 className="footerTitle">Edmond Luu</h3>
      </div>
      <div className="footerLinks">
        <Link to="/" className="footerLink">Home</Link>
        <Link to="/about" className="footerLink">About</Link>
        <Link to="/projects" className="footerLink">Projects</Link>
        <Link to="/siteinfo" className="footerLink">Site Info</Link>
        <Link to="/contact" className="footerLink">Contact</Link>
        <Link to="/funfacts" className="footerLink">Fun Facts</Link>
      </div>

      <div className="footerRight">
        <div className="footerCaption">Made with <a href="https://reactjs.org" target="_blank" rel="noreferrer">React</a></div>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer"><img src="images/reactLogo.png" className="footerReactLogo" alt="React Logo" /></a>
      </div>

    </div>
  )
}
