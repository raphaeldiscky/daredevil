import React, { useEffect } from "react"

// scroll behavior
import { useInView } from "react-intersection-observer"
import { useAnimation } from "framer-motion"

import { Container } from "../../styles/globalStyles"
import { HomeContentSection, Content } from "../../styles/homeStyles"

const HomeContent = () => {
  const animation = useAnimation()
  const [contentRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-300px",
  })

  useEffect(() => {
    if (inView) {
      animation.start("visible")
    }
  }, [animation, inView])

  return (
    <HomeContentSection
      ref={contentRef}
      animate={animation}
      initial="hidden"
      variants={{
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: [0.6, 0.05, -0.01, 0.9] },
        },
        hidden: {
          opacity: 0,
          y: 72,
        },
      }}
    >
      <Container>
        <Content>
          <p>HI, IM RAPHAEL DISCKY</p>
          Fullstack Developer and UI/UX enthusiast, creating beautiful and
          functional websites
        </Content>
      </Container>
    </HomeContentSection>
  )
}

export default HomeContent
