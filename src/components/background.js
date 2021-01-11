import React from "react"
import styled, { keyframes, css } from "styled-components"
import { TransitionGroup, CSSTransition } from "react-transition-group"
import { Icon } from "@icons"
import { icons } from "@config"

const rotate = (start, end) => keyframes`
    0% {
        transform: rotate(${start}) scale(1);
    }
    50% {
        transform: scale(0.8);
    }
    100% {
        transform: rotate(${end}) scale(1);
    }
`

const StyledBackground = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  padding: 6em 3em;

  .wrapper {
    position: relative;
    width: inherit;
    height: inherit;
    transition-delay: 1300ms;
    transform: translateX(-15px);
  }

  @media screen and (max-width: 800px) {
    padding: 6em 2em 3em;

    .glasses,
    .terminal,
    .keyboard,
    .desktop,
    .earth,
    .headset {
      display: none;
    }
    .mouse {
      top: 29%;
    }
    .cafe {
      top: 73%;
    }
    .barbell {
      top: 82%;
    }
    .code {
      top: 22%;
    }
    .joystick {
      top: 14%;
      left: 66%;
    }
    .gear {
      left: 58%;
    }
    .leaf {
      left: 0%;
    }
  }

  @media (max-width: 350px) {
    .mouse,
    .leaf,
    .joystick,
    .film,
    .cafe,
    .hardware {
      display: none;
    }
  }
`

const StyledIconContainer = styled.div`
  animation: ${props => rotate(props.start, props.end)} 20s linear infinite;
  transform-origin: bottom right;
  position: absolute;
  top: ${props => props.y};
  left: ${props => props.x};
  width: min-content;
  height: min-content;

  svg {
    width: ${props => props.size};
    height: ${props => props.size};
    // margin-left: ${props => props.margin};
    fill: var(--primary-color);
    color: var(--primary-color);

    &:hover {
      fill: var(--font-color);
      color: var(--font-color);
    }
  }

  @media screen and (max-width: 700px) {
    svg {
      width: calc(${props => props.size} * 0.9);
      height: calc(${props => props.size} * 0.9);
    }
  }
`

const Background = () => {
  const [isMounted, setIsMounted] = React.useState(false)

  React.useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <StyledBackground>
      <TransitionGroup component={null}>
        {isMounted && (
          <CSSTransition classNames="fade-in" timeout={2000}>
            <div className="wrapper">
              {icons.map((icon, index) => (
                <StyledIconContainer
                  key={index}
                  className={icon.name}
                  margin={`${20 - index * 1}em`}
                  start={`${0 + 60 * index}deg`}
                  end={`${360 + 60 * index}deg`}
                  x={icon.x}
                  y={icon.y}
                  size={icon.size}
                >
                  <Icon icon={icon.name} />
                </StyledIconContainer>
              ))}
            </div>
          </CSSTransition>
        )}
      </TransitionGroup>
    </StyledBackground>
  )
}

export default Background
