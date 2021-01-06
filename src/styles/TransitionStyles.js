import { css } from "styled-components"

const TransitionStyles = css`
  .fade-in-down-enter {
    opacity: 0;
    transform: translateY(-20px);
    transition: opacity 300ms ease-in, transform 300ms ease-in;
  }
  .fade-in-down-enter-active {
    opacity: 1;
    transform: translateY(0px);
    transition: opacity 300ms ease-in, transform 300ms ease-in;
  }

  .fade-in-up-enter {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 300ms ease-in, transform 300ms ease-in;
  }
  .fade-in-up-enter-active {
    opacity: 1;
    transform: translateY(0px);
    transition: opacity 300ms ease-in, transform 300ms ease-in;
  }

  .fade-in-enter {
    opacity: 0;
  }
  .fade-in-enter-active {
    opacity: 1;
    transition: opacity 300ms ease-in;
  }
  .fade-in-exit {
    opacity: 1;
  }
  .fade-in-exit-active {
    opacity: 0;
    transition: opacity 300ms ease-in;
  }
`

export default TransitionStyles
