import styled from "styled-components"
import Container from "../Containers/Container"
import Icon from "../Icons/Icon"
import { importantIconNotFilled, importantIconFilled } from "../Icons/iconTypes"
import SquareIconButton from "../Button/SquareIconButton"
import { modeBackground } from "../modeBackground"
import { defaultAnimation } from "../defaultAnimation"

export default function TaskItem(props) {
  const test = 1
  const isImportant = test ? importantIconFilled : importantIconNotFilled
  
  return (
    <TaskContainer $modeBg $mode={props.$mode}>
      <Container $direction="row">
        <SquareIconButton $mode={props.$mode}>
          <Checkbox $mode={props.$mode}  />
        </SquareIconButton>

        <TaskInfoContainer>
          Todo Title
        </TaskInfoContainer>
      </Container>

      <SquareIconButton $mode={props.$mode}>
        <Icon $src={isImportant} $left="calc(50% - 12px)" />
      </SquareIconButton>

    </TaskContainer>
  )
}

const TaskContainer = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-inline: 10px;
  width: 100%;
  height: 60px;
  gap: 16px;
  list-style-type: none;
  border-radius: 10px;
  ${modeBackground}
`

const Checkbox = styled.input.attrs({ type: "checkbox" })`
  transform: scale(1.5);
  accent-color: ${props => props.$mode === "light" ? "var(--primary-purple)" : "var(--on-dark-primary-purple)"};
  ${defaultAnimation}
`

const TaskInfoContainer = styled(Container)`
  display: flex;
  align-items: flex-start;
  margin-inline: 16px 0;
`