import { useDispatch, useSelector } from 'react-redux'
import { useContext } from 'react'
import ListItem from '../../ui/ListItem/ListItem'
import AppContext from '../../context/context'
import { setActiveListId } from '../../store/actionCreators/todoListUIActionsCreator'

export default function TodoLists() {
  const context = useContext(AppContext)
  const todoLists = useSelector(state => state.data)
  const activeListId = useSelector(store => store.todoListUI.activeListId)
  
  const dispatch = useDispatch()
  const setActiveList = (id) => dispatch(setActiveListId({ listId: id }))

  return (
    <>
      {
        todoLists.map(list => (
          <ListItem 
            key={list.id}
            id={list.id}
            $mode={context.mode}
            $listTitle={list.title}
            $active={list.id === activeListId}
            onClick={() => setActiveList(list.id)}
          />
        ))
      }
    </>
  )
}