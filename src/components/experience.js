import React from "react"
import styled from "styled-components"
import { CSSTransition } from "react-transition-group"
import { useStaticQuery, graphql } from "gatsby"
import scrollreveal from "@utils/scrollreveal"
import { srConfig } from "@config"

const StyledExperienceSection = styled.section`
  max-width: 900px;

  .content {
    display: grid;
    grid-template-columns: 1fr 4fr;
    column-gap: 30px;
    margin-top: 50px;
  }

  @media screen and (max-width: 850px) {
    .content {
      display: block;
    }
  }
`

const StyledTabList = styled.ul`
  position: relative;
  list-style: none;
  margin: 0;
  padding: 0;

  .marker {
    position: absolute;
    top: 0;
    right: 0;
    width: 3px;
    height: var(--tab-height);
    background-color: var(--secondary-color);
    transition: all 300ms ease-in-out;
    transform: translateY(
      calc(${props => props.currentTab} * var(--tab-height))
    );
  }

  @media screen and (max-width: 850px) {
    display: grid;
    grid-auto-columns: minmax(0, 1fr);
    grid-auto-flow: column;
    justify-content: space-between;
    margin-bottom: 25px;

    .marker {
      bottom: 0;
      left: 0;
      top: unset;
      height: 3px;
      width: ${props => (1 / props.totalTabs) * 100}%;
      transform: translateX(calc(${props => props.currentTab} * 100%));
    }
  }
`

const StyledTabListItem = styled.li`
  button {
    cursor: pointer;
    outline: none;
    background-color: transparent;
    width: 100%;
    height: var(--tab-height);
    text-align: center;
    border: none;
    border-right: 2px solid var(--lightgrey);
    transition: all 300ms ease-in-out;

    span {
      color: var(
        ${props => (props.isCurrentTab ? "--primary-color" : "--font-color")}
      );
      font-size: 14px;
      font-weight: 600;
    }

    &:hover {
      background-color: var(--hover-color);

      span {
        color: var(--primary-color);
      }
    }
  }

  @media screen and (max-width: 850px) {
    flex-grow: 1;

    button {
      width: 100%;
      height: 50px;
      border-right: none;
      border-bottom: 2px solid var(--lightgrey);
    }
  }
`

const StyledTabContent = styled.div`
  .company {
    font-size: 20px;
    font-weight: 600;
    padding-right: 10px;
    border-right: 2px solid var(--font-color);
  }

  .title {
    font-size: 18px;
    color: var(--primary-color);
    padding-left: 10px;
  }

  p {
    font-size: 15px;
    color: darkgrey;
  }

  ul {
    list-style: none;
    position: relative;

    li {
      &:before {
        position: absolute;
        content: "○";
        left: 5px;
        color: var(--primary-color);
      }
      line-height: 1.3em;

      &:not(:last-of-type) {
        padding-bottom: 10px;
      }
    }
  }
`

const Experience = () => {
  const data = useStaticQuery(
    graphql`
      {
        allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: "/experience/" } }
          sort: { fields: [frontmatter___date], order: DESC }
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

  const [currentTabId, setCurrentTabId] = React.useState(0)

  const jobs = data.allMarkdownRemark.edges

  const revealContainer = React.useRef(null)

  React.useEffect(() => {
    scrollreveal.reveal(revealContainer.current, srConfig)
  }, [])

  return (
    <StyledExperienceSection id="experience" ref={revealContainer}>
      <h2 className="section-header">Work Experience</h2>
      <div className="content">
        <StyledTabList
          role="tablist"
          currentTab={currentTabId}
          totalTabs={jobs.length}
        >
          {jobs.map((job, index) => (
            <StyledTabListItem
              key={index}
              isCurrentTab={currentTabId === index}
            >
              <button
                onClick={e => {
                  setCurrentTabId(index)
                }}
                id={`tab-${index}`}
                role="tab"
                aria-selected={currentTabId === index}
                aria-controls={`tabpanel-${index}`}
              >
                <span>{job.node.frontmatter.company.split(" ")[0]}</span>
              </button>
            </StyledTabListItem>
          ))}
          <li className="marker"></li>
        </StyledTabList>
        <StyledTabContent>
          {jobs.map((job, index) => (
            <CSSTransition
              key={index}
              in={currentTabId === index}
              classNames="fade-in"
              timeout={300}
            >
              <div
                hidden={currentTabId !== index}
                id={`panel-${index}`}
                role="tabpanel"
                aria-hidden={currentTabId !== index}
                aria-labelledby={`tab-${index}`}
              >
                <span className="company">{job.node.frontmatter.company}</span>
                <span className="title">{job.node.frontmatter.title}</span>
                <p>{job.node.frontmatter.range}</p>
                <div dangerouslySetInnerHTML={{ __html: job.node.html }} />
              </div>
            </CSSTransition>
          ))}
        </StyledTabContent>
      </div>
    </StyledExperienceSection>
  )
}

export default Experience
