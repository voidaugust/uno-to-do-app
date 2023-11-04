import { useState, useTransition } from "react"
import { useSelector } from "react-redux";
import AppContext from "./context/context"
import StartPage from "./components/StartPage/StartPage"
import TodoApp from "./components/TodoApp/TodoApp"

function App() {
  const [isAppLaunched, setIsAppLaunched] = useState(false)

  const [isPending, startTransition] = useTransition()
  const launchApp = () => startTransition(() => setIsAppLaunched(true))

  const contextSelector = useSelector(state => state.userPanelUI) 
  const context = {
    language: contextSelector.language,
    palette: contextSelector.palette,
    mode: contextSelector.mode
  }

  return (
    <>
      { isAppLaunched 
        ? <AppContext.Provider value={context}> <TodoApp isPending={isPending} /> </AppContext.Provider>
        : <StartPage launchApp={launchApp} /> 
      }
    </>
  )
}

export default App