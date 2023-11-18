import { useContext } from 'react'
import AppContext from '../../context/context'
import Container from '../../ui/Containers/Container'
import styled from 'styled-components'

const TAB_TODO = "tab-todo"
const TAB_COMPLETED = "tab-completed"

export default function TaskListTabs({ 
  activeTab, setTodoTabActive, setCompletedTabActive 
}) {
  const context = useContext(AppContext)

  return (
    <Container $alignItems="flex-start">
      <TabContainer $mode={context.mode}>

        <Tab 
          $mode={context.mode} $active={activeTab === TAB_TODO}
          id={TAB_TODO} onClick={setTodoTabActive}
        >
          To Do
        </Tab>

        <Tab 
          $mode={context.mode} $active={activeTab === TAB_COMPLETED}
          id={TAB_COMPLETED} onClick={setCompletedTabActive}
        >
          Completed
        </Tab>

      </TabContainer>
  
    </Container>
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