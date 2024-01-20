import { useDispatch } from 'react-redux'
import { useContext } from 'react'
import { toggleCreatingList } from '../../store/actionCreators/todoListUIActionsCreator'
import AppContext from '../../context/context'
import Container from '../../ui/Container'
import UserName from '../UserName'
import SearchInput from '../SearchInput'
import TodoLists from './TodoLists'
import Button from '../../ui/Buttons/Button'
import styled from 'styled-components'
import ImportantAndAllTasksSelectors from './ImportantAndAllTasksSelectors'

export default function TodoAppListPanel() {
  const context = useContext(AppContext)
  const dispatch = useDispatch()

  return (
    <ListPanelContainer $mode={context.mode}>
      <ListPanelNav>

        <Container $mode={context.mode}>
          <UserName />
          <SearchInput />

          <Container 
            as="ul" $mode={context.mode} $justifyContent="flex-start"
            $maxHeight="65vh" $scrolling
          >
            <ImportantAndAllTasksSelectors />
            <Divider />
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

const ListPanelContainer = (props) => {
  return <StyledListPanelContainer {...props} />
}

const StyledListPanelContainer = styled(Container)`
  justify-content: flex-start;
  padding-block: 40px 20px;
  width: 80%;
  min-width: 240px;
  height: 100%;
  background-color: ${props => props.$mode === "light" ? "white" : "var(--dark-mode-background)"};
`

const ListPanelNav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`

const Divider = () => {
  const context = useContext(AppContext)
  return <Container as="span" $divider $mode={context.mode} />
}