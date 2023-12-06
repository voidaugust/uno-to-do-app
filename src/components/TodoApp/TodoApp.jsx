import { useContext } from 'react'
import AppContext from '../../context/context'
import MainWrapper from '../../ui/MainWrapper/MainWrapper'
import Container from '../../ui/Containers/Container'
import TodoAppListPanel from '../TodoAppListPanel/TodoAppListPanel'
import TaskList from '../TaskList/TaskList'
import Modal from '../Modal/Modal'
import UserSettingsModal from '../Modal/UserSettingsModal'
import styled from 'styled-components'
import TodoPanel from '../TodoPanel/TodoPanel'
import { useSelector } from 'react-redux'

export default function TodoApp() {
  const context = useContext(AppContext)
  const activeTask = useSelector(store => store.todoListUI.activeTaskId)
  const isActiveTaskSet = activeTask !== null

  return (
    <>
      <Modal />
      <UserSettingsModal />
      <MainWrapper $mode={context.mode}>
        <Container 
          $width="25vw" $minWidth="280px" $height="100%" 
          $mode={context.mode} $modeBg
        >
          <TodoAppListPanel />
        </Container>

        <TaskListContainer
          $width={isActiveTaskSet ? "50vw" : "75vw"}
          $mode={context.mode}
        >
          <TaskList />
        </TaskListContainer>

        {isActiveTaskSet
          ? <Container
            $width="25vw" $minWidth="280px" $height="100%" 
            $mode={context.mode} $modeBg
          >
            <TodoPanel />
          </Container>
          : undefined
        }
      </MainWrapper>
    </>
  )
}

const TaskListContainer = styled(Container)`
  justify-content: flex-start;
  padding-block: 20px;
  padding-inline: 20px;
  width: ${props => props.$width};
  height: 100%;
  background-color: 
    ${props => props.$mode === "light"
      ? "var(--light-primary-purple-variant)"
      : "var(--dark-primary-purple-variant)"
    }
`