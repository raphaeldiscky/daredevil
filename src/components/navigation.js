import React from "react"
import { Link } from "gatsby"

// styled components
import { Container, Flex } from "../styles/globalStyles"
import {
  Nav,
  NavHeader,
  CloseNav,
  NavList,
  NavFooter,
} from "../styles/navStyles"

const navRoutes = [
  {
    id: 0,
    title: "not humble",
    path: "/not-humble",
    video: "featured-video.mp4",
  },
  {
    id: 1,
    title: "bleeping easy",
    path: "/bleeping-easy",
    video: "easy.mp4",
  },
  {
    id: 2,
    title: "make it zero",
    path: "/make-it-zero",
    video: "make-it-zero.mp4",
  },
  {
    id: 3,
    title: "it takes an island",
    path: "/it-takes-an-island",
    video: "it-takes-an-island.mp4",
  },
  {
    id: 5,
    title: "50 beaches",
    path: "/50-beaches",
    video: "50-beaches.mp4",
  },
]

const Navigation = () => {
  return (
    <Nav>
      <Container>
        <NavHeader>
          <Flex spaceBetween noHeight>
            <h2>Projects</h2>
            <CloseNav>
              <button>
                <span></span>
                <span></span>
              </button>
            </CloseNav>
          </Flex>
        </NavHeader>
        <NavList>
          <ul>
            {navRoutes.map(route => (
              <li key={route.id}>
                <Link to={`/projects/${route.path}`}>
                  <div className="link">
                    <span className="arrow">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 101 57"
                      >
                        <path
                          d="M33 34H0V24h81.429L66 7.884 73.548 0l19.877 20.763.027-.029L101 28.618 73.829 57l-7.548-7.884L80.753 34H33z"
                          fill="#FFF"
                          fillRule="evenodd"
                        ></path>
                      </svg>
                    </span>
                    {route.title}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </NavList>
        <NavFooter></NavFooter>
      </Container>
    </Nav>
  )
}

export default Navigation
