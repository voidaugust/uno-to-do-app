import { useContext } from "react"
// import { useSelector } from "react-redux"
import Container from "../../ui/Container"
import Heading from "../../ui/Text/Heading"
import Text from "../../ui/Text/Text"
import AppContext from "../../context/context"

export default function NoTasks({ heading, text }) {
  const context = useContext(AppContext)
  // const isShowingImportant = useSelector(store => store.todoListUI.showingImportant)

  return (
    <Container 
      $marginBlock="20vh 0" $height="30vh" $gap="10px"
      $radius="20px" $mode={context.mode}
      $bgColor={context.mode === "light" ? "var(--over-dark-surface-grey)" : "var(--over-light-surface-grey)"}
    >
      <Heading $h2 $mode={context.mode}>
        {heading}
      </Heading>

      <Text $mode={context.mode} $secondary>
        {text}
      </Text>
    </Container>
  )
}