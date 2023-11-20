import { useCallback, useContext, useEffect } from 'react'
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

export default function UserSettingsModal({ areSettingsOpen, setAreSettingsOpen }) {
  const context = useContext(AppContext)
  const isShowingUserPanel = useSelector(store => store.userPanelUI.isShowingUserPanel)
  const dispatch = useDispatch()

  const onClose = () => {
    dispatch(toggleShowingUserPanel())
    setAreSettingsOpen(false)
  }

  const backgroundOnClose = (e) => {
    e.preventDefault()
    if (e.target === e.currentTarget) onClose()
  }

  const onLogout = () => {console.log("Loging out!")}

  const onSave = () => {
    dispatch(save())
    onClose()
  }

  const openModal = useCallback(() => setAreSettingsOpen(true), [setAreSettingsOpen])
  useEffect(() => {
    isShowingUserPanel && openModal()
  }, [isShowingUserPanel, openModal])

  if (!areSettingsOpen) return undefined

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
            <SettingSubheading $mode={context.mode}>
              Color palette
            </SettingSubheading>

            <Container as="span" $divider $mode={context.mode} />
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