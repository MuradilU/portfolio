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