import { useSelector } from 'react-redux'
import Button from '../../ui/Button/Button'
import Image from '../../ui/Image/Image'
import Container from '../../ui/Container/Container'
import MainWrapper from '../../ui/MainWrapper/MainWrapper'
import unoLogo from '../../imgs/uno-logo.svg'
import unoLogoDarkMode from '../../imgs/uno-logo-dark-mode.svg'
import welcomeImage from '../../imgs/welcome.svg'
import Text from '../../ui/Text/Text'
import Heading from '../../ui/Text/Heading'

export default function StartPage({ launchApp }) {
  const context = useSelector(state => state.userPanelUI)

  return (
    <MainWrapper>
      <Container
        $mobileCenter
        $alignItems="flex-end"
        $width="42vw" 
        $height="100%"
        $bgColor={context.mode === "light" ? "white" : "var(--dark-mode-background)"}
      >
        <Container 
          $maxWidth="450px"
          $paddingBlock="20px"
          $paddingInline="60px"
        >
          <Container $alignItems="flex-start">
            <Image 
              width="103px"
              src={context.mode === "light" ? unoLogo :unoLogoDarkMode} 
            />
          </Container>

          <Container $marginBlock="100px">
            <Heading 
              $type="h1"
              $marginBlock="0 var(--default-font-size)"
            >
              Welcome to Uno To Do!
            </Heading>
            
            <Text 
              $color={context.mode === "light" ? "var(--primary-purple)" : "var(--secondary-purple)"}
            >
              Start using the best to-do app, you can create and manage your To Do lists to improve your organization.
            </Text>
          </Container>

          <Button 
            $filled
            $width="330px" 
            onClick={launchApp}
          >
            Get started
          </Button>

        </Container>
      </Container>

      <Container 
        $mobileHide
        $height="100%"
        $bgColor={context.mode === "light" ? "var(--light-primary-purple)" : "var(--dark-mode-start-page-background)"}
      >
        <Container
          $paddingBlock="20px"
          $paddingInline="70px"
          $height="100%"
          $bgColor={context.mode === "light" ? "var(--light-primary-purple)" : "var(--dark-mode-start-page-background)"}
        >
          <Image src={welcomeImage} />
        </Container>
      </Container>
    </MainWrapper>
  )
}