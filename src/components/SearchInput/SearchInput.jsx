import { forwardRef } from "react"
import Container from "../../ui/Containers/Container"
import Input from "../../ui/Input/Input"
import Icon from "../../ui/Icons/Icon"
import { searchIcon } from "../../ui/Icons/iconTypes"

const SearchInput = forwardRef((props, ref) => {
  return (
    <Container 
      $mode={props.$mode} 
      $position="relative" 
      $marginBlock="0 20px"
    >
      <Icon $src={searchIcon} $left={"16px"} />
      <Input 
        ref={ref} placeholder="Search" $search
        $paddingInline="calc(16px + 24px + 8px) 16px" 
        {...props}
      />
    </Container>
  )
})

export default SearchInput