import styled, { css } from "styled-components"
import Text from "../Text/Text"

export default function UserPic(props) {
  return (
    <StyledUserPic {...props}>
      <StyledUserPicText {...props}>
        PA
      </StyledUserPicText>
    </StyledUserPic>
  )
}

const StyledUserPic = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-inline: ${props => props.$marginInline || "0 10px"};
  width: 32px;
  height: 32px;
  background-color: var(--primary-purple);
  border-radius: 100%;

  ${props => props.$x2 && css`
    width: 60px;
    height: 60px;
  `}
`

const StyledUserPicText = styled(Text)`
  font-size: 14px;
  color: ${props => props.$textColor};

  ${props => props.$x2 && css`
    font-size: 22px;
  `}
`