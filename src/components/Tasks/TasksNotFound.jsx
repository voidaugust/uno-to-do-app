import { useContext } from "react"
import Container from "../../ui/Containers/Container"
import Heading from "../../ui/Text/Heading"
import Text from "../../ui/Text/Text"
import AppContext from "../../context/context"

export default function TasksNotFound() {
  const context = useContext(AppContext)
  return (
    <Container 
      $marginBlock="20vh 0" $height="30vh" $gap="10px"
      $radius="20px" $mode={context.mode}
      $bgColor={context.mode === "light" ? "var(--over-dark-surface-grey)" : "var(--over-light-surface-grey)"}
    >
      <Heading $h2 $mode={context.mode}>
        Task not found
      </Heading>

      <Text $secondary $mode={context.mode}>
        {`We searched high and low but couldn't find what you're looking for`}
      </Text>
    </Container>
  )
}