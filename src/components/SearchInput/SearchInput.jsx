import { useCallback, useContext, useEffect, useRef } from "react"
import Container from "../../ui/Containers/Container"
import Input from "../../ui/Input/Input"
import Icon from "../../ui/Icons/Icon"
import { searchIcon } from "../../ui/Icons/iconTypes"
import { useDispatch } from "react-redux"
import AppContext from "../../context/context"
import { setSearchQuery } from "../../store/actionCreators/todoListUIActionsCreator"

export default function SearchInput() {
  const context = useContext(AppContext)
  const dispatch = useDispatch()
  const searchInputRef = useRef(null)

  const focusHandler = useCallback(() => console.log("focused"), [])
  useEffect(() => {
    const ref = searchInputRef.current
    ref.addEventListener("focus", focusHandler)
    return () => ref.removeEventListener("focus", focusHandler)
  }, [focusHandler])

  return (
    <Container 
      $mode={context.mode} 
      $position="relative" 
      $marginBlock="0 20px"
    >
      <Icon $src={searchIcon} $left={"16px"} />
      <Input 
        ref={searchInputRef} $mode={context.mode}
        
        placeholder="Search" $search
        $paddingInline="calc(16px + 24px + 8px) 16px"

        onChange={(e) => {
          dispatch(setSearchQuery({ searchQuery: e.target.value }))
        }}
      />
    </Container>
  )
}