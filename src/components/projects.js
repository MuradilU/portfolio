import React from "react"
import styled from "styled-components"
import { TransitionGroup, CSSTransition } from "react-transition-group"
import ScrollReveal from "scrollreveal"
import { useStaticQuery, graphql } from "gatsby"
import { Icon } from "@icons"
import { srConfig } from "@config"

const StyledProjectSection = styled.section`
  max-width: 1000px;

  .content {
    margin-top: 50px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-auto-rows: 350px;
    gap: 20px;
  }
`

const StyledCard = styled.div`
  position: relative;
  background-color: var(--card-color);
  transition: all 500ms ease;
  box-shadow: var(--box-shadow);

  &:before {
    position: absolute;
    width: 0px;
    height: 5px;
    content: "";
    background: var(--linear-gradient);
    background-attachment: fixed;
    top: 0px;
    left: 0px;
    transition: 100ms width ease 300ms;
  }
  &:after {
    position: absolute;
    width: 5px;
    height: 0px;
    content: "";
    background: var(--linear-gradient);
    background-attachment: fixed;
    top: 0px;
    right: 0px;
    transition: 100ms height ease 200ms;
  }

  .card-content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    padding: 40px 30px 25px;

    .title-container {
      display: grid;
      grid-template-columns: 4fr 1fr;
      column-gap: 20px;

      .card-title {
        margin-top: 0;
        font-size: 28px;
      }

      svg {
        width: 40px;
        height: 40px;
        stroke: var(--primary-color);
        color: var(--primary-color);
      }
    }

    .card-description {
      font-size: 17px;

      &:before {
        content: "";
        display: block;
        width: 60%;
        border-bottom: 1px solid var(--primary-color);
      }
    }

    footer {
      a:not(:last-of-type) {
        margin-right: 20px;
      }
    }

    &:after {
      position: absolute;
      width: 0px;
      height: 5px;
      content: "";
      background: var(--linear-gradient);
      background-attachment: fixed;
      bottom: 0px;
      right: 0px;
      transition: 100ms width ease 100ms;
    }
    &:before {
      position: absolute;
      width: 5px;
      height: 0px;
      content: "";
      background: var(--linear-gradient);
      background-attachment: fixed;
      bottom: 0px;
      left: 0px;
      transition: 100ms height ease 0ms;
    }
  }

  &:hover {
    &:before {
      width: 100%;
      transition: 100ms width ease 0ms;
    }
    &:after {
      height: 100%;
      transition: 100ms height ease 100ms;
    }
    .card-content {
      &:after {
        width: 100%;
        transition: 100ms width ease 200ms;
      }
      &:before {
        height: 100%;
        transition: 100ms height ease 300ms;
      }
    }
  }

  @media screen and (max-width: 500px) {
    .card-content {
      padding: 40px 25px 25px;
    }
  }
`

const CardTitle = styled.h2``

const CardTechList = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;

  li:not(:last-of-type) {
    margin-right: 8px;
    font-size: 15px;
  }
`

const IconLink = styled.a`
  svg {
    width: 24px;
    height: 24px;
    stroke: var(--font-color);
    transition: all 200ms ease-in;

    &:hover {
      stroke: var(--primary-color);
    }
  }
`

const Projects = () => {
  const data = useStaticQuery(
    graphql`
      {
        allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: "/projects/" } }
          sort: { fields: [frontmatter___date], order: DESC }
        ) {
          edges {
            node {
              html
              frontmatter {
                title
                date
                tech
                github
                link
                icon
              }
            }
          }
        }
      }
    `
  )

  const projects = data.allMarkdownRemark.edges

  const revealHeader = React.useRef(null)
  const revealProjects = React.useRef([])

  React.useEffect(() => {
    ScrollReveal().reveal(revealHeader.current, srConfig)
    revealProjects.current.forEach((project, index) =>
      ScrollReveal().reveal(project, srConfig)
    )
  }, [])

  return (
    <StyledProjectSection id="projects">
      <h2 className="section-header" ref={revealHeader}>
        Projects
      </h2>
      <div className="content">
        {projects.map((project, index) => (
          <StyledCard
            key={index}
            ref={e => (revealProjects.current[index] = e)}
          >
            <div className="card-content">
              <header>
                <div className="title-container">
                  <h2 className="card-title">
                    {project.node.frontmatter.title}
                  </h2>
                  <Icon icon={project.node.frontmatter.icon} />
                </div>
                <CardTechList>
                  {project.node.frontmatter.tech.map((tech, index) => (
                    <li key={index}>{tech}</li>
                  ))}
                </CardTechList>
                <div
                  className="card-description"
                  dangerouslySetInnerHTML={{ __html: project.node.html }}
                />
              </header>
              <footer>
                {project.node.frontmatter.github && (
                  <IconLink
                    href={project.node.frontmatter.github}
                    key={index}
                    target="_blank"
                  >
                    <Icon icon="github" />
                  </IconLink>
                )}
                {project.node.frontmatter.link && (
                  <IconLink
                    href={project.node.frontmatter.link}
                    target="_blank"
                  >
                    <Icon icon="external-link" />
                  </IconLink>
                )}
              </footer>
            </div>
          </StyledCard>
        ))}
      </div>
    </StyledProjectSection>
  )
}

export default Projects
