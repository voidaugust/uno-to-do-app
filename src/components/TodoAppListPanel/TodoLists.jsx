import { useSelector } from 'react-redux'
import { useContext } from 'react'
import ListItem from '../../ui/ListItem/ListItem'
import AppContext from '../../context/context'

export default function TodoLists({ setActiveList }) {
  const todoLists = useSelector(state => state.data)
  const activeListId = useSelector(store => store.todoListUI.activeListId)
  const context = useContext(AppContext)

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