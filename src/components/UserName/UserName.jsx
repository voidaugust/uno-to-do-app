import { useContext } from 'react'
import AppContext from '../../context/context'
import Container from '../../ui/Containers/Container'
import UserPic from '../../ui/UserPic/UserPic'
import Text from '../../ui/Text/Text'
import { useDispatch } from 'react-redux'
import { toggleShowingUserPanel } from '../../store/actionCreators/userPanelUIActionsCreator'

export default function UserName() {
  const context = useContext(AppContext)
  const dispatch = useDispatch()

  return (
    <Container
      $mode={context.mode}
      $direction="row"
      $justifyContent="flex-start"
      $marginBlock="0 20px"
      $height="36px"
      $cursor="pointer"
      onClick={() => dispatch(toggleShowingUserPanel())}
    >
      <UserPic $textColor={context.mode === "light" ? "white" : "black"} />

      <Container
        $mode={context.mode} 
        $width="max-content" 
        $alignItems="flex-start" 
        $cursor="pointer"
      >
        <Text $size="14px" $height="20px" $mode={context.mode}>
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