import styled, { css } from "styled-components"
import Icon from "../Icons/Icon"
import Text from "../Text/Text"
import { 
  importantIconFilled, allTasksIcon, listIcon, 
  arrowRightOnLightIcon, arrowRightOnDarkIcon 
} from "../Icons/iconTypes"

export default function ListItem(props) {
  let listType
  let listTitle

  switch (props.$listType) {
    case "important": 
      listType = importantIconFilled
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
    <StyledListItem {...props}>
      <Icon $src={listType} $left={"8px"} />

      <Text 
        $paddingBlock="4px" $paddingInline="48px 8px"
        $align="left"
      > 
        {listTitle}
      </Text>

      <Icon 
        $src={props.$mode === "light" ? arrowRightOnLightIcon : arrowRightOnDarkIcon} 
        $left={"calc(100% - 24px - 8px)"}
      />
    </StyledListItem>
  )
}

const StyledListItem = styled.li`
  display: flex;
  position: relative;
  justify-content: flex-start;
  align-items: center;
  margin-block: ${props => props.$listType === "important" ? "0 5px" : "5px"};
  padding-block: 6px;
  width: 100%;
  list-style-type: none;
  cursor: pointer;

  ${props => props.$active && css`
    background-color: ${props => props.$mode === "light" ? "var(--light-primary-purple)" : "var(--primary-purple)"};
  `}

  &:hover {
    background-color: ${props => props.$mode === "light" ? "var(--light-grey)" : "var(--dark-grey)"};
  }
`