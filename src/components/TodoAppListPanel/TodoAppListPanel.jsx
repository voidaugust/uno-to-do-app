import { useDispatch, useSelector } from 'react-redux'
import { 
  setActiveListId, 
  setSearchQuery, 
  toggleCreatingList,
  toggleShowingAllTasks, 
  toggleShowingImportant 
} from '../../store/actionCreators/todoListUIActionsCreator'
import { useCallback, useContext, useEffect, useRef } from 'react'
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
  const dispatch = useDispatch()
  const context = useContext(AppContext)

  const searchInputRef = useRef(null)
  const focusHandler = useCallback(() => console.log("focused"), [])
  useEffect(() => {
    const ref = searchInputRef.current
    ref.addEventListener("focus", focusHandler)
    return () => ref.removeEventListener("focus", focusHandler)
  }, [focusHandler])

  const isShowingAllTasks = useSelector(store => store.todoListUI.showingAllTasks)
  const isShowingImportant = useSelector(store => store.todoListUI.showingImportant)

  const setActiveList = (id) => dispatch(setActiveListId({ listId: id }))

  return (
    <ListPanelContainer $mode={context.mode}>
      <ListPanelNav>

        <Container $mode={context.mode}>
          <UserName />
          <SearchInput
            ref={searchInputRef}
            $mode={context.mode}
            onChange={(e) => {
              dispatch(setSearchQuery({ searchQuery: e.target.value }))
            }}
          />

          <Container as="ul" $mode={context.mode} $scrolling>
            <ListItem 
              $mode={context.mode} key={IMPORTANT}
              $listType={IMPORTANT} $active={isShowingImportant}
              onClick={() => dispatch(toggleShowingImportant())}
            />

            <ListItem
              $mode={context.mode} key={ALL_TASKS}
              $listType={ALL_TASKS} $active={isShowingAllTasks}
              onClick={() => dispatch(toggleShowingAllTasks())}
            />
            <Container as="span" $divider $mode={context.mode} />
            <TodoLists setActiveList={setActiveList} />
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