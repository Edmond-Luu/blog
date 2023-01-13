import React from 'react'
import { SectionTitle } from '../utils/DynamicTitles'
import BootstrapCarousel from '../bootstrapElements/BootstrapCarousel'
import Container from 'react-bootstrap/Container'
import { AboutCard, SiteInfoCard, ContactCard } from '../bootstrapElements/BootstrapCards'
import { Link } from 'react-router-dom'

import factsImg1 from "../images/factsImg1.jpg";
import factsImg2 from "../images/factsImg2.jpg";
import factsImg3 from "../images/factsImg3.jpg";
import factsImg4 from "../images/factsImg4.jpg";
import factsImg5 from "../images/factsImg5.jpg";

export default function FunFacts() {
  SectionTitle("Edmond Luu - Fun Facts")
  return (
    <section className="page">
      <BootstrapCarousel
        images={[factsImg1, factsImg2, factsImg3, factsImg4, factsImg5]}
      />

      <Container>
        <h2 className="pageTitle">Fun Facts</h2>
        <p>Welcome to my fun facts section! This section is meant to be a fun page for me to create on this website! On this section, you'll learn some interesting and fun facts about me that I did not share in my <Link to="/about">about</Link> section.</p>
        <ul className="funFactsList">
          {/* <li>When I was little, I really enjoyed watching and performing magic tricks and I dreamed of becoming a magician one day. 🎩😅🪄</li>
          <li>I built a large city on Minecraft which had a beautiful international airport. Unfortunately, my hard drive failed one day and I thought I backed up that file but in fact, I backed up a much older version of that file from a while ago. I lost years of hard work because of that mistake. 😖</li>
          <li>I used to play Little Big Planet, a platforming video game (similar to Super Mario Bros.) for the Playstation 3, and I built a lot of levels for other players to enjoy. 🎮</li>
          <li>I enjoy learning languages; I have learned Korean on my own and my fastest typing speed for Korean was about 60 WPM. 😅⌨️</li>
          <li>I am proficient in reading and writing Simplified and Traditional Chinese even though I never formally studied or attended classes. I naturally learned it by listening to Chinese news and music while reading the subtitles as well as practicing on my own. I am the only person in my family of my generation who can read and write Chinese on a proficient level and also the only one who has not attended Chinese school. 📝✏️</li>
          <li>I prefer using metric units rather than US customary or imperial units. The units on the my phone's weather app are set to celsius for temperature, kilometers per hour for wind, and millibars for pressure! 🌡️📏📐</li>
          <li>Unlike most people, I like geography and I can label quite a few countries on a blank map. 🌍🌎🌏🗺️</li>
          <li>I am a big fan of The Last of Us series. I have played the first game over 4 times and I'm still not bored of it! 🎮📺</li>
          <li>The countries I would love to visit the most are Iran 🇮🇷, Russia 🇷🇺, Turkiye 🇹🇷, the UAE 🇦🇪, and Japan 🇯🇵!</li> */}
          <li>Minecraft is one of my favorite games and I built a large city in it many years ago that even had a beautiful international airport. 🎮</li>
          <li>Apple chips are one of my favorite snacks. 🍎</li>
          <li>Haagen Dazs is my favorite ice cream brand. I especially like their ice cream bars! 😋</li>
          <li>Singing is something I enjoy doing in my freetime, though my voice is pretty bad for singing. 🎤😂</li>
          <li>As a kid, I really wanted to be a magician when I grew up. 🎩😅🪄</li>
          <li>A lot of people dislike learning about geography and/or politics, but I love it! 🌍🌎🌏🗺️</li>
          <li>Metric units are my default units of measurement, not American customary units. 🌡️📏📐</li>
          <li>I am a big fan of The Last of Us series. I have played the first game over 4 times! 🎮📺</li>
          <li>Not speaking too quickly is a habit that I am trying adapt to. 🙊</li>
          <li>I prefer cold weather over hot weather any day! ❄️</li>
          {/* <li>I would love to visit these countries the most: Iran 🇮🇷, Turkiye 🇹🇷, Russia 🇷🇺, the UAE 🇦🇪, and Japan 🇯🇵.</li> */}

        </ul>

        <p className="centerText topSpacer">Here are some other sections on this website that you will also enjoy!</p>

        <div className="cardGrid">
          <AboutCard />
          <SiteInfoCard />
          <ContactCard />
        </div>

      </Container>

    </section >
  )
}
