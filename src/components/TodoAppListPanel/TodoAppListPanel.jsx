import { useDispatch, useSelector } from 'react-redux'
import { setActiveListId, setSearchQuery } from '../../store/actionCreators/todoListUIActionsCreator'
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

  const activeListId = useSelector(store => store.todoListUI.activeListId)
  const setActiveList = (id) => dispatch(setActiveListId({ listId: id }))

  const IMPORTANT = "important"
  const ALL_TASKS = "allTasks"

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

          <Container $mode={context.mode} $scrolling>
            <ul style={{ width: "100%" }}>
            <ListItem 
              $mode={context.mode} key={IMPORTANT}
              $listType={IMPORTANT} $active={activeListId === IMPORTANT}
              onClick={() => setActiveList(IMPORTANT)}
            />

            <ListItem
              $mode={context.mode} key={ALL_TASKS}
              $listType={ALL_TASKS} $active={activeListId === ALL_TASKS}
              onClick={() => setActiveList(ALL_TASKS)}
            />
            </ul>
            <Container $divider $mode={context.mode} />
            <TodoLists setActiveList={setActiveList} />
          </Container>

        </Container>

        <Container $mode={context.mode}>
          <Button $add $newList>New List</Button>
        </Container>

      </ListPanelNav>
    </ListPanelContainer>
  )
}