import styled, { css } from 'styled-components'
import { useSelector } from 'react-redux'
import Icon from '../Icons/Icon'
import { 
  plusIconWhite,
  plusIconOnLight, 
  plusIconOnDark 
} from '../Icons/iconTypes'

export default function Button(props) {
  const context = useSelector(state => state.userPanelUI)
  const preparedProps = {
    ...props, 
    $mode: context.mode,
    $palette: context.palette
  }

  const plusIcon = 
    (props.$filled || props.$tonal) 
      ? plusIconWhite 
      : context.mode === "light" ? plusIconOnLight : plusIconOnDark

  return (
    <StyledButton {...preparedProps}>
      {
        props.$add
          ? <Icon 
              $src={plusIcon} $width="18px" $height="18px" 
              $left={props.$left || props.$newList ? "12px" : "16px"} 
            /> 
          : undefined
      }
      {props.children}
    </StyledButton>
  )
}

const StyledButton = styled.button`
  display: flex;
  position: relative;
  padding-block: 10px;
  padding-inline: 16px 24px;
  justify-content: center;
  align-items: center;
  width: ${props => props.$width || "100%"};
  gap: 8px;
  font-size: 14px;
  line-height: 20px;
  font-weight: 500;
  border-radius: 20px;
  color: ${props => props.$mode === "light" ? "var(--primary-purple)" : "var(--on-dark-primary-purple)"};
  background: transparent;
  transition: all 150ms ease-in-out;

  &:hover {
    box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.24); 
  }

  ${props => props.$add && css`
    justify-content: flex-start;
    padding-inline-start: 40px;
    border-radius: 0;

    &:hover {
      background-color: ${props => props.$mode === "light" ? "var(--light-grey)" : "var(--dark-grey)"};
    }
  `}

  ${props => props.$filled && css`
    color: white;
    background: var(--primary-purple);
  `}

  ${props => props.$tonal && css`
    color: var(--over-secondary-purple);
    background: var(--secondary-purple);
  `}
`