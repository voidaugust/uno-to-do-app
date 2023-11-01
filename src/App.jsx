// import './App.css'
import { useState } from "react"
import { useSelector } from "react-redux";
import AppContext from "./context/context"
import StartPage from "./components/StartPage/StartPage"
import TodoApp from "./components/TodoApp/TodoApp"

function App() {
  const [isAppLaunched, setIsAppLaunched] = useState(false)

  const context = useSelector(state => {
    return {
      language: state.userPanelUI.language,
      palette: state.userPanelUI.palette,
      mode: state.userPanelUI.mode
    }
  })

  return (
    <>
      { isAppLaunched 
        ? <AppContext.Provider value={context}> <TodoApp /> </AppContext.Provider>
        : <StartPage launchApp={setIsAppLaunched} /> 
      }
    </>
  )
}

export default App