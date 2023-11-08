import { useDispatch, useSelector } from 'react-redux'
import { setActiveListId } from '../../store/actionCreators/todoListUIActionsCreator'
import Container from '../../ui/Containers/Container'
import ListPanelContainer from '../../ui/Containers/ListPanelContainer'
import ListPanelNav from '../../ui/Containers/ListPanelNav'
import UserName from '../UserName/UserName'
import SearchInput from '../../ui/SearchInput/SearchInput'
import ListItem from '../../ui/ListItem/ListItem'
import TodoLists from './TodoLists'
import Button from '../../ui/Button/Button'

export default function TodoAppListPanel() {
  const dispatch = useDispatch()
  const context = useSelector(state => state.userPanelUI)
  const activeListId = useSelector(store => store.todoListUI.activeListId)
  const setActiveList = (id) => dispatch(setActiveListId({ listId: id }))

  const IMPORTANT = "important"
  const ALL_TASKS = "allTasks"

  return (
    <ListPanelContainer $mode={context.mode}>
      <ListPanelNav>

        <Container>
          <UserName />
          <SearchInput />

          <Container $scrolling>
            <ListItem 
              $listType={IMPORTANT} $active={activeListId === IMPORTANT}
              onClick={() => setActiveList(IMPORTANT)}
            />

            <ListItem 
              $listType={ALL_TASKS} $active={activeListId === ALL_TASKS}
              onClick={() => setActiveList(ALL_TASKS)}
            />
            
            <Container $divider $mode={context.mode} />
            <TodoLists setActiveList={setActiveList} />
          </Container>

        </Container>

        <Container>
          <Button $add $newList>New List</Button>
        </Container>

      </ListPanelNav>
    </ListPanelContainer>
  )
}