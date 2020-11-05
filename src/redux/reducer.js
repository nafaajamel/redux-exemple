import { ACTION_TYPES } from './action-type'


export const initialState = {
  todos: [],
  selectedTodo: ''
}

export const todoReducer = (state = initialState, action) => {

  switch (action.type) {

    case ACTION_TYPES.ADD_TODO:

      return {
        selectedTodo: state.selectedTodo,
        todos: [...state.todos,
        {
          value: action.newTodo,
          done: false,
          id: state.todos.length + 1
        }]
      }

    case ACTION_TYPES.EDIT_TODO:

      return {
        selectedTodo: '',
        todos: state.todos.map(todo => {
          return todo.id == action.updatedTodo.id ? { ...action.updatedTodo } : todo
        })
      }

    case ACTION_TYPES.DELETE_TODO:

      return {
        selectedTodo: action.idTodo == state.selectedTodo ? '' : state.selectedTodo,
        todos: state.todos.filter((todo) => {

          return todo.id != action.idTodo

        })
      }
    case ACTION_TYPES.SELECT:
      return {
        ...state,
        selectedTodo: action.selectedId,
      }

    default:
      return state

  }
}