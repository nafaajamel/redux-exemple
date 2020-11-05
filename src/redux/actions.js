import {ACTION_TYPES} from './action-type'

export const  addTodo = (newTodo)=>{

    return {
        type:ACTION_TYPES.ADD_TODO,
        newTodo

    }

}
export const  editTodo = (updatedTodo)=>{

    return {
        type:ACTION_TYPES.EDIT_TODO,
        updatedTodo
    }

}
export const  deleteTodo = (id)=>{

    return {
        type:ACTION_TYPES.DELETE_TODO,
        idTodo:id
    }

}

export const selectTodo = (id)=>{
    return {
        type:ACTION_TYPES.SELECT,
    selectedId:id
    }
}