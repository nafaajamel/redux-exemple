import { ACTION_TYPES } from './../action-type'
import * as actions from './../actions'



describe('testing actions', () => {

    it('should return add todo action', () => {

        const newTodo = { value: 'jamel', done: false, id: null }
        const expectedResult = { type: ACTION_TYPES.ADD_TODO, newTodo }
        expect(actions.addTodo(newTodo)).toEqual(expectedResult)

    })
    it('should return edit todo action', () => {

        const updatedTodo = { value: 'jamel', done: false, id: 1 }
        const expectedResult = { type: ACTION_TYPES.EDIT_TODO, updatedTodo }
        expect(actions.editTodo(updatedTodo)).toEqual({ ...expectedResult })

    })
    it('should return delete todo action', () => {

        const idTodo = 1
        const expectedResult = { type: ACTION_TYPES.DELETE_TODO, idTodo }
        expect(actions.deleteTodo(idTodo)).toEqual({ ...expectedResult })

    })
    it('should return select todo action', () => {

        const selectedId = 1
        const expectedResult = { type: ACTION_TYPES.SELECT, selectedId }
        expect(actions.selectTodo(selectedId)).toEqual({ ...expectedResult })

    })


})