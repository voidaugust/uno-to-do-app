import styled, { css } from 'styled-components'
import Icon from '../Icons/Icon'
import { 
  plusIconWhite,
  plusIconOnLight, 
  plusIconOnDark 
} from '../Icons/iconTypes'
import { defaultAnimation } from '../defaultAnimation'

export default function Button(props) {
  const plusIcon = 
    (props.$filled || props.$tonal || props.$opaque) 
      ? plusIconWhite 
      : props.$mode === "light" ? plusIconOnLight : plusIconOnDark

  return (
    <StyledButton {...props}>
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
  padding-inline: ${props => props.$paddingInline || "12px"};
  justify-content: center;
  align-items: center;
  width: ${props => props.$width || "max-content"};
  height: ${props => props.$height};
  gap: 8px;
  font-size: 14px;
  line-height: 20px;
  font-weight: 500;
  border-radius: 20px;
  color: ${
    props => props.$mode === "light" 
    ? "var(--primary-purple)" 
    : "var(--on-dark-primary-purple)"
  };
  background-color: transparent;
  ${defaultAnimation}

  ${props => props.$rectangle && css`
    border-radius: 0;

    &:hover {
      ${defaultHoverShadow}
      background-color: ${
        props => props.$mode === "light" 
          ? "var(--light-grey)" 
          : "var(--dark-grey)"
      };
    }
  `}

  ${props => props.$alignLeft && css`
    justify-content: flex-start;
    padding-inline-start: 42px;
  `}

  ${props => props.$filled && css`
    color: white;
    background-color: var(--primary-purple);

    ${props => props.$warning && css`
    background-color: ${
      props => props.$mode === "light" 
        ? "var(--light-pink)" 
        : "var(--dark-pink)"  
      };
    `}

    &:hover {
      ${defaultHoverShadow}
    }
  `}

  ${props => props.$tonal && css`
    color: var(--over-secondary-purple);
    background-color: var(--secondary-purple);

    &:hover {
      ${defaultHoverShadow}
    }
  `}

  ${props => props.$opaque && css`
    color: white;
    background-color: ${
      props => props.$mode === "light" 
        ? "var(--over-light-surface-grey)" 
        : "var(--over-dark-surface-grey)"
    };

    &:hover {
      ${defaultHoverShadow}
    }
  `}
`

const defaultHoverShadow = css`
  box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.24);
`