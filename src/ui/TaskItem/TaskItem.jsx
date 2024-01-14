import styled, { css } from "styled-components"
import Container from "../Containers/Container"
import { modeBackground } from "../modeBackground"
import { defaultAnimation } from "../defaultAnimation"

export const TaskContainer = styled.li`
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

  ${props => props.$activeTask && css`
    background: ${props => props.$mode === "light" ? "var(--light-primary-purple-inverse)" : "var(--light-primary-purple-variant)"};
  `};
`

export const Checkbox = (props) => (
  <>
    <StyledCheckbox readOnly={true} {...props} />
    <StyledFakeCheckbox />
  </>
)

const StyledCheckbox = styled.input.attrs({ type: "checkbox" })`
  position: absolute;
  transform: scale(1.5);
  opacity: ${props => props.$isCompleted ? "1" : "0"};
  cursor: pointer;
  accent-color: ${props => props.$mode === "light" ? "var(--primary-purple)" : "var(--on-dark-primary-purple)"};
  ${defaultAnimation}
`

const StyledFakeCheckbox = styled.label`
  width: 13px;
  height: 13px;
  transform: scale(1.5);
  border-width: 1px;
  border-style: solid;
  border-image: initial;
  border-radius: 2px;
  cursor: pointer;
`

export const TaskInfoContainer = (props) => <StyledTaskInfoContainer {...props} />

const StyledTaskInfoContainer = styled(Container)`
  display: flex;
  align-items: flex-start;
  margin-inline: 16px 0;
  color: ${props => props.$mode === "light" ? "white" : "black"};
  cursor: pointer;
`