import React, { useEffect, useState } from 'react';
import '../../../style-sheets/fun-apps.css';
import { Container, Col, Row, Form, Button } from 'react-bootstrap';
import DailyAgendaService from '../../../services/daily-agenda-service';

const DSAAgendaApp = () => {
    const [todos, setTodos] = useState([]);


    const retrieveAllToDoItems = () => {
        DailyAgendaService.GetAllDailyAgendaItems()
            .then(response => {
                setTodos(response.data);
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    };

    useEffect(() => {
        retrieveAllToDoItems();
        console.log(todos);
    }, []);

    const DSATodo = ({ todo, index, }) => {
        return (
            <div>
                {todos && todos.map((todo,index) => (
                    <div className="todo" key={index}>{ todo.name }</div>
                ))}
            </div>
        )
    }

    return (
        <Container className="agenda-app-container">
            <br></br>
            <Row>
                <Col md={1}>

                </Col>
                <Col md={10}>
                    <div className="agenda-app">
                        <div className="to-do-list">
                            <DSATodo />
                        </div>
                    </div>
                </Col>
                <Col md={1}>

                </Col>
            </Row>
            <br></br>
        </Container>
    )
}

export default DSAAgendaApp;
