import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Experience = () => {
  const data = useStaticQuery(
    graphql`
      {
        allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: "/experience/" } }
        ) {
          edges {
            node {
              html
              frontmatter {
                company
                title
                location
                range
              }
            }
          }
        }
      }
    `
  )

  const jobs = data.allMarkdownRemark.edges

  return (
    <section id="experience">
      {jobs.map((job, index) => (
        <div key={index}>
          <h1>{job.node.frontmatter.title}</h1>
          <h2>{job.node.frontmatter.company}</h2>
          <h3>{job.node.frontmatter.range}</h3>
          <h3>{job.node.frontmatter.location}</h3>
          <div dangerouslySetInnerHTML={{ __html: job.node.html }} />
        </div>
      ))}
    </section>
  )
}

export default Experience
