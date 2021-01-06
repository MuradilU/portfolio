import React from "react"
import styled from "styled-components"

const StyledButton = styled.button`
  position: relative;
  display: inline-block;
  cursor: pointer;
  outline: none;
  border: none;
  padding: 0;
  background: transparent;
  width: 13em;
  height: auto;

  &:hover {
    span {
      width: 100%;
      background: var(--primary-color);

      .rect rect {
        fill: var(--monochrome);
      }

      .rect {
        transform: translate(1em, 0);
      }

      .arrow {
        transform: translate(1em, 0) rotate(45deg);
      }
    }

    em {
      color: var(--monochrome);
    }
  }

  span {
    position: relative;
    display: block;
    width: 3em;
    height: 3em;
    background: var(--font-color);
    border-radius: 1.65em;
    transition: all 0.3s ease-in-out;

    svg {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      transition: all 0.3s ease-in-out;
    }
  }

  .arrow {
    margin: 13px 0 0 13px;
    transform: rotate(45deg);
    width: 10px;

    rect {
      fill: var(--monochrome);
    }
  }

  .rect {
    margin: 15px 0 0 8px;
    width: 15px;

    rect {
      fill: transparent;
      transition: fill 0.3s ease-in-out;
    }
  }

  em {
    position: absolute;
    text-transform: uppercase;
    font-weight: bold;
    font-style: normal;
    color: var(--font-color);
    top: 0;
    bottom: 0;
    right: 0;
    margin: 0 1.7em 0 0;
    line-height: 3em;
    transition: all 0.3s ease-in-out;
  }
`

const Button = () => {
  return (
    <StyledButton>
      <span>
        <svg className="rect" viewBox="0 0 200 50">
          <rect
            className="hover-rect"
            x="0"
            y="20"
            width="200"
            height="25"
          ></rect>
        </svg>
        <svg className="arrow" viewBox="0 0 50 50">
          <rect x="0" y="0" width="50" height="10"></rect>
          <rect x="40" y="0" width="10" height="50"></rect>
        </svg>
      </span>
      <em>My Resume</em>
    </StyledButton>
  )
}

export default Button
