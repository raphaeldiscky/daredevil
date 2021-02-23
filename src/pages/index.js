import React from "react"
import Layout from "../components/layout"

// components
import HomeBanner from "../components/homepage/HomeBanner"
import HomeContent from "../components/homepage/HomeContent"
import HomeFeatured from "../components/homepage/HomeFeatured"
import HomeAbout from "../components/homepage/HomeAbout"

// context
import {
  useGlobalStateContext,
  useGlobalDispatchContext,
} from "../context/globalContext"

const IndexPage = props => {
  const { cursorStyles } = useGlobalStateContext()
  const dispatch = useGlobalDispatchContext()

  // show the cursor on canvas
  const onCursor = cursorType => {
    cursorType = (cursorStyles.includes(cursorType) && cursorType) || false
    dispatch({ type: "CURSOR_TYPE", cursorType: cursorType })
  }

  return (
    <Layout>
      <HomeBanner onCursor={onCursor} />
      <HomeContent />
      <HomeFeatured onCursor={onCursor} />
      <HomeAbout onCursor={onCursor} />
    </Layout>
  )
}

export default IndexPage
