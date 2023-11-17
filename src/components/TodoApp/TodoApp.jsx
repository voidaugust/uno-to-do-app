import { useContext, useState } from 'react'
import AppContext from '../../context/context'
import MainWrapper from '../../ui/MainWrapper/MainWrapper'
import Container from '../../ui/Containers/Container'
import TodoAppListPanel from '../TodoAppListPanel/TodoAppListPanel'
import TaskList from '../TaskList/TaskList'
import Modal from '../Modal/Modal'

export default function TodoApp() {
  const context = useContext(AppContext)
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      <MainWrapper $mode={context.mode}>
        <Container 
          $width="30dvw" $minWidth="280px" 
          $height="100%" $mode={context.mode}
          $modeBg
        >
          <TodoAppListPanel />
        </Container>

        <Container 
          $justifyContent="flex-start"
          $paddingBlock="20px"
          $paddingInline="20px"
          $width="70dvw" $height="100%"
          $bgColor={context.mode === "light" 
            ? "var(--light-primary-purple-variant)" 
            : "var(--dark-primary-purple-variant)"
          }
        >
          <TaskList />
        </Container>

      </MainWrapper>
    </>
  )
}