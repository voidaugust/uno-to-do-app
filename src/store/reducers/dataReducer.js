import { 
  CREATE_LIST, 
  DELETE_LIST, 
  CHANGE_LIST_TITLE, 
  ADD_TODO_TO_LIST 
} from "../actions/listsDataActions"
import { 
  CHANGE_TODO_TITLE, 
  CHANGE_TODO_NOTE, 
  CHANGE_DUE_DATE, 
  SET_COMPLETED, 
  SET_IMPORTANT, 
  DELETE_TODO 
} from "../actions/todosDataActions"
import dataInitialState from "../initialStates/dataInitialState"

export default function dataReducer(state = dataInitialState, {type, payload}) {
  
  switch (type) {
    case CREATE_LIST: return [ // payload = {title}
      ...state, 
      { 
        title: payload.title, 
        id: crypto.randomUUID(), 
        todos: [] 
      }
    ]

    case DELETE_LIST: return state.filter(list => list.id !== payload.listId) // payload = {listId}
    
    case CHANGE_LIST_TITLE: return state.map(list => { // payload = {listId, listTitle}
      if (list.id === payload.listId) return { ...list, title: payload.listTitle }
      return list
    })

    case ADD_TODO_TO_LIST: return state.map(list => { // payload = {listId, todoTitle}
      if (list.id === payload.listId) return { 
        ...list, todos: [
          ...list.todos, 
          {
            id: crypto.randomUUID(),
            listId: payload.listId,
            title: payload.todoTitle,
            note: null,
            isCompleted: false,
            isImportant: false,
            createdDate: new Date(),
            dueDate: null,
          }
        ] 
      }

      return list
    })

    case CHANGE_TODO_TITLE: return state.map(list => { // payload = {listId, todoId, todoTitle}
      if (list.id === payload.listId) return { 
        ...list, 
        todos: list.todos.map(todo => {
          if (todo.id === payload.todoId) return {
            ...todo, title: payload.todoTitle
          }

          return todo
        })
      }

      return list
    })

    case CHANGE_TODO_NOTE: return state.map(list => { // payload = {listId, todoId, todoNote}
      if (list.id === payload.listId) return { 
        ...list, 
        todos: list.todos.map(todo => {
          if (todo.id === payload.todoId) return {
            ...todo, note: payload.todoNote
          }

          return todo
        })
      }

      return list
    })

    case CHANGE_DUE_DATE: return state.map(list => { // payload = {listId, todoId, dueDate}
      if (list.id === payload.listId) return { 
        ...list, 
        todos: list.todos.map(todo => {
          if (todo.id === payload.todoId) return {
            ...todo, dueDate: payload.dueDate
          }

          return todo
        })
      }
      return list
    })

    case SET_COMPLETED: return state.map(list => { // payload = {listId, todoId}
      if (list.id === payload.listId) return { 
        ...list, 
        todos: list.todos.map(todo => {
          if (todo.id === payload.todoId) return {
            ...todo, isCompleted: !todo.isCompleted
          }

          return todo
        })
      }

      return list
    })

    case SET_IMPORTANT: return state.map(list => { // payload = {listId, todoId}
      if (list.id === payload.listId) return { 
        ...list, 
        todos: list.todos.map(todo => {
          if (todo.id === payload.todoId) return {
            ...todo, isImportant: !todo.isImportant
          }

          return todo
        })
      }

      return list
    })

    case DELETE_TODO: return state.map(list => { // payload = {listId, todoId}
      if (list.id === payload.listId) return { 
        ...list, 
        todos: list.todos.filter(todo => todo.id !== payload.todoId)
      }
      return list
    })

    default: return state
  }
}