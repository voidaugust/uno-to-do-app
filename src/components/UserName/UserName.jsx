import { useContext } from 'react'
import AppContext from '../../context/context'
import Container from '../../ui/Containers/Container'
import UserPic from '../../ui/UserPic/UserPic'
import Text from '../../ui/Text/Text'

export default function UserName() {
  const context = useContext(AppContext)

  return (
    <Container
      $mode={context.mode}
      $direction="row"
      $justifyContent="flex-start"
      $marginBlock="0 20px"
      $height="36px"
      $cursor="pointer"
    >
      <UserPic />

      <Container
        $mode={context.mode} 
        $width="max-content" 
        $alignItems="flex-start" 
        $cursor="pointer"
      >
        <Text $size="14px" $height="20px">
          Pavel Augustine
        </Text>
        <Text 
          $size="12px" $height="16px" 
          $color={context.mode === "light" ? "var(--over-light-grey)" : "var(--over-dark-grey)"}
        >
          augustine-test-email@gmail.com
        </Text>
      </Container>

    </Container>
  )
}