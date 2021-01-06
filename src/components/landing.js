import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import { Button } from "@components"

const StyledLandingSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 100px 0;

  h1 {
    text-transform: uppercase;
    margin: 30px 0 50px 0;
    font-size: clamp(40px, 8vw, 80px);
    color: var(--font-color);

    em {
      color: var(--primary-color);
      font-style: normal;
    }

    &:before,
    &:after {
      content: "";
      vertical-align: middle;
      height: 2px;
      width: 80px;
      margin: 0 20px;
      display: inline-block;
      background-color: var(--font-color);
    }
  }
`

const StyledIntro = styled.em`
  font-size: 28px;
  color: var(--font-color);
`

const Landing = () => {
  const [isMounted, setIsMounted] = React.useState(false)
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setIsMounted(true)
    }, 100)

    return () => {
      clearTimeout(timeout)
    }
  }, [])

  const name = data.site.siteMetadata.title
  const [first, last] = name.split(" ")

  const intro = <StyledIntro>Hi, I'm</StyledIntro>
  const fullName = (
    <h1>
      {first}&nbsp;
      <em>{last}</em>
    </h1>
  )
  const resumeButton = <Button />

  const landingElements = [intro, fullName, resumeButton]

  return (
    <StyledLandingSection>
      <TransitionGroup component={null}>
        {isMounted &&
          landingElements.map((el, index) => (
            <CSSTransition key={index} classNames="fade-in-up" timeout={2000}>
              <div style={{ transitionDelay: `${index * 100 + 1000}ms` }}>
                {el}
              </div>
            </CSSTransition>
          ))}
      </TransitionGroup>
    </StyledLandingSection>
  )
}

export default Landing
