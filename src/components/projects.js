import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Projects = () => {
  const data = useStaticQuery(
    graphql`
      {
        allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: "/projects/" } }
        ) {
          edges {
            node {
              html
              frontmatter {
                title
                date
                tech
                github
              }
            }
          }
        }
      }
    `
  )

  const projects = data.allMarkdownRemark.edges

  return (
    <section id="projects">
      {projects.map((project, index) => (
        <div key={index}>
          <h1>{project.node.frontmatter.title}</h1>
          <h3>{project.node.frontmatter.date}</h3>
          <p>{project.node.frontmatter.tech.join()}</p>
          <a href={project.node.frontmatter.github}>github</a>
          <div dangerouslySetInnerHTML={{ __html: project.node.html }} />
        </div>
      ))}
    </section>
  )
}

export default Projects
