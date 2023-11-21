import styled, { css } from 'styled-components'
import Button from './Button'
import { defaultHoverShadow } from './defaultHoverShadow'

export default function SettingsButton(props) {
  
  return (
    <StyledSettingsButton {...props}>
    {/* {
      props.$add
        ? <Icon 
            $src={plusIcon} $width="18px" $height="18px" 
            $left={props.$left || props.$newList ? "12px" : "16px"} 
          /> 
        : undefined
    } */}
    {props.children}
  </StyledSettingsButton>
  )
}

const StyledSettingsButton = styled(Button)`
  border-radius: 8px;
  color: var(--over-secondary-purple);
  background-color: var(--secondary-purple);

  &:hover {
    ${defaultHoverShadow}
  }
`