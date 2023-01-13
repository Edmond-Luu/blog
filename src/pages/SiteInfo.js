import React from 'react'
import { SectionTitle } from '../utils/DynamicTitles'
import { AboutCard, ProjectsCard, ContactCard } from '../bootstrapElements/BootstrapCards'

import Container from "react-bootstrap/Container"
import BootstrapListGroup from '../bootstrapElements/BootstrapListGroup';

export default function SiteInfo() {
  SectionTitle("Edmond Luu - Site Info")
  return (
    <section className="page">
      <Container>
        <h2 className="pageTitle">Site Info</h2>
        <p>Websites can have many different aspects that can add to the user experience. As the users, we sometimes take the many little website features and details for granted as they are so common nowadays. This website is no difference as I coded and designed this website with user experience as well as asthetics in mind. It isn't until we start building and coding a website from scratch can we appreciate these small yet important details.</p>

        <p>Therefore, I included this page to help you learn about the many features and details of this website. You will be surprised at the subtle details that you probably have missed when you were exploring this website!</p>

        <p>Let's explore this website in depth, starting from the very top component, which is the navigation bar!</p>

        <BootstrapListGroup
          title="Navigation Bar"
          listItems={["When your mouse cursor hovers over a navigation bar item, a slight gray rectangle appears on top of the item you are hovering over. In addition, the rectangle's appearance is a smooth fade-in rather than an immediate appearance.",

            `However, when hovering over the navigation bar item that is the current page you are on, no rectangle will appear for that item even though it is still clickable (nothing will happen). This is called an "active" navigation bar item.`,

            `The text for any "active" navigation bar item is slightly darker than the other navigation bar items`,

            "If you resize the window of this browser, the navigation bar completely collapses into a clickable and collapsable sandwich icon that you can expand to access the items."]}
        />

        <p>Wow! So cool, right! Let's continue and explore the features of every page on this website in general.</p>

        <BootstrapListGroup
          title="General"
          listItems={["When you enter any page, all contents of that page, except for the top navigation bar, don't just simply appear on the page instantly. Instead, as a cool animation, the contents would slide in from the top into position. Try visiting another section to try it out!",

            "If you were to resize the window of this browser, the contents of that page, except for text, would scale down accordingly which makes it easier to use this website on a mobile device.",

            "In addition, when resizing the window of this website, the margins will also be reduced."]}
        />

        <p>Now, let's get into my favorite part of this website and what made it so fun to build, the <a href="https://reactjs.org" target="_blank" rel="noreferrer" className="linkTag">React</a> Javascript library. This website was completely rebuilt from my <a href="https://edmond-luu.github.io/oldWebsite" target="_blank" rel="noreferrer">original website</a>, which was built using only HTML and CSS. While both websites look almost identical, this iteration has been built with a stronger focus on user experience and efficiency, making it a product that I am even prouder to present!</p>
        <BootstrapListGroup
          title="React"
          listItems={["Believe it or not, this website is a Single-Page React Application, which means that there is only one page on this entire website! Each section of this website, as shown on the navigation bar, is simply a component, not a separate page of this website. Clicking on a different section will not change the page, but will change what component of the page is shown.",

            "One of the most useful things about React is that everything is reusable, which means that the developer can write code for an element just once and reuse that as many times as he/she likes. For example, the code for the carousels, the cards, and even the box you're reading this text in right now were all written once. They were simply being reused but with different contents. In my previous website, which was built with only HTML and CSS, the code was extremely verbose and hard to read since each element can only be used once when written. Because of React, I was able to not only save time, but also make the code easier to read and reduce the possibly of coding mistakes/bugs.",

            "In this new React-powered website, when you visit a new section, the whole page doesn't reload, it just simply changes the contents of the page unlike my previous website where the whole page reloads and flashes, which wasn't a very good user experience.",

            "In addition, whenever you visit a new section, the page will automatically scroll back up to the top rather than staying in the same position you were at."]}
        />
        <p>When comparing the code/markup between this website and my original website, I noticed that, on average, each section of this website was around 50-100 lines of code in length while in my original website, each section of that website was around 150-200 lines of code long! The use of the React library has rectified the persistent issue of verbosity in my website. Even today, I am still exploring new ways to further improve this website.</p>

        <p className="centerText topSpacer">Here are some other sections on this website that you will also enjoy!</p>

        <div className="cardGrid">
          <AboutCard />
          <ProjectsCard />
          <ContactCard />
        </div>
      </Container>
    </section>
  )
}
