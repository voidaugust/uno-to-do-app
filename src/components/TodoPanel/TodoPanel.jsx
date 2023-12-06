import styled from 'styled-components'
import Container from '../../ui/Containers/Container'
import AppContext from '../../context/context'
import { useContext, useMemo } from 'react'
import Text from '../../ui/Text/Text'
import { useDispatch, useSelector } from 'react-redux'
import SquareIconButton from '../../ui/Button/SquareIconButton'
import { Checkbox } from '../../ui/TaskItem/TaskItem'
import { setCompleted, setImportant } from '../../store/actionCreators/dataActionsCreator'
import { importantIconFilled, importantIconNotFilled } from "../../ui/Icons/iconTypes"
import Icon from '../../ui/Icons/Icon'
import { setActiveTaskId } from '../../store/actionCreators/todoListUIActionsCreator'

export default function TodoPanel() {
  const context = useContext(AppContext)

  const taskLists = useSelector(store => store.data)
  const tasks = useMemo(() => taskLists.map(list => list.todos).flat(Infinity), [taskLists])
  
  const activeTaskId = useSelector(store => store.todoListUI.activeTaskId)
  const activeTask = useMemo(() => tasks.find(task => task.id === activeTaskId), [tasks, activeTaskId])
  const unsetActiveTask = () => dispatch(setActiveTaskId({ id: null }))

  const dispatch = useDispatch()
  const onSetCompleted = () => dispatch(setCompleted({ 
    listId: activeTask.listId,
    todoId: activeTask.id
  }))
  const onSetImportant = () => dispatch(setImportant({ 
    listId: activeTask.listId,
    todoId: activeTask.id
  }))

  const isImportant = activeTask.isImportant ? importantIconFilled : importantIconNotFilled

  return (
    <TodoPanelContainer $mode={context.mode}>
      <Container>
        <Container $direction="row" $justifyContent="space-between">
          <SquareIconButton 
            $mode={context.mode}
            onClick={onSetCompleted}
          >
            <Checkbox 
              $mode={context.mode}
              readOnly={true}
              checked={activeTask.isCompleted}
            />
          </SquareIconButton>
          
          <Text $weight="400" $mode={context.mode}>
            {activeTask.title}
          </Text>

          <SquareIconButton 
            $mode={context.mode}
            onClick={onSetImportant}
          >
            <Icon $src={isImportant} $left="calc(50% - 12px)" />
          </SquareIconButton>
        </Container>

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

      <Container $direction="row" $justifyContent="space-between">
        <SquareIconButton 
          $mode={context.mode}
          onClick={unsetActiveTask}
        >
          <Icon $src={isImportant} $left="calc(50% - 12px)" />
        </SquareIconButton>
        Delete
      </Container>
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