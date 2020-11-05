import { ACTION_TYPES } from './../action-type'
import * as actions from './../actions'
import { todoReducer } from './../reducer'

const initialState = {
    todos: [],
    selectedTodo: ''
}

describe('testing reducers', () => {

    it('should handle add  todo', () => {
        const todoToAdd = 'first todo'
        const expectedState = { selectedTodo: '', todos: [{ value: todoToAdd, id: 1, done: false }] }
        expect(todoReducer(initialState, actions.addTodo(todoToAdd))).toEqual(expectedState)

    })

    it('should handle add  2nd todo', () => {
        const state = todoReducer(initialState, actions.addTodo('firt todo'))
        const todoToAdd = '2nd todo'
        const expectedState = { selectedTodo: '', todos: [...state.todos, { value: todoToAdd, id: 2, done: false }] }
        expect(todoReducer(state, actions.addTodo(todoToAdd))).toEqual(expectedState)
    })

    it('should delete todo by id', () => {
        let state = todoReducer(initialState, actions.addTodo('firt todo'))
        state = todoReducer(state, actions.addTodo('2nd todo'))
        const id = 1
        const expectedState = { selectedTodo: '', todos: [{ value: '2nd todo', id: 2, done: false }] }
        expect(todoReducer(state, actions.deleteTodo(id))).toEqual(expectedState)

    })


    it('should update todo', () => {
        let state = todoReducer({ selectedTodo: "1", todos: [] }, actions.addTodo('firt todo'))
        state = todoReducer(state, actions.addTodo('2nd todo'))
        const todoToUpdate = { id: 1, value: 'first todo updated', done: true }
        const expectedState = { selectedTodo: '', todos: [todoToUpdate, { value: "2nd todo", id: 2, done: false }] }


        expect(todoReducer(state, actions.editTodo(todoToUpdate))).toEqual(expectedState)


    })





})