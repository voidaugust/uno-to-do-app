import styled from "styled-components"

export default function Icon(props) {
  return <StyledIcon {...props} dangerouslySetInnerHTML={{__html: props.$src }} />
}

const StyledIcon = styled.span`
  position: absolute;
  top: ${props => props.$top};
  left: ${props => props.$left};
  width: ${props => props.$width || "24px"};
  height: ${props => props.$height || "24px"};
`