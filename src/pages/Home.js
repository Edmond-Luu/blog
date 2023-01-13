import React from 'react';
import { SectionTitle } from '../utils/DynamicTitles'
import { AboutCard, ProjectsCard, ContactCard } from '../bootstrapElements/BootstrapCards'
import BootstrapCarousel from '../bootstrapElements/BootstrapCarousel';

import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';

import heroImg from "../images/heroImg.svg";

export default function Home() {
    SectionTitle("Edmond Luu - Blog Website")
    return (
        <section className="page">

            {/* <BootstrapCarousel
                images={["images/homeImg1.jpg", "images/homeImg2.jpg", "images/homeImg3.jpg", "images/homeImg4.jpg"]}
            /> */}
            <div className="heroSection">
                <div className="heroLeft">
                    <h3 className="heroTitle">Welcome to my blog website!</h3>
                    <div className="heroCaption">Thank you for visiting my brand new website powered by React! There is a lot of information here about me including a <Link to="/about">short autobiography</Link>, <Link to="/projects">my current projects in web development</Link>, a <Link to="/siteinfo">shortlist of features and functions of this website</Link>, <Link to="/contact">my contact information</Link>, and a <Link to="/funfacts">fun page with facts about myself</Link>. Please enjoy your stay here!</div>

                    <Link to="/projects" className="heroButton">
                        See My Works
                    </Link>
                </div>
                    <object className="heroImg" data={heroImg} />
            </div>

            <Container>
                {/* <h2 className="pageTitle">Welcome to my portfolio website!</h2> */}

                {/* <p>Thank you for visiting my brand new website! There is a lot of information here about me including a <Link to="/about">short autobiography</Link>, <Link to="/projects">my current projects in web development</Link>, a <Link to="/siteinfo">shortlist of features and functions of this website</Link>, <Link to="/contact">my contact information</Link>, and a <Link to="/funfacts">fun page with facts about myself</Link>. Please enjoy your stay here!</p>

                <p>This website is a new and improved version of my <a href="https://edmond-luu.github.io/oldWebsite" target="_blank" rel="noreferrer">original website</a>, which was built with only HTML and CSS. This updated version is powered by <a href="https://reactjs.org" target="_blank" rel="noreferrer">React</a>, a Javascript library. Because of React, this website does not only bring about a better user experience, but can easily be expanded upon due to the modularity of the code. To learn more about these new features, visit the <Link to="/siteinfo">site info</Link> section of this website.</p> */}

                <p className="centerText topSpacer"><strong>Don't know where to start? Check out these pages first!</strong></p>

                <div className="cardGrid">
                    <AboutCard />
                    <ProjectsCard />
                    <ContactCard />
                </div>


            </Container>
        </section >
    )
}
