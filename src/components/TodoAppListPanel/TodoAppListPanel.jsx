import { useDispatch, useSelector } from 'react-redux'
import Container from '../../ui/Container/Container'
import Text from '../../ui/Text/Text'
import UserName from '../UserName/UserName'
import SearchInput from '../../ui/SearchInput/SearchInput'
import styled from 'styled-components'

export default function TodoAppListPanel() {
  const context = useSelector(state => state.userPanelUI)
  return (
    <PanelContainer $mode={context.mode}>
      <UserName />
      <SearchInput placeholder="Search" />
      <Text $align="left" $width="100%">Todo</Text>
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