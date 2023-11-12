import { useSelector } from 'react-redux'
import Transition from '../../ui/Transition/Transition'
import MainWrapper from '../../ui/MainWrapper/MainWrapper'
import Container from '../../ui/Containers/Container'
import Text from '../../ui/Text/Text'
import Heading from '../../ui/Text/Heading'
import TodoAppListPanel from '../TodoAppListPanel/TodoAppListPanel'
import { useContext } from 'react'
import AppContext from '../../context/context'

export default function TodoApp({ isPending }) {
  // const context = useSelector(state => state.userPanelUI) // replace with useContext everywhere
  const context = useContext(AppContext)

  return (
    isPending ? (
      <Transition />
    ) : (
      <MainWrapper>
        <Container $width="30dvw" $minWidth="280px" $height="100%">
          <TodoAppListPanel />
        </Container>

        <Container 
          $width="70dvw" $height="100%"
          $bgColor={context.mode === "light" ? "var(--light-primary-purple-variant)" : "var(--dark-primary-purple-variant)"}
        >
          <Heading $type="h1">
            more text
          </Heading>
          <Text>
            more blabla
          </Text>
        </Container>

      </MainWrapper>
    )
  )
}