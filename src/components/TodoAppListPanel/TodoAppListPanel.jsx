import { useDispatch, useSelector } from 'react-redux'
import { 
  toggleCreatingList,
  toggleShowingAllTasks, 
  toggleShowingImportant 
} from '../../store/actionCreators/todoListUIActionsCreator'
import { useContext } from 'react'
import AppContext from '../../context/context'
import Container from '../../ui/Containers/Container'
import ListPanelContainer from '../../ui/Containers/ListPanelContainer'
import ListPanelNav from '../../ui/Containers/ListPanelNav'
import UserName from '../UserName/UserName'
import SearchInput from '../SearchInput/SearchInput'
import ListItem from '../../ui/ListItem/ListItem'
import TodoLists from './TodoLists'
import Button from '../../ui/Button/Button'

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
              onClick={() => dispatch(toggleShowingImportant())}
            />

            <ListItem
              key={ALL_TASKS} $listType={ALL_TASKS} 
              $mode={context.mode} $active={isShowingAllTasks}
              onClick={() => dispatch(toggleShowingAllTasks())}
            />

            <Container as="span" $divider $mode={context.mode} />
            
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