import { useSelector } from "react-redux"
import styled from "styled-components"
import Container from "../Container/Container"
import Icon from "../Icons/Icon"
import Text from "../Text/Text"
import { 
  importantIcon, allTasksIcon, listIcon, 
  arrowRightOnLightIcon, arrowRightOnDarkIcon 
} from "../Icons/iconTypes"

export default function ListItem(props) {
  const context = useSelector(state => state.userPanelUI)
  const preparedProps = {
    ...props, 
    $mode: context.mode
  }

  let listType
  let listTitle

  switch (props.$listType) {
    case "important": 
      listType = importantIcon
      listTitle = "Important"
      break
    case "allTasks": 
      listType = allTasksIcon
      listTitle = "Tasks"
      break
    default: 
      listType = listIcon
      listTitle = props.$listTitle
      break
  }

  return (
    <Container $position="relative">
      <StyledListItem {...preparedProps}>
        <Icon $src={listType} $left={"8px"} />

        <Text 
          $paddingBlock="4px" $paddingInline="48px 8px"
          $align="left"
        > 
          {listTitle}
        </Text>

        <Icon 
          $src={context.mode === "light" ? arrowRightOnLightIcon : arrowRightOnDarkIcon} 
          $left={"calc(100% - 24px - 8px)"} 
        />
      </StyledListItem>
    </Container>
  )
}

const StyledListItem = styled(Container)`
  align-items: flex-start;
  margin-block: ${props => props.$listType === "important" ? "0 5px" : "5px"};
  padding-block: 6px;
  cursor: pointer;
`