import { useDispatch, useSelector } from 'react-redux'
import { useContext } from 'react'
import { toggleCreatingList } from '../../store/actionCreators/todoListUIActionsCreator'
import { showAllTasks, showImportantTasks } from '../../store/actionCreators/thunks'
import AppContext from '../../context/context'
import Container from '../../ui/Containers/Container'
import UserName from '../UserName/UserName'
import SearchInput from '../SearchInput/SearchInput'
import ListItem from '../../ui/ListItem/ListItem'
import TodoLists from './TodoLists'
import Button from '../../ui/Button/Button'
import styled from 'styled-components'

const IMPORTANT = "important"
const ALL_TASKS = "allTasks"

export default function TodoAppListPanel() {
  const context = useContext(AppContext)
  const isShowingAllTasks = useSelector(store => store.todoListUI.showingAllTasks)
  const isShowingImportant = useSelector(store => store.todoListUI.showingImportant)
  const dispatch = useDispatch()

  return (
    <ListPanelContainer $mode={context.mode}>
      <ListPanelNav>

        <Container $mode={context.mode}>
          <UserName />
          <SearchInput />

          <Container as="ul" $mode={context.mode} $scrolling>
            <ListItem 
              key={IMPORTANT} $listType={IMPORTANT} 
              $mode={context.mode} $active={isShowingImportant}
              onClick={() => dispatch(showImportantTasks())}
            />

            <ListItem
              key={ALL_TASKS} $listType={ALL_TASKS} 
              $mode={context.mode} $active={isShowingAllTasks}
              onClick={() => dispatch(showAllTasks())}
            />

            <Divider />
            
            <TodoLists />
          </Container>

        </Container>

        <Container $mode={context.mode}>
          <Button 
            $rectangle $alignLeft $add $newList 
            $width="100%" $mode={context.mode}
            onClick={() => dispatch(toggleCreatingList())}
          >
            New List
          </Button>
        </Container>

      </ListPanelNav>
    </ListPanelContainer>
  )
}

const Divider = () => {
  const context = useContext(AppContext)
  return <Container as="span" $divider $mode={context.mode} />
}

const ListPanelContainer = (props) => {
  return <StyledListPanelContainer {...props} />
}

const StyledListPanelContainer = styled(Container)`
  justify-content: flex-start;
  padding-block: 40px 20px;
  width: 80%;
  min-width: 240px;
  height: 100%;
  background-color: ${props => props.$mode === "light" ? "white" : "var(--dark-mode-background)"};
`

const ListPanelNav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`