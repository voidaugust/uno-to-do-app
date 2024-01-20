import styled, { css } from 'styled-components'
import Button from './Button'
import { defaultHoverShadow } from './defaultHoverShadow'

export default function SettingsButton(props) {
  return (
    <StyledSettingsButton {...props}>
      {props.children}
    </StyledSettingsButton>
  )
}

const StyledSettingsButton = styled(Button)`
  color: ${props => props.$mode === "light" 
    ? "var(--over-light-grey-opaque-variant)"
    : "var(--over-dark-grey-opaque-variant)"
  };
  background-color: transparent;
  border-radius: 8px;
  border: solid 1px;
  border-color: ${props => props.$mode === "light" 
    ? "var(--over-light-grey-opaque-variant)"
    : "var(--over-dark-grey-opaque-variant)"
  };

  ${props => props.$active && css`
    color: var(--over-secondary-purple);
    background-color: var(--secondary-purple);
    border-color: transparent;
  `}

  &:hover {
    ${defaultHoverShadow}
  }
`