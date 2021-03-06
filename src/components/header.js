import React, { useEffect, useRef } from "react"
import { Link } from "gatsby"

// styled components
import { HeaderNav, Logo, Menu } from "../styles/headerStyles"
import { Container, Flex } from "../styles/globalStyles"

// context
import {
  useGlobalStateContext,
  useGlobalDispatchContext,
} from "../context/globalContext"

// custom hook
import useElementPosition from "../hooks/useElementPosition"

const Header = ({
  onCursor,
  setToggleMenu,
  toggleMenu,
  setHamburgerPosition,
}) => {
  const dispatch = useGlobalDispatchContext()
  const { currentTheme } = useGlobalStateContext() // check current state

  const hamburger = useRef(null)
  const position = useElementPosition(hamburger)

  const toggleTheme = () => {
    if (currentTheme === "dark") {
      dispatch({ type: "TOGGLE_THEME", theme: "light" })
    } else {
      dispatch({ type: "TOGGLE_THEME", theme: "dark" })
    }
  }

  const menuHover = () => {
    onCursor("locked")
    setHamburgerPosition({ x: position.x, y: position.y + 72 }) // 72 from framer motion in HeaderNav
  }

  useEffect(() => {
    window.localStorage.setItem("theme", currentTheme) // theme doesnt change, except when state is change
    toggleMenu
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflowY = "unset")
  }, [currentTheme, toggleMenu])

  return (
    <HeaderNav
      animate={{ y: 0, opacity: 1 }}
      initial={{ y: -72, opacity: 0 }}
      transition={{ duration: 1, ease: [0.6, 0.05, -0.01, 0.9] }}
    >
      <Container>
        {/* {console.log(currentTheme)} */}
        <Flex spaceBetween noHeight>
          <Logo
            onMouseEnter={() => onCursor("hovered")}
            onMouseLeave={onCursor}
          >
            <Link to="/">RAPH</Link>
            <span
              aria-hidden="true"
              onClick={toggleTheme}
              onMouseEnter={() => onCursor("pointer")}
              onMouseLeave={onCursor}
            ></span>
            <Link to="/">EL</Link>
          </Logo>
          <Menu
            ref={hamburger}
            onClick={() => setToggleMenu(!toggleMenu)}
            onMouseEnter={menuHover}
            onMouseLeave={onCursor}
          >
            <button>
              <span></span>
              <span></span>
            </button>
          </Menu>
        </Flex>
      </Container>
    </HeaderNav>
  )
}

export default Header
