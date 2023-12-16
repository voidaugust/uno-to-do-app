import { useContext } from 'react'
import AppContext from '../../context/context'
import Container from '../../ui/Containers/Container'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { toggleShowingCompleted } from '../../store/actionCreators/todoListUIActionsCreator'

const TAB_TODO = "tab-todo"
const TAB_COMPLETED = "tab-completed"

export default function TaskListTabs() {
  const context = useContext(AppContext)
  const isShowingCompleted = useSelector(store => store.todoListUI.showingCompleted)
  const searchQuery = useSelector(store => store.todoListUI.searchQuery)
  const isSearchNotActive = searchQuery === ""

  const dispatch = useDispatch()
  const setTodoTabActive = () => dispatch(
    toggleShowingCompleted({ isShowingCompleted: false }
  ))
  const setCompletedTabActive = () => dispatch(
    toggleShowingCompleted({ isShowingCompleted: true }
  ))

  return (
    isSearchNotActive ? ( 
      <Container $alignItems="flex-start">
        <TabContainer $mode={context.mode}>

          <Tab 
            $mode={context.mode} $active={!isShowingCompleted}
            id={TAB_TODO} onClick={setTodoTabActive}
          >
            To Do
          </Tab>

          <Tab 
            $mode={context.mode} $active={isShowingCompleted}
            id={TAB_COMPLETED} onClick={setCompletedTabActive}
          >
            Completed
          </Tab>

        </TabContainer>
      </Container>
    ) : undefined
  )
}

const TabContainer = styled(Container)`
  flex-direction: row;
  width: 360px;
  border-bottom: 1px solid;
  border-color: ${props => props.$mode === "light" ? "var(--light-primary-purple-inverse)" : "var(--dark-primary-purple-inverse)"};
`

const Tab = styled(Container)`
  width: 50%;
  padding-block: 18px 15px;
  font-size: 14px;
  font-weight: 500;
  line-height: 200%;
  color:
    ${props => props.$active 
      ? props => props.$mode === "light" ? "var(--dark-primary-purple-inverse)" : "var(--on-dark-primary-purple)"
      : props => props.$mode === "light" ? "var(--over-light-grey)" : "var(--over-dark-grey-variant)"
    };
  border-bottom: 2px solid;
  border-color: 
    ${props => props.$active 
      ? props => props.$mode === "light" ? "var(--dark-primary-purple-inverse)" : "var(--on-dark-primary-purple)"
      : "transparent"
    };
  cursor: pointer;
`