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

const HomeBanner = ({ onCursor }) => {
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

    renderingElement.addEventListener("mouseover", e => {
      moving = true
      lastX = e.pageX - renderingElement.offsetLeft
      lastY = e.pageY - renderingElement.offsetTop
    })

    renderingElement.addEventListener("mouseup", e => {
      moving = false
      lastX = e.pageX - renderingElement.offsetLeft
      lastY = e.pageY - renderingElement.offsetTop
    })

    renderingElement.addEventListener("mousemove", e => {
      if (moving) {
        drawingContext.globalCompositeOperation = "source-over"
        renderingContext.globalCompositeOperation = "destination-out"
        let currentX = e.pageX - renderingElement.offsetLeft
        let currentY = e.pageY - renderingElement.offsetTop
        drawingContext.lineJoin = "round"
        drawingContext.moveTo(lastX, lastY)
        drawingContext.lineTo(currentX, currentY)
        drawingContext.closePath()
        drawingContext.lineWidth = 120
        drawingContext.stroke()
        lastX = currentX
        lastY = currentY
        renderingContext.drawImage(drawingElement, 0, 0)
      }
    })
  }, [currentTheme])

  const parent = {
    initial: { y: 800 },
    animate: {
      y: 0,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }
  const child = {
    initial: { y: 800 },
    animate: {
      y: 0,
      transition: {
        duration: 1,
        ease: [0.6, 0.05, -0.01, 0.9],
      },
    },
  }

  return (
    <Banner>
      <Video>
        <video
          height="100%"
          width="100%"
          loop
          autoPlay
          muted
          src={require("../../assets/videos/video.mp4")}
        />
      </Video>
      <Canvas
        height={size.height}
        width={size.width}
        ref={canvas}
        onMouseEnter={() => onCursor("hovered")}
        onMouseLeave={onCursor}
      />
      <BannerTitle variants={parent} initial="initial" animate="animate">
        <Headline variants={child}>DEV</Headline>
        <Headline variants={child}>DESIGN</Headline>
      </BannerTitle>
    </Banner>
  )
}

export default HomeBanner
