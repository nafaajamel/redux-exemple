import React from 'react'
import TodoList from './todoL-lst'
import InputForm from './form'
import { Container, Row, Col } from 'react-bootstrap'
const Wrapper = () => {
    return (
        <Container>
            <Row style={{ margin: '50px' }}>
                <Col>
                    <InputForm />
                </Col>
            </Row>
            <Row>

                <Col>
                    <TodoList />
                </Col>
            </Row>
        </Container>
    )


}

export default Wrapper