import React from "react"
import styled from "styled-components"
import { Icon } from "@icons"
import { socials } from "@config"

const IconLink = styled.a`
  svg {
    width: 18px;
    height: 18px;
  }
  svg:hover {
    fill: red;
  }
`

const Side = () => {
  return (
    <div>
      {socials.map((social, index) => (
        <IconLink href={social.url} key={index}>
          <Icon icon={social.name} />
        </IconLink>
      ))}
    </div>
  )
}

export default Side
