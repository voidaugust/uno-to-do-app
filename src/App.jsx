// import './App.css'
import { useState } from "react"
import { Provider } from "react-redux";
import StartPage from "./components/StartPage/StartPage"
import TodoApp from "./components/TodoApp/TodoApp"
// import store from "./store/store";

function App() {
  const [isAppLaunched, setIsAppLaunched] = useState(false);

  return (
    <>
      <h1>uno to do app</h1>

      {/* { isAppLaunched 
        ? (
          <Provider store={store}>
            <TodoApp />
          </Provider> 
        )
          
        : <StartPage /> 
      } */}
    </>
  )
}

export default App