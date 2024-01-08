import { useCallback, useContext, useEffect, useRef } from "react"
import AppContext from "../../context/context"
import Container from "../../ui/Containers/Container"
import Input from "../../ui/Input/Input"
// import Text from "../../ui/Text/Text"
// import { useSelector } from "react-redux"

export default function TodoNoteBlock({ activeTask }) {
  const context = useContext(AppContext)
  const todoNoteRef = useRef(activeTask.note || null)

  const focusHandler = useCallback(() => console.log(todoNoteRef.current.value), [])
  useEffect(() => {
    const ref = todoNoteRef.current
    ref.addEventListener("focus", focusHandler)
    return () => ref.removeEventListener("focus", focusHandler)
  }, [focusHandler])

  return (
    <Container 
      $direction="row" 
      $justifyContent="start"
      // $marginBlock="10px"
      $width="100%"
      $cursor="pointer"
    >
      <Input 
        ref={todoNoteRef} $mode={context.mode} $note
        placeholder="Add Note" value={activeTask.note ? activeTask.note : ''}
        // $paddingInline="calc(16px + 24px + 8px) 16px"
        // onChange={(e) => {
        //   dispatch(setSearchQuery({ searchQuery: e.target.value }))
        // }}
      />
    </Container>
  )
}