import React from "react"
import styled from "styled-components"
import ScrollReveal from "scrollreveal"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { srConfig } from "@config"

const StyledAboutSection = styled.section`
  max-width: 800px;

  .content {
    margin-top: 50px;
    display: grid;
    grid-template-columns: 2fr 3fr;
    column-gap: 50px;

    .img-wrapper {
      display: block;
      width: 350px;
      max-width: 350px;

      .avatar {
        position: relative;
        border-radius: 50%;
        background-color: var(--secondary-color);
        transition: all 150ms linear;

        &:hover {
          background-color: var(--primary-color);
        }
      }
    }
  }

  @media (max-width: 900px) {
    .content {
      display: block;

      .img-wrapper {
        margin: 0 auto;
      }
    }
  }
  @media (max-width: 650px) {
    .content {
      .img-wrapper {
        width: 275px;
      }
    }
  }
  @media (max-width: 400px) {
    .content {
      .img-wrapper {
        width: 200px;
      }
    }
  }
`

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      avatar: file(
        sourceInstanceName: { eq: "images" }
        relativePath: { eq: "avatar.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const revealContainer = React.useRef(null)

  React.useEffect(() => {
    ScrollReveal().reveal(revealContainer.current, srConfig)
  }, [])

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="section-header">About Me</h2>
      <div className="content">
        <div className="img-wrapper">
          <Img
            fluid={data.avatar.childImageSharp.fluid}
            alt="Avatar"
            className="avatar"
          />
        </div>
        <div>
          <p>
            Hi! My name is Muradil Udun and I am currently a 3A Computer
            Engineering student studying at the University of Waterloo.
          </p>
          <p>
            I am a keen learner with an interest in Embedded Systems, Machine
            Learning, and Web Development.
          </p>
          <p>
            I am currently looking for Computer Engineering internships for
            Spring 2020. Please contact me if you're interested!
          </p>
        </div>
      </div>
    </StyledAboutSection>
  )
}

export default About
