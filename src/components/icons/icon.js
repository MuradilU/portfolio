import React from "react"
import { GmailIcon, LinkedInIcon, GithubIcon } from "@icons"

const Icon = ({ icon }) => {
  switch (icon) {
    case "gmail":
      return <GmailIcon />
    case "linkedin":
      return <LinkedInIcon />
    case "github":
      return <GithubIcon />
    default:
      return <svg></svg>
  }
}

export default Icon
