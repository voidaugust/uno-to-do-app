import {
  TOGGLE_CREATING_LIST,
  TOGGLE_RENAMING_LIST,
  TOGGLE_DELETING_LIST,
  TOGGLE_CREATING_TODO,
  TOGGLE_SHOWING_COMPLETED,
  TOGGLE_SHOWING_ALL_TASKS,
  TOGGLE_SHOWING_IMPORTANT,
  SET_ACTIVE_LIST_ID,
  SET_SEARCH_QUERY
} from "../actions/todoListUIActions"
import todoListUIInitialState from "../initialStates/todoListUIInitialState"

export default function todoListUIReducer(
  state = todoListUIInitialState, { type, payload }
) {
  switch (type) {
    case TOGGLE_CREATING_LIST: return { ...state, creatingList: !state.creatingList }
    
    case TOGGLE_RENAMING_LIST: return { ...state, renamingList: !state.renamingList }
    
    case TOGGLE_DELETING_LIST: return { ...state, deletingList: !state.deletingList }
    
    case TOGGLE_CREATING_TODO: return { ...state, creatingTodo: !state.creatingTodo }
    
    case TOGGLE_SHOWING_COMPLETED: return { ...state, showingCompleted: !state.showingCompleted }

    case TOGGLE_SHOWING_ALL_TASKS: return { 
      ...state, 
      showingAllTasks: !state.showingAllTasks,
      showingImportant: false,
      activeListId: null
    }
    
    case TOGGLE_SHOWING_IMPORTANT: return { 
      ...state, 
      showingImportant: !state.showingImportant,
      showingAllTasks: false,
      activeListId: null
    }
    
    case SET_ACTIVE_LIST_ID: return { 
      ...state, 
      showingAllTasks: false,
      showingImportant: false,
      activeListId: payload.listId 
    }
    
    case SET_SEARCH_QUERY: return { ...state, searchQuery: payload.searchQuery }

    default: return state
  }
}