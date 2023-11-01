import { applyMiddleware, combineReducers, legacy_createStore as createStore  } from "redux"
import dataReducer from "./reducers/dataReducer"
import todoListUIReducer from "./reducers/todoListUIReducer"
import todoPanelUIReducer from "./reducers/todoPanelUIReducer"
import userPanelUIReducer from "./reducers/userPanelUIReducer"
import thunk from "redux-thunk"
import logger from "redux-logger"

const reducer = combineReducers({
  data: dataReducer,
  todoListUI: todoListUIReducer,
  todoPanelUI: todoPanelUIReducer,
  userPanelUI: userPanelUIReducer,
})

const store = createStore(reducer, applyMiddleware(thunk, logger))

export default store