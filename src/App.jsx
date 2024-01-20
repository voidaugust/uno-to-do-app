import { useState } from "react"
import { useSelector } from "react-redux"
import AppContext from "./context/context"
import StartPage from "./components/StartPage"
import TodoApp from "./components/TodoApp"

export default function App() {
  const [isAppLaunched, setIsAppLaunched] = useState(false)
  const initialContext = useSelector(state => state.userPanelUI) 
  const context = {
    language: initialContext.language,
    palette: initialContext.palette,
    mode: initialContext.mode
  }

  return (
    <AppContext.Provider value={context}>
      { isAppLaunched 
        ? <TodoApp /> 
        : <StartPage launchApp={() => setIsAppLaunched(true)} /> 
      }
    </AppContext.Provider>
  )
}