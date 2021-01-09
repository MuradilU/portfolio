import React from "react"
import styled from "styled-components"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import { Icon } from "@icons"
import { socials } from "@config"

const StyledLeftSide = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 30px;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    list-style: none;
    padding: 0;

    li {
      padding: 15px 10px;
    }
  }

  @media screen and (max-width: 800px) {
    display: none;
  }
`

const IconList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  list-style: none;

  li {
    padding: 10px;

    &:first-of-type {
      margin-top: 40px;
    }

    &:last-of-type {
      margin-bottom: 40px;
    }
  }

  &:before,
  &:after {
    content: "";
    display: block;
    width: 1px;
    height: 200px;
    background-color: var(--primary-color);
    margin: 0px auto;
  }
`

const IconLink = styled.a`
  svg {
    width: 24px;
    height: 24px;
    // fill: var(--font-color);
    stroke: var(--font-color);
    transition: all 200ms ease-in;

    &:hover {
      // fill: var(--primary-color);
      stroke: var(--primary-color);
    }
  }
`

const Side = () => {
  const [isMounted, setIsMounted] = React.useState(false)

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setIsMounted(true)
    }, 100)

    return () => {
      clearTimeout(timeout)
    }
  }, [])
  return (
    <StyledLeftSide>
      <ul>
        <TransitionGroup component={null}>
          {isMounted &&
            socials.map((social, index) => (
              <CSSTransition key={index} classNames="fade-in" timeout={2000}>
                <li key={index} style={{ transitionDelay: "1600ms" }}>
                  <IconLink href={social.url} key={index}>
                    <Icon icon={social.name} />
                  </IconLink>
                </li>
              </CSSTransition>
            ))}
        </TransitionGroup>
      </ul>
    </StyledLeftSide>
  )
}

export default Side
