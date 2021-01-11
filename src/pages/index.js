import React from "react"
import styled from "styled-components"
import {
  Layout,
  Landing,
  About,
  Experience,
  Projects,
  Contact,
} from "@components"

const StyledMainContainer = styled.main`
  padding: 0 150px;

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

export default function Home({ location }) {
  return (
    <Layout>
      <StyledMainContainer>
        <Landing />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </StyledMainContainer>
    </Layout>
  )
}
