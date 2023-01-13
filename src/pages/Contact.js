import React from 'react'
import { SectionTitle } from '../utils/DynamicTitles'
import BootstrapCarousel from '../bootstrapElements/BootstrapCarousel';
import BootstrapAccordion from '../bootstrapElements/BootstrapAccordion'
import { AboutCard, FunFactsCard, SiteInfoCard } from '../bootstrapElements/BootstrapCards'

import Container from 'react-bootstrap/Container'
import { Envelope, Linkedin, Github } from 'react-bootstrap-icons'

export default function Contact() {
  SectionTitle("Edmond Luu - Contact")
  return (
    <section className="page">
      <BootstrapCarousel
        images={["images/contactImg1.jpg", "images/contactImg2.jpg", "images/contactImg3.jpg"]}
      />
      <Container>

        <h2 className="pageTitle">Contact</h2>
        <p className="centerText">If you have any questions or would like to stay in touch with me, please contact me via email, LinkedIn, or GitHub. The information is provided below.</p>

        <BootstrapAccordion
          accordionContents={[
            {
              icon: < Envelope />,
              title: "Email",
              text: "My email address is:",
              subtextA: "eluu@berkeley.edu",
              urlA: "mailto:eluu@berkeley.edu"
            },

            {
              icon: < Linkedin />,
              title: "LinkedIn",
              text: "My LinkedIn profile is at:",
              subtextA: "https://linkedin.com/in/edmondluu",
              urlA: "https://linkedin.com/in/edmondluu"
            },

            {
              icon: < Github />,
              title: "GitHub",
              text: "My Github page is at:",
              subtextA: "https://github.com/edmond-luu",
              urlA: "https://github.com/edmond-luu",
            }
          ]}
        />

        <div className="cardGrid">
          <AboutCard />
          <SiteInfoCard />
          <FunFactsCard />
        </div>

      </Container>
    </section>

  )
}
