import styled from "styled-components"
import { motion } from "framer-motion"

export const Banner = styled.div`
  background: ${props => props.theme.background};
  height: 100vh;
  width: 100%;
  position: relative;
  margin-bottom: 296px;
`

export const Video = styled.div`
  height: 100%;
  width: 100%;
  video {
    object-fit: cover;
  }
`

export const Canvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  display: block;
`

export const BannerTitle = styled(motion.h1)`
  position: absolute;
  bottom: -120px;
  left: -18px;
  color: ${props => props.theme.text};
  pointer-events: none;
`

export const Headline = styled(motion.span)`
  display: block;
  font-size: 23rem;
  font-weight: 900;
  line-height: 0.76;
`

// content section
export const HomeContentSection = styled(motion.div)`
  margin-bottom: 200px;
`

export const Content = styled.h3`
  width: 53%;
  font-size: 2.3rem;
  font-weight: 400;
  margin-left: 124px;
  color: ${props => props.theme.text};
`
