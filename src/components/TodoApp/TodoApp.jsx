import { useContext, useState } from 'react'
import AppContext from '../../context/context'
import MainWrapper from '../../ui/MainWrapper/MainWrapper'
import Container from '../../ui/Containers/Container'
import TodoAppListPanel from '../TodoAppListPanel/TodoAppListPanel'
import TaskList from '../TaskList/TaskList'
import Modal from '../Modal/Modal'
import UserSettingsModal from '../Modal/UserSettingsModal'
import styled from 'styled-components'

export default function TodoApp() {
  const context = useContext(AppContext)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [areSettingsOpen, setAreSettingsOpen] = useState(false)

  return (
    <>
      <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      <UserSettingsModal areSettingsOpen={areSettingsOpen} setAreSettingsOpen={setAreSettingsOpen} />
      <MainWrapper $mode={context.mode}>
        <Container 
          $width="30dvw" $minWidth="280px" $height="100%" 
          $mode={context.mode} $modeBg
        >
          <TodoAppListPanel />
        </Container>

        <TaskListContainer $mode={context.mode}>
          <TaskList />
        </TaskListContainer>

      </MainWrapper>
    </>
  )
}

const TaskListContainer = styled(Container)`
  justify-content: flex-start;
  padding-block: 20px;
  padding-inline: 20px;
  width: 70dvw;
  height: 100%;
  background-color: 
    ${props => props.$mode === "light"
      ? "var(--light-primary-purple-variant)"
      : "var(--dark-primary-purple-variant)"
    }
`