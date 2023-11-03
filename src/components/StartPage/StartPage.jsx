import { useSelector } from 'react-redux'
import Button from '../../ui/Button/Button'
import Image from '../../ui/Image/Image'
import Container from '../../ui/Container/Container'
import unoLogo from '../../imgs/uno-logo.svg'
import welcomeImage from '../../imgs/welcome.svg'
import Text from '../../ui/Text/Text'
import Heading from '../../ui/Text/Heading'

export default function StartPage({ launchApp }) {
  const context = useSelector(state => state.userPanelUI)

  return (
    <Container 
      $direction="row" 
      $height="100dvh"
      $bgColor={context.mode === "light" ? "var(--light-primary-purple)" : "var(--dark-mode-background)"}
    >
      <Container 
        $width="450px" 
        $height="100%"
        $paddingBlock="20px"
        $paddingInline="60px"
      >
        <Container $alignItems="start">
          <Image 
            width="103px"
            src={unoLogo} 
          />
        </Container>

        <Container $marginBlock="100px">
          <Heading 
            $type="h1"
            $marginBlock="0 var(--default-font-size)"
          >
            Welcome to Uno To Do!
          </Heading>
          
          <Text $color="var(--primary-purple)">
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

      <Container
        $height="100%"
        $paddingBlock="20px"
        $bgColor={context.mode === "light" ? "var(--light-primary-purple)" : "var(--dark-mode-start-page-background)"}
      >
        <Image src={welcomeImage} />
      </Container>

    </Container>
  )
}