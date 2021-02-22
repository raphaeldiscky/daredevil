import React, { useEffect, useRef } from "react"

import {
  Banner,
  Video,
  Canvas,
  BannerTitle,
  Headline,
} from "../../styles/homeStyles"

// context
import { useGlobalStateContext } from "../../context/globalContext"

// custom hook
import useWindowSize from "../../hooks/useWindowSize"

const HomeBanner = () => {
  let canvas = useRef(null)
  const size = useWindowSize()
  const { currentTheme } = useGlobalStateContext()

  useEffect(() => {
    let renderingElement = canvas.current
    let drawingElement = renderingElement.cloneNode()

    let drawingContext = drawingElement.getContext("2d")
    let renderingContext = renderingElement.getContext("2d")

    let lastX
    let lastY

    let moving = false

    renderingContext.globalCompositeOperation = "source-over"
    renderingContext.fillStyle = currentTheme === "dark" ? "#000" : "#fff"
    renderingContext.fillRect(0, 0, size.width, size.height)
  }, [currentTheme])

  return (
    <Banner>
      <Video>
        <video
          height="100%"
          width="100%"
          loop
          autoPlay
          src={require("../../assets/videos/video.mp4")}
        />
      </Video>
      <Canvas height={size.height} width={size.width} ref={canvas} />
      <BannerTitle>
        <Headline>DEV</Headline>
        <Headline>NOOB</Headline>
      </BannerTitle>
    </Banner>
  )
}

export default HomeBanner
