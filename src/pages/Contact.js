import React from 'react'
import { SectionTitle } from '../utils/DynamicTitles'
import BootstrapCarousel from '../bootstrapElements/BootstrapCarousel';
import BootstrapAccordion from '../bootstrapElements/BootstrapAccordion'
import { AboutCard, FunFactsCard, SiteInfoCard } from '../bootstrapElements/BootstrapCards'

import Container from 'react-bootstrap/Container'
import { Envelope, Linkedin, Github } from 'react-bootstrap-icons'


import contactImg1 from "../images/contactImg1.jpg";
import contactImg2 from "../images/contactImg2.jpg";
import contactImg3 from "../images/contactImg3.jpg";

export default function Contact() {
  SectionTitle("Edmond Luu - Contact")
  return (
    <section className="page">
      <BootstrapCarousel
        images={[contactImg1, contactImg2, contactImg3]}
      />
      <Container>

        <h2 className="pageTitle">Contact</h2>
        <p className="centerText">If you have any questions or would like to stay in touch with me, please contact me via email or GitHub. The information is provided below.</p>

        <BootstrapAccordion
          accordionContents={[
            {
              icon: < Envelope />,
              title: "Email",
              text: "My email address is:",
              subtextA: "eluu472@gmail.com",
              urlA: "mailto:eluu472@gmail.com"
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
