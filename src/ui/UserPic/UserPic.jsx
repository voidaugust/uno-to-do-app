import { useSelector } from "react-redux"
import styled from "styled-components"
import Text from "../Text/Text"

export default function UserPic() {
  const context = useSelector(state => state.userPanelUI)
  const $modeColor = `${context.mode === "light" ? "white" : "black"}`

  return (
    <StyledUserPic>
      <StyledUserPicText $modeColor={$modeColor}>
        PA
      </StyledUserPicText>
    </StyledUserPic>
  )
}

const StyledUserPic = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-inline: 0 10px;
  width: 32px;
  height: 32px;
  background-color: var(--primary-purple);
  border-radius: 100%;
`

const StyledUserPicText = styled(Text)`
  font-size: 14px;
  color: ${props => props.$modeColor};
`