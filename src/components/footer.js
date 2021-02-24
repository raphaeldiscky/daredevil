import React, { useEffect, useRef } from "react"

// scroll animation
import { useInView } from "react-intersection-observer"
import { useAnimation } from "framer-motion"

// styled component
import { Container, Flex } from "../styles/globalStyles"
import { FooterNav, FooterContent, FooterSocial } from "../styles/footerStyles"

// icons
import { Github, Linkedin, Twitter } from "../assets/svg/social-icons"

// custom hooks
import useElementPosition from "../hooks/useElementPosition"

const Footer = ({ onCursor, setHamburgerPosition }) => {
  const githubRef = useRef(null)
  const githubPosition = useElementPosition(githubRef)

  const linkedinRef = useRef(null)
  const linkedinPosition = useElementPosition(linkedinRef)

  const twitterRef = useRef(null)
  const twitterPosition = useElementPosition(twitterRef)

  const animation = useAnimation()
  const [footerRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-100px",
  })

  useEffect(() => {
    if (inView) {
      animation.start("visible")
    }
  }, [animation, inView])

  const menuHover = x => {
    onCursor("locked")
    setHamburgerPosition({ x: x })
  }

  return (
    <FooterNav
      ref={footerRef}
      animate={animation}
      initial="hidden"
      variants={{
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] },
        },
        hidden: { opacity: 0, y: 72 },
      }}
    >
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
              onMouseEnter={() => menuHover(githubPosition.x)}
              onMouseLeave={onCursor}
              ref={githubRef}
              href="https://github.com/raphaeldiscky"
              target="_blank"
            >
              <Github />
            </a>
            <a
              onMouseEnter={() => menuHover(linkedinPosition.x)}
              onMouseLeave={onCursor}
              ref={linkedinRef}
              href="https://linkedin.com/in/raphaeldiscky"
              target="_blank"
            >
              <Linkedin />
            </a>
            <a
              onMouseEnter={() => menuHover(twitterPosition.x)}
              onMouseLeave={onCursor}
              ref={twitterRef}
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
