import React from "react"
import { Layout, Landing, Experience, Projects } from "@components"

export default function Home({ location }) {
  return (
    <Layout>
      <Landing />
      <Experience />
      <Projects />
    </Layout>
  )
}
