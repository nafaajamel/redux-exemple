import React from 'react'

import { ListGroup, Row, Col, Button } from 'react-bootstrap'

import { useSelector, useDispatch } from 'react-redux'

import { deleteTodo, selectTodo } from './../redux/actions'
const TodoList = () => {

    const todos = useSelector(({ todos }) => todos)
    const dispatch = useDispatch()

    const removeTodo = (id) => {

        return () => dispatch(deleteTodo(id))
    }

    const selectToUpdate = (id) => {
        return () => dispatch(selectTodo(id))
    }

    return (
        <ListGroup>
            <ListGroup.Item variant='success' ><b>todos</b> </ListGroup.Item>
            {todos.map((todo) => {
                return (
                    <ListGroup.Item key={todo.id}  >
                        <Row>
                            <Col sm={8}>
                                {todo.value}
                            </Col>
                            <Col sm={2}>
                                <Button onClick={selectToUpdate(todo.id)} variant='warning'>edit</Button>
                            </Col>
                            <Col sm={2}>
                                <Button onClick={removeTodo(todo.id)} variant='danger'>delete</Button>
                            </Col>

                        </Row>
                    </ListGroup.Item>
                )

            })}

        </ListGroup>

    )
}
export default TodoList