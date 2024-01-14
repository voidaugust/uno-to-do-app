import { useContext, useMemo } from 'react'
import { useSelector } from 'react-redux'
import AppContext from '../../context/context'
import Container from '../../ui/Containers/Container'
import styled from 'styled-components'
import TodoPanelFooter from './TodoPanelFooter'
import TodoPanelHeader from './TodoPanelHeader'
import TodoDueDateBlock from './TodoDueDateBlock'
import TodoNoteBlock from './TodoNoteBlock'

export default function TodoPanel() {
  const context = useContext(AppContext)
  
  const taskLists = useSelector(store => store.data)
  const tasks = useMemo(() => taskLists.map(list => list.todos).flat(Infinity), [taskLists])
  const activeTaskId = useSelector(store => store.todoPanelUI.activeTaskId)
  const activeTask = useMemo(() => tasks.find(task => task.id === activeTaskId), [tasks, activeTaskId])

  return (
    <TodoPanelContainer $mode={context.mode}>
      <Container>
        <TodoPanelHeader activeTask={activeTask} />
        <Divider />
        <TodoDueDateBlock activeTask={activeTask} />
        <Divider />
        <TodoNoteBlock activeTask={activeTask} />
        <Divider />
      </Container>
      <TodoPanelFooter activeTask={activeTask} />
    </TodoPanelContainer>
  )
}

const Divider = () => {
  const context = useContext(AppContext)
  return <Container as="span" $divider $mode={context.mode} />
}

const TodoPanelContainer = (props) => {
  return <StyledTodoPanelContainer {...props} />
}

const StyledTodoPanelContainer = styled(Container)`
  justify-content: space-between;
  padding-block: 40px 20px;
  width: 85%;
  min-width: 240px;
  height: 100%;
  background-color: ${props => props.$mode === "light" ? "white" : "var(--dark-mode-background)"};
`