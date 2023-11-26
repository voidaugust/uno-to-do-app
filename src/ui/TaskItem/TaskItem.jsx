import styled from "styled-components"
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
`

export const Checkbox = (props) => <StyledCheckbox {...props} />

const StyledCheckbox = styled.input.attrs({ type: "checkbox" })`
  transform: scale(1.5);
  accent-color: ${props => props.$mode === "light" ? "var(--primary-purple)" : "var(--on-dark-primary-purple)"};
  ${defaultAnimation}
`

export const TaskInfoContainer = (props) => <StyledTaskInfoContainer {...props} />

const StyledTaskInfoContainer = styled(Container)`
  display: flex;
  align-items: flex-start;
  margin-inline: 16px 0;
  color: ${props => props.$mode === "light" ? "white" : "black"};
`