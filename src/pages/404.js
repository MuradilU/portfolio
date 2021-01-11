import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import { Layout } from "@components"

const StyledMainContainer = styled.main`
  padding: 0 150px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  div {
    z-index: 5;
  }

  h1 {
    font-size: clamp(60px, 8vw, 100px);
    color: var(--primary-color);
    margin-bottom: 0;
    z-index: 5;
  }

  h2 {
    font-size: clamp(20px, 4vw, 40px);
    z-index: 5;
  }

  @media (max-width: 750px) {
    padding: 0 100px;
  }
  @media (max-width: 650px) {
    padding: 0 50px;
  }
  @media (max-width: 500px) {
    padding: 0 25px;
  }
  @media (max-width: 360px) {
    padding: 0 12px;
  }
`

const StyledHomeButton = styled.button`
  cursor: pointer;
  outline: none;
  border: none;
  padding: 0;
  width: 13em;
  height: 60px;
  color: var(--primary-color);
  background: transparent;
  box-shadow: var(--box-shadow);
  border: 2px solid var(--primary-color);
  text-transform: uppercase;
  font-size: 1em;
  font-weight: 600;
  z-index: 5;
  transition: all 250ms ease-in-out;

  &:hover {
    color: var(--font-color);
    border: 2px solid var(--font-color);
  }
`

const NotFound = () => {
  const [isMounted, setIsMounted] = React.useState(false)

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setIsMounted(true)
    }, 100)

    return () => {
      clearTimeout(timeout)
    }
  }, [])

  const number = <h1>404</h1>
  const text = <h2>Page not found</h2>
  const homeLink = (
    <Link style={{ zIndex: 5 }} to="/">
      <StyledHomeButton>Go Home</StyledHomeButton>
    </Link>
  )
  const notFoundElements = [number, text, homeLink]

  return (
    <Layout>
      <StyledMainContainer>
        <TransitionGroup component={null}>
          {isMounted &&
            notFoundElements.map((el, index) => (
              <CSSTransition key={index} classNames="fade-in-up" timeout={2000}>
                <div style={{ transitionDelay: `${index * 100 + 1000}ms` }}>
                  {el}
                </div>
              </CSSTransition>
            ))}
        </TransitionGroup>
      </StyledMainContainer>
    </Layout>
  )
}

export default NotFound
