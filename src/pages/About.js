import React from 'react'
import { SectionTitle } from '../utils/DynamicTitles'
import { FunFactsCard, ProjectsCard, ContactCard } from '../bootstrapElements/BootstrapCards'
import BootstrapCarousel from '../bootstrapElements/BootstrapCarousel'

import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom'

import aboutImg1 from "../images/aboutImg1.jpg"
import aboutImg2 from "../images/aboutImg2.jpg"
import aboutImg3 from "../images/aboutImg3.jpg"
import aboutImg4 from "../images/aboutImg4.jpg"


export default function About() {
  SectionTitle("Edmond Luu - About")
  return (
    <section className="page">

      <BootstrapCarousel
        images={[aboutImg1, aboutImg2, aboutImg3, aboutImg4]}
      />

      <Container>
        <h2 className="pageTitle">About</h2>
        <p>Hello there! My name is Edmond Luu and I am a developer from San Jose, CA, the capital of Silicon Valley! I graduated from UC Berkeley with a degree in Environmental Economics and Policy. I most recently worked in the accounting field where I was a bookkeeper for small businesses. I was helping my clients manage their finances and their accounts as well as providing guidance to them through financial reports.</p>

        <p>I switched fields and got into development because it is a much better fit for me due to my craftsman personality. I have always enjoyed building things and continuing to improve upon. I find it very gratifying to code and write software as it allows me to solve technical problems by thinking outside of the box.</p>

        <p>I have am a resourceful and self-reliant learner who is able to swiftly learn and apply anything on my own whether it is new software, technologies, skills, methodologies, and even <Link to="/funfacts">foreign languages</Link>. While web development is not the easiest subject for many to comprehend, my perseverance and positive attitude towards learning has allowed me to effectively and efficiently grasp the concepts on my own.</p>

        <p>I started my web development journey through a course called <a href="https://www.udemy.com/course/the-web-developer-bootcamp/" target="_blank" rel="noreferrer">The Web Development Bootcamp</a> on <a href="https://wwww.udemy.com" target="_blank" rel="noreferrer">Udemy</a> by Colt Steele which teaches many topics such as HTML, CSS, Javascript, NodeJS, and MongoDB. In addition, I have supplemented my learning by completing the exercises and projects on <a href="https://www.freecodecamp.org" target="_blank" rel="noreferrer">FreeCodeCamp</a>'s web design module, which is a great free resource to help anyone start learning how to code.</p>

        <p>With the concepts I've learned through Colt Steele's Udemy Web Development Bootcamp course, I built my <a href="https://edmond-luu.github.io/oldWebsite" target="_blank" rel="noreferrer">first portfolio website</a> with only HTML and CSS, which was the precursor to this portfolio website. In addition, I have built applications using vanilla Javascript, which you can find in the <Link to="projects.html">Projects</Link> section.</p>

        <p>To continue my journey, I also learned <a href="https://reactjs.org" target="_blank" rel="noreferrer">React</a>, a popular JavaScript library, by taking a React course by Bob Ziroll on <a href="https://scrimba.com" target="_blank" rel="noreferrer">Scrimba</a>. The <a href="https://scrimba.com/learn/learnreact" target="_blank" rel="noreferrer">course</a> has helped me develop exceptional React skills by its rigorous curriculum that features topics in JSX, components, props, and side-effects. The curriculum from that course that I've learned and applied has culminated into my many React projects such as this website. More information about my projects can be found in the <Link to="/projects">projects</Link> section.</p>

        <p>I am fully commmitted to exploring, adapting, and applying new technologies as they evolve and I look forward to new opportunities that can help me do just that.</p>

        <p className="centerText topSpacer">Here are some other sections on this website that you will also enjoy!</p>

        <div className="cardGrid">
          <ProjectsCard />
          <ContactCard />
          <FunFactsCard />
        </div>

      </Container>
    </section>
  )
}
