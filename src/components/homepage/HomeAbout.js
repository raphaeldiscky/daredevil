import React from "react"
import { Container, Flex } from "../../styles/globalStyles"
import {
  HomeAboutSection,
  About,
  Services,
  AccordianContent,
  AccordianHeader,
  AccordianIcon,
} from "../../styles/homeStyles"

const accordianData = [
  {
    id: 0,
    title: "Pre-production",
    results: [
      "Creative Development",
      "Writing",
      "Storyboards",
      "Art Direction",
      "Creative direction",
      "Location Scouting",
      "Casting",
    ],
  },
  {
    id: 1,
    title: "Video Production",
    results: [
      "Principle Photography",
      "Production Management",
      "Crew",
      "Dailies",
      "LTO-Archiving",
    ],
  },
  {
    id: 2,
    title: "Post-Production",
    results: [
      "Colour correction",
      "Offline editing",
      "Online editing",
      "VFX",
      "Animation and motion graphics",
      "Closed captioning and subtitles",
      "Descriptive video",
      "Dailies",
      "Quality control",
      "LTO Archiving",
    ],
  },
  {
    id: 3,
    title: "Audio Post-Production",
    results: [
      "We work with some amazing partners who provide:",
      "Sound Design",
      "SFX",
      "Music",
      "Sound Mix",
    ],
  },
]

const HomeAbout = () => {
  return (
    <HomeAboutSection>
      <Container>
        <Flex alignTop>
          <About>
            <h2>
              Furrow is an integrated, full-service creative studio offering
              video production, creative development, and post-production
              services.
            </h2>
            <p>
              Everybody’s got a story. And we don’t stop until we’ve uncovered
              what makes yours worth telling. Whether it’s working directly with
              you, an agency partner, or putting the finishing touches on
              something special, we’re ready to dig in and get our hands
              dirty—are you?
            </p>
          </About>
          <Services>
            <h3>Services</h3>
            {accordianData.map((item, index) => (
              <Accordian key={index} item={item} />
            ))}
          </Services>
        </Flex>
      </Container>
    </HomeAboutSection>
  )
}

const Accordian = ({ item }) => {
  return (
    <>
      <AccordianHeader>
        <AccordianIcon>
          <span></span>
          <span></span>
        </AccordianIcon>
        {item.title}
      </AccordianHeader>
      <AccordianContent>
        {item.results.map((result, index) => (
          <span key={index}>{result}</span>
        ))}
      </AccordianContent>
    </>
  )
}

export default HomeAbout
