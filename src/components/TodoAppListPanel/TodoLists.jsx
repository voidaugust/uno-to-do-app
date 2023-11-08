import { useSelector } from 'react-redux'
import ListItem from '../../ui/ListItem/ListItem'

export default function TodoLists({ setActiveList }) {
  const todoLists = useSelector(state => state.data)
  const activeListId = useSelector(store => store.todoListUI.activeListId)
  return (
    <>
      {
        todoLists.map(list => (
          <ListItem 
            key={list.id}
            id={list.id}
            $listTitle={list.title}
            $active={list.id === activeListId}
            onClick={() => setActiveList(list.id)}
          />
        ))
      }
    </>
  )
}