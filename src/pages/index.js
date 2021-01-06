import React from "react"
import styled from "styled-components"
import { Layout, Landing, About, Experience, Projects } from "@components"

const StyledMainContainer = styled.main`
  padding: 0 150px;
`

export default function Home({ location }) {
  return (
    <Layout>
      <StyledMainContainer>
        <Landing />
        <About />
        <Experience />
        <Projects />
      </StyledMainContainer>
    </Layout>
  )
}
