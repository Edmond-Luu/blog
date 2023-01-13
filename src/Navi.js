import React from 'react'
import { Link, useResolvedPath, useMatch } from 'react-router-dom'

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import logo from "./images/logo.png"


export default function Navi() {
    return (
        <Navbar bg="light" expand="xl" sticky="top" collapseOnSelect className="nav">
            <div className="navLogoAndTitle">
                <Link to="/blog"><img src={logo} className="navLogo" alt="Edmond Luu Logo" /></Link>
                <Navbar.Brand as={Link} to="/blog"><h1 className="navTitle">Edmond Luu</h1></Navbar.Brand>
            </div>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse>
                <div className="navItems">
                    <Nav>
                        <Nav.Link as={CustomLink} href="#" to="/blog">Home</Nav.Link>
                        <Nav.Link as={CustomLink} href="#" to="/blog/about">About</Nav.Link>
                        <Nav.Link as={CustomLink} href="#" to="/blog/projects">Projects</Nav.Link>
                        <Nav.Link as={CustomLink} href="#" to="/blog/siteinfo">Site Info</Nav.Link>
                        <Nav.Link as={CustomLink} href="#" to="/blog/contact">Contact</Nav.Link>
                        <Nav.Link as={CustomLink} href="#" to="/blog/funfacts">Fun Facts</Nav.Link>
                    </Nav>
                </div>
            </Navbar.Collapse>
        </Navbar>

    )

    function CustomLink({ to, children, ...props }) {
        const resolvedPath = useResolvedPath(to)
        const isActive = useMatch({ path: resolvedPath.pathname, end: true })

        return (
            <Link to={to} {...props} className={isActive ? "navLink active" : "navLink"}>{children}</Link>
        )
    }
}

// <Navbar bg="light" expand="xl" className="nav" sticky="top">
//     <Navbar.Brand as={Link} to="/"><h1 className="navTitle">Edmond Luu</h1></Navbar.Brand>
//     <Navbar.Toggle aria-controls="offcanvasNavbar-expand-xl" />
//     <Navbar.Offcanvas
//         id={`offcanvasNavbar-expand-xl`}
//         aria-labelledby={`offcanvasNavbarLabel-expand-xl`}
//         placement="end"
//     >
//         <Offcanvas.Header closeButton>
//             <Offcanvas.Title id="offcanvasNavbarLabel-expand-xl">
//                 <h1 className="offCanvasTitle"><CustomLink to="/">Edmond Luu</CustomLink></h1>
//             </Offcanvas.Title>
//         </Offcanvas.Header>
//         <Offcanvas.Body>
//             <Nav className="justify-content-end flex-grow-1 pe-3 offCanvasItems">
//                 <Nav.Link> <CustomLink to="/">Home</CustomLink></Nav.Link>
//                 <Nav.Link> <CustomLink to="/about">About</CustomLink></Nav.Link>
//                 <Nav.Link> <CustomLink to="/projects">Projects</CustomLink></Nav.Link>
//                 <Nav.Link> <CustomLink to="/siteinfo">Site Info</CustomLink></Nav.Link>
//                 <Nav.Link> <CustomLink to="/contact">Contact</CustomLink></Nav.Link>
//                 <Nav.Link> <CustomLink to="/funfacts">Fun Facts</CustomLink></Nav.Link>
//             </Nav>
//         </Offcanvas.Body>
//     </Navbar.Offcanvas>
// </Navbar>

