import { useContext, useState } from "react"
import Container from "../ui/Container"
import Input from "../ui/Input"
import Icon from "../ui/Icons/Icon"
import { searchIcon } from "../ui/Icons/iconTypes"
import { useDispatch, useSelector } from "react-redux"
import AppContext from "../context/context"
import { setSearchQuery } from "../store/actionCreators/todoListUIActionsCreator"
import { cancelIconOnLight, cancelIconOnDark } from "../ui/Icons/iconTypes"
import SquareIconButton from "../ui/Buttons/SquareIconButton"

export default function SearchInput() {
  const context = useContext(AppContext)
  const searchQuery = useSelector(store => store.todoListUI.searchQuery)
  const dispatch = useDispatch()
  const [isSearchFocused, setSearchFocus] = useState(false) 

  const cancelSearch = () => {
    dispatch(setSearchQuery({ searchQuery: "" }))
    setSearchFocus(false)
  }

  const cancelIcon = context.mode === "light" ? cancelIconOnLight : cancelIconOnDark

  return (
    <Container 
      $mode={context.mode} 
      $position="relative" 
      $marginBlock="0 20px"
    >
      <Icon $src={searchIcon} $left={"16px"} />

      <Input 
        $mode={context.mode}
        placeholder="Search" value={searchQuery}
        $search $activeInput={isSearchFocused}
        onChange={(e) => {
          dispatch(setSearchQuery({ searchQuery: e.target.value }))
        }}
        onFocus={() => setSearchFocus(true)}
        onBlur={cancelSearch}
      />
      
      {
        isSearchFocused
          ? <SquareIconButton 
              $mode={context.mode} $inline
              onClick={cancelSearch}
            >
              <Icon $src={cancelIcon} $left="calc(50% - 12px)" />
            </SquareIconButton>
          : undefined
      }
    </Container>
  )
}