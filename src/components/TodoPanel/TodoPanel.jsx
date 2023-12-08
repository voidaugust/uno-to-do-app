import { useContext, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AppContext from '../../context/context'
import Container from '../../ui/Containers/Container'
import styled from 'styled-components'
import TodoPanelFooter from './TodoPanelFooter'
import TodoPanelHeader from './TodoPanelHeader'

export default function TodoPanel() {
  const context = useContext(AppContext)
  
  const taskLists = useSelector(store => store.data)
  const tasks = useMemo(() => taskLists.map(list => list.todos).flat(Infinity), [taskLists])
  const activeTaskId = useSelector(store => store.todoListUI.activeTaskId)
  const activeTask = useMemo(() => tasks.find(task => task.id === activeTaskId), [tasks, activeTaskId])

  return (
    <TodoPanelContainer $mode={context.mode}>
      <Container>
        <TodoPanelHeader activeTask={activeTask} />

        <Container as="span" $divider $mode={context.mode} />

        <Container $direction="row" $justifyContent="space-between">
          Deadline here
        </Container>

        <Container as="span" $divider $mode={context.mode} />

        <Container $direction="row" $justifyContent="space-between">
          Note here
        </Container>

        <Container as="span" $divider $mode={context.mode} />
      </Container>

      <TodoPanelFooter activeTask={activeTask} />
    </TodoPanelContainer>
  )
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