import React from "react"
import styled from "styled-components"
import { Button } from "@components"
import { Icon } from "@icons"
import scrollreveal from "@utils/scrollreveal"
import { socials, srConfig } from "@config"

const StyledContactSection = styled.section`
  max-width: 400px;

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
      font-size: 18px;
      line-height: 1.3em;
      text-align: center;
      padding-bottom: 20px;
    }

    a {
      position: relative;
    }
  }
`

const StyledContactButton = styled.button`
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
  transition: color 250ms ease-in-out;

  &:before {
    content: "";
    display: block;
    background-color: var(--primary-color);
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 0%;
    transition: width 250ms ease-in-out;
    z-index: -1;
  }

  &:hover {
    color: var(--card-color);

    &:before {
      width: 100%;
    }
  }
`

const StyledIconList = styled.ul`
  display: none;
  align-items: center;
  justify-content: center;
  list-style: none;
  padding: 40px;

  li {
    padding: 10px;
  }

  @media screen and (max-width: 800px) {
    display: flex;
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

const Contact = () => {
  const revealContainer = React.useRef(null)

  React.useEffect(() => {
    scrollreveal.reveal(revealContainer.current, srConfig)
  }, [])

  return (
    <StyledContactSection id="about" ref={revealContainer}>
      <h2 className="section-header">Contact me</h2>
      <div className="content">
        <p>
          I'm currently looking for full-time opportunities for 2023.
          Please contact me if you're interested or if you just want to chat!
        </p>
        <a href="mailto:udun2000@gmail.com">
          <StyledContactButton>Get In Touch</StyledContactButton>
        </a>
        <StyledIconList>
          {socials.map((social, index) => (
            <li key={index} style={{ transitionDelay: "1600ms" }}>
              <IconLink href={social.url} key={index}>
                <Icon icon={social.name} />
              </IconLink>
            </li>
          ))}
        </StyledIconList>
      </div>
    </StyledContactSection>
  )
}

export default Contact
