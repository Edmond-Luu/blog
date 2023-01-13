import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

import cardFacts from "../images/cardFacts.jpg"
import cardInfo from "../images/cardInfo.jpg"
import cardContact from "../images/cardContact.jpg"
import cardAbout from "../images/cardAbout.jpg"
import cardProjects from "../images/cardProjects.jpg"

export function FunFactsCard() {
    return (
        <Card style={{ width: '18rem' }} id="card">
            <Link to="/blog/funfacts"><Card.Img variant="top" src={cardFacts} /></Link>
            <Card.Body>
                <Card.Title id="cardTitle">Fun Facts</Card.Title>
                <Card.Text id="cardText">Learn more about me beyond my career goals and my aspirations in this fun and
                    informative section!
                </Card.Text>
                <div className="cardBtnContainer">
                    <Link to="/funfacts"><Button variant="light" className="cardBtn" id="cardBtn">Learn More</Button></Link>
                </div>
            </Card.Body>
        </Card>
    )
}

export function SiteInfoCard() {
    return (
        <Card style={{ width: '18rem' }} id="card">
            <Link to="/blog/siteinfo"><Card.Img variant="top" src={cardInfo} /></Link>
            <Card.Body>
                <Card.Title id="cardTitle">Website Information</Card.Title>
                <Card.Text id="cardText">Learn more about the features of this website including the subtle
                    details you might have missed!
                </Card.Text>
                <div className="cardBtnContainer">
                    <Link to="/siteinfo"><Button variant="light" className="cardBtn" id="cardBtn">Learn More</Button></Link>
                </div>
            </Card.Body>
        </Card>
    )
}

export function ContactCard() {
    return (
        <Card style={{ width: '18rem' }} id="card">
            <Link to="/blog/contact"><Card.Img variant="top" src={cardContact} /></Link>
            <Card.Body>
                <Card.Title id="cardTitle">Contact Me</Card.Title>
                <Card.Text id="cardText">I'm interested getting in touch and networking with you through email and/or LinkedIn!
                </Card.Text>
                <div className="cardBtnContainer">
                    <Link to="/contact"><Button variant="light" className="cardBtn" id="cardBtn">Learn More</Button></Link>
                </div>
            </Card.Body>
        </Card>
    )
}

export function AboutCard() {
    return (
        <Card style={{ width: '18rem' }} id="card">
            <Link to="/blog/about"><Card.Img variant="top" src={cardAbout} /></Link>
            <Card.Body>
                <Card.Title id="cardTitle">About Me</Card.Title>
                <Card.Text id="cardText">Learn more about me and my goals as you read through my short autobiography.
                </Card.Text>
                <div className="cardBtnContainer">
                    <Link to="/about"><Button variant="light" className="cardBtn" id="cardBtn">Learn More</Button></Link>
                </div>
            </Card.Body>
        </Card>
    )
}

export function ProjectsCard() {
    return (
        <Card style={{ width: '18rem' }} id="card">
            <Link to="/blog/projects"><Card.Img variant="top" src={cardProjects} /></Link>
            <Card.Body>
                <Card.Title id="cardTitle">My Projects</Card.Title>
                <Card.Text id="cardText">Check out some cool web development projects I am working on!
                </Card.Text>
                <div className="cardBtnContainer">
                    <Link to="/projects"><Button variant="light" className="cardBtn" id="cardBtn">Learn More</Button></Link>
                </div>
            </Card.Body>
        </Card>
    )
}