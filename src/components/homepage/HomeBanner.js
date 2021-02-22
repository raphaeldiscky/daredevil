import React from "react"

import {
  Banner,
  Video,
  Canvas,
  BannerTitle,
  Headline,
} from "../../styles/homeStyles"

const HomeBanner = () => {
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
      <Canvas />
      <BannerTitle>
        <Headline>DEV</Headline>
        <Headline>NOOB</Headline>
      </BannerTitle>
    </Banner>
  )
}

export default HomeBanner
