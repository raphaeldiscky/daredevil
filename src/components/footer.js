import React from "react"

// styled component
import { Container, Flex } from "../styles/globalStyles"
import { FooterNav, FooterContent, FooterSocial } from "../styles/footerStyles"

// icons
import { Github, Linkedin, Twitter } from "../assets/svg/social-icons"

const Footer = ({ onCursor }) => {
  return (
    <FooterNav>
      <Container>
        <Flex spaceBetween>
          <FooterContent>
            <p>+62-878-3991-2020</p>
            <p>zundria.putra@gmail.com</p>
          </FooterContent>
          <FooterContent wider>
            <p>Yogyakarta, Indonesia</p>
            <p>Software Developer</p>
          </FooterContent>
          <FooterSocial>
            <a
              onMouseEnter={() => onCursor("hovered")}
              onMouseLeave={onCursor}
              href="https://github.com/raphaeldiscky"
              target="_blank"
            >
              <Github />
            </a>
            <a
              onMouseEnter={() => onCursor("hovered")}
              onMouseLeave={onCursor}
              href="https://linkedin.com/in/raphaeldiscky"
              target="_blank"
            >
              <Linkedin />
            </a>
            <a
              onMouseEnter={() => onCursor("hovered")}
              onMouseLeave={onCursor}
              href="https://twitter.com/rdisckydev"
              target="_blank"
            >
              <Twitter />
            </a>
          </FooterSocial>
        </Flex>
      </Container>
    </FooterNav>
  )
}

export default Footer
