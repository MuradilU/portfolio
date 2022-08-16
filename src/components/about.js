import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import scrollreveal from "@utils/scrollreveal"
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

    p {
      em {
        font-style: normal;
        font-weight: 600;
        color: var(--secondary-color);
      }
      &:first-of-type {
        font-size: 20px;
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
          gatsbyImageData(
            layout: CONSTRAINED
            width: 500
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
  `)

  const revealContainer = React.useRef(null)

  React.useEffect(() => {
    scrollreveal.reveal(revealContainer.current, srConfig)
  }, [])

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="section-header">About Me</h2>
      <div className="content">
        <div className="img-wrapper">
          <GatsbyImage
            image={data.avatar.childImageSharp.gatsbyImageData}
            alt="Avatar"
            className="avatar"
          />
        </div>
        <div>
          <p>
            Hello! I'm <em>Muradil</em>, a fourth year{" "}
            <em>Computer Engineering</em> student at the{" "}
            <em>University of Waterloo</em>.
          </p>
          <p>
            I'm an avid learner and with an interest in solving complex problems
            in the field of Software Engineering. I am also an experienced developer
            in <em>JavaScript</em>, <em>Python</em>, and <em>C/C++</em> and always
            looking to learn more!
            My objective is to always meet the highest
            standards, learn new skills and technologies, and improve existing
            ones.
          </p>
          <p>
            In my free time I like to relax by playing guitar, learning new
            recipes, or playing video games!
          </p>
          <p>
            <b>Currently in search of <em>full-time</em> oppurtunities for 2023!</b>
          </p>
        </div>
      </div>
    </StyledAboutSection>
  )
}

export default About
