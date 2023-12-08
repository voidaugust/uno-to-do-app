import { useContext, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AppContext from '../../context/context'
import Container from '../../ui/Containers/Container'
import Text from '../../ui/Text/Text'
import { setCompleted, setImportant } from '../../store/actionCreators/dataActionsCreator'
import { setActiveTaskId } from '../../store/actionCreators/todoListUIActionsCreator'
import SquareIconButton from '../../ui/Button/SquareIconButton'
import Icon from '../../ui/Icons/Icon'
import { Checkbox } from '../../ui/TaskItem/TaskItem'
import { arrowRightOnDarkIcon, arrowRightOnLightIcon, deleteOnDarkIcon, deleteOnLightIcon, importantIconFilled, importantIconNotFilled } from "../../ui/Icons/iconTypes"
import styled from 'styled-components'
import { toggleTodoDeletingConfirmation } from '../../store/actionCreators/todoPanelUIActionsCreator'

export default function TodoPanel() {
  const context = useContext(AppContext)
  const dispatch = useDispatch()
  
  const taskLists = useSelector(store => store.data)
  const tasks = useMemo(() => taskLists.map(list => list.todos).flat(Infinity), [taskLists])
  const activeTaskId = useSelector(store => store.todoListUI.activeTaskId)
  const activeTask = useMemo(() => tasks.find(task => task.id === activeTaskId), [tasks, activeTaskId])
  
  const unsetActiveTask = () => dispatch(setActiveTaskId({ id: null }))
  const onSetCompleted = () => dispatch(setCompleted({ 
    listId: activeTask.listId,
    todoId: activeTask.id
  }))
  const onSetImportant = () => dispatch(setImportant({ 
    listId: activeTask.listId,
    todoId: activeTask.id
  }))
  const onDelete = () => dispatch(toggleTodoDeletingConfirmation())

  const createdDate = new Date(activeTask.createdDate)
  const dateOptions = {
    weekday: "short",
    month: "short",
    day: "numeric"
  }
  // const createdDateToShow = createdDate.toLocaleString("en-GB", dateOptions)

  const isImportant = activeTask.isImportant ? importantIconFilled : importantIconNotFilled
  const hidePanelIcon = context.mode === "light" ? arrowRightOnLightIcon : arrowRightOnDarkIcon
  const deleteIcon = context.mode === "light" ? deleteOnLightIcon : deleteOnDarkIcon

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
          <Icon $src={hidePanelIcon} $left="calc(50% - 12px)" />
        </SquareIconButton>

        <Text>
          Created {createdDate.toLocaleString("en-GB", dateOptions)}
        </Text>
        
        <SquareIconButton 
          $mode={context.mode}
          onClick={onDelete}
        >
          <Icon $src={deleteIcon} $left="calc(50% - 12px)" />
        </SquareIconButton>
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