import { useContext } from 'react'
import AppContext from '../../context/context'
import MainWrapper from '../../ui/MainWrapper/MainWrapper'
import Container from '../../ui/Containers/Container'
import Text from '../../ui/Text/Text'
import Heading from '../../ui/Text/Heading'
import TodoAppListPanel from '../TodoAppListPanel/TodoAppListPanel'

export default function TodoApp() {
  const context = useContext(AppContext)

  return (
    <MainWrapper $mode={context.mode}>
      <Container 
        $width="30dvw" $minWidth="280px" 
        $height="100%" $mode={context.mode}
      >
        <TodoAppListPanel />
      </Container>

      <Container 
        $width="70dvw" $height="100%"
        $bgColor={context.mode === "light" 
          ? "var(--light-primary-purple-variant)" 
          : "var(--dark-primary-purple-variant)"
        }
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
}