import React from "react"
import Layout from "../components/layout"

// components
import HomeBanner from "../components/homepage/HomeBanner"
import HomeContent from "../components/homepage/HomeContent"

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
    </Layout>
  )
}

export default IndexPage
