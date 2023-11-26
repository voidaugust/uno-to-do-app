import { useContext } from 'react'
import AppContext from '../../context/context'
import { useDispatch, useSelector } from 'react-redux'
import { createPortal } from 'react-dom'
import { 
  ModalBackground, 
  ModalContainer, 
  ModalContent, 
  ModalButtons 
} from '../../ui/ModalElements/ModalElements'
import { toggleShowingUserPanel, toggleIsLogouting, save } from '../../store/actionCreators/userPanelUIActionsCreator'
import Button from '../../ui/Button/Button'
import Heading from '../../ui/Text/Heading'
import Container from '../../ui/Containers/Container'
import UserPic from '../../ui/UserPic/UserPic'
import Text from '../../ui/Text/Text'
import SettingsButton from '../../ui/Button/SettingsButton'

export default function UserSettingsModal() {
  const context = useContext(AppContext)
  const isShowingUserPanel = useSelector(store => store.userPanelUI.isShowingUserPanel)
  const dispatch = useDispatch()

  const onClose = () => dispatch(toggleShowingUserPanel())

  const backgroundOnClose = (e) => {
    e.preventDefault()
    if (e.target === e.currentTarget) onClose()
  }

  const onLogout = () => dispatch(toggleIsLogouting())

  const onSave = () => {
    dispatch(save())
    onClose()
  }

  if (!isShowingUserPanel) return undefined

  return createPortal(
    <ModalBackground onClick={(e) => backgroundOnClose(e)}>
      <ModalContainer 
        $justifyContent="space-between"
        $mode={context.mode}
      >
        <ModalContent $gap="0">

          <Heading $type="h4" $mode={context.mode}>
            Settings
          </Heading>
        
          <SettingsHeader $mode={context.mode} onLogout={onLogout} />

          <Container $alignItems="flex-start">
            <SettingHeading $mode={context.mode}>
              General
            </SettingHeading>
            
            <Container $gap="20px">

              <SettingBlock title="Color palette" $mode={context.mode}>
                <SettingsButton>Purple</SettingsButton>
                <SettingsButton>Blue</SettingsButton>
              </SettingBlock>

              <SettingBlock title="Language" $mode={context.mode}>
                <SettingsButton>English</SettingsButton>
                <SettingsButton>Russian</SettingsButton>
              </SettingBlock>

              <SettingBlock title="Mode" $mode={context.mode}>
                <SettingsButton>Light</SettingsButton>
                <SettingsButton>Dark</SettingsButton>
              </SettingBlock>
            </Container>

            <Container as="span" $divider $mode={context.mode} />

            <SettingHeading $mode={context.mode}>
              About
            </SettingHeading>

            <Container $direction="row" $justifyContent="flex-start">
              <Text $marginInline="0 24px" $mode={context.mode}>
                Version
              </Text>
              <Text $purple $mode={context.mode}>
                1.0
              </Text>
            </Container>

          </Container>
        </ModalContent>

        <ModalButtons>
          <Button onClick={onClose}>Cancel</Button>
          <Button 
            $filled $paddingInline="24px"
            onClick={onSave}
          >
            Save
          </Button>
        </ModalButtons>

      </ModalContainer>
    </ModalBackground>
    , document.getElementById('modal')
  )
}

const SettingsHeader = ({ $mode, onLogout }) => {
  return (
    <Container>
      <UserPic $x2 $marginInline="0" />
      
      <Text 
        $marginBlock="12px 0" $size="22px" 
        $height="28px" $weight="400"
      >
        Pavel Augustine
      </Text>
      <Text 
        $marginBlock="0 12px" $size="14px" $height="20px" 
        $color={$mode === "light" ? "var(--over-light-grey)" : "var(--over-dark-grey)"}
      >
        augustine-test-email@gmail.com
      </Text>
      
      <Button $warning onClick={onLogout}>
        Sign Out
      </Button>
      
      <Container as="span" $divider $mode={$mode} />
    </Container>
  )
}

const SettingHeading = ({ $mode, children }) => {
  return (
    <Heading 
      $type="h5" $purple
      $marginBlock="0 12px"
      $size="14px" $height="20px"
      $fontWeight="500" $mode={$mode}
    >
      {children}
    </Heading>
  )
}

const SettingSubheading = ({ $mode, children }) => {
  return (
    <Heading 
      $type="h6" 
      $size="12px" $height="16px"
      $fontWeight="500" $mode={$mode}
    >
      {children}
    </Heading>
  )
}

const SettingBlock = ({ $mode, title, children }) => {
  return (
    <Container $alignItems="flex-start">
      <SettingSubheading $mode={$mode}>
        {title}
      </SettingSubheading>
      <ModalButtons 
        $justifyContent="flex-start"
        $marginBlock="5px 0"
      >
        {children}
      </ModalButtons>
      { title === "Language"
        ? <Text 
            $secondary $mode={$mode} $size="12px"
            $marginBlock="5px 0"
          >
            Change will be applied at next app restart
          </Text>
        : undefined
      }
    </Container>
  )
}