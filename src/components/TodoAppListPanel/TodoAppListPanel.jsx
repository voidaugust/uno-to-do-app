import { useDispatch, useSelector } from 'react-redux'
import Container from '../../ui/Containers/Container'
import ListPanelContainer from '../../ui/Containers/ListPanelContainer'
import ListPanelNav from '../../ui/Containers/ListPanelNav'
import UserName from '../UserName/UserName'
import SearchInput from '../../ui/SearchInput/SearchInput'
import ListItem from '../../ui/ListItem/ListItem'

export default function TodoAppListPanel() {
  const context = useSelector(state => state.userPanelUI)
  return (
    <ListPanelContainer $mode={context.mode}>
      <ListPanelNav>

        <UserName />
        <SearchInput placeholder="Search" />

        <ListItem $listType="important" />
        <ListItem $listType="allTasks" />
        <Container $divider $mode={context.mode} />
        <ListItem $listTitle="Task List" />

      </ListPanelNav>
    </ListPanelContainer>
  )
}