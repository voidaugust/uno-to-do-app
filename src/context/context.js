import { createContext } from "react"

const AppContext = createContext({
  language: "eng",
	palette: "purple",
	mode: "light"
})

export default AppContext