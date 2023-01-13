import React from 'react'
import { SectionTitle } from '../utils/DynamicTitles'
import projectsData from '../projectsData'
import BootstrapCarousel from '../bootstrapElements/BootstrapCarousel'
import BootstrapAccordion from '../bootstrapElements/BootstrapAccordion'
import { AboutCard, SiteInfoCard, ContactCard } from "../bootstrapElements/BootstrapCards"

import Container from 'react-bootstrap/Container'

export default function Projects() {
  SectionTitle("Edmond Luu - Projects")

  const projectImgs = projectsData.map(item => item.image)

  const projectInfo = projectsData.map(item => {
    return {
      title: item.name,
      text: item.description,
      subtextA: "Click here to view the app on Github!",
      urlA: item.github,
      subtextB: "Click here to try the app!",
      urlB: item.link
    }
  })

  return (
    <section className="page">
      <BootstrapCarousel
        images={projectImgs}
        fullSize={true}
      />
      <Container>

        <h2 className="pageTitle">My Projects</h2>
        <p className="centerText">On this page, you will find the web development projects that I have proudly created! All of my projects listed below are all hosted on my <a href="https://github.com/edmond-luu" target="_blank" rel="noreferrer">Github page</a>!</p>

        <BootstrapAccordion
          accordionContents={projectInfo}
        />

        <p className="centerText topSpacer">Here are some other sections on this website that you will also enjoy!</p>

        <div className="cardGrid">
          <AboutCard />
          <SiteInfoCard />
          <ContactCard />
        </div>

      </Container>
    </section>
  )
}
