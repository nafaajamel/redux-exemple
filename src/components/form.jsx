import React, { useState, useEffect } from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'

import { addTodo, editTodo, selectTodo } from './../redux/actions'


const initialTodo = { value: '', id: '', done: false }
const InputForm = () => {

    const dispatch = useDispatch()


    const selectedTodo = useSelector((state) => {
        return state.todos.find(td => td.id === state.selectedTodo)
    })



    const [todo, setTodo] = useState({ ...initialTodo })

    const handleChange = (e) => {
        setTodo({ ...todo, value: e.target.value })
    }
    const sendTodoToStore = () => {
        if (selectedTodo) {
            dispatch(editTodo({ ...todo }))
            dispatch(selectTodo(''))
        } else {
            dispatch(addTodo(todo.value))
        }

        setTodo({ ...initialTodo })

    }

    useEffect(() => {
        setTodo({ ...selectedTodo })
    }, [selectedTodo && selectedTodo.id])


    return (
        <Form>
            <Form.Group as={Row}>
                <Col sm={8}>
                    <Form.Control onChange={handleChange} value={todo.value} type="text" placeholder="Enter Todo" />
                </Col>
                <Button onClick={sendTodoToStore} column sm={4} variant='primary'>{selectedTodo ? "update" : 'add'}</Button>
            </Form.Group>
        </Form>
    )

}

export default InputForm