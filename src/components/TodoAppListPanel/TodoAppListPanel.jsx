import { useDispatch, useSelector } from 'react-redux'
import Container from '../../ui/Container/Container'
import Text from '../../ui/Text/Text'
import UserName from '../UserName/UserName'
import SearchInput from '../../ui/SearchInput/SearchInput'
import ListItem from '../../ui/ListItem/ListItem'
import styled from 'styled-components'

export default function TodoAppListPanel() {
  const context = useSelector(state => state.userPanelUI)
  return (
    <PanelContainer $mode={context.mode}>
      <Navigation>

        <UserName />
        <SearchInput placeholder="Search" />

        <ListItem $listType="important" />
        <ListItem $listType="allTasks" />
        <Container $divider $mode={context.mode} />
        <ListItem $listTitle="Task List" />

      </Navigation>
    </PanelContainer>
  )
}

const PanelContainer = styled(Container)`
  justify-content: flex-start;
  padding-block: 40px 20px;
  width: 80%;
  min-width: 240px;
  height: 100%;
  background-color: ${props => props.$mode === "light" ? "white" : "var(--dark-mode-background)"};
`

const Navigation = styled.nav`
  display: flex;
  flex-direction: column;
  width: 100%;
`