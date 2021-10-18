import React, { useEffect, useState } from 'react';
import '../../../style-sheets/fun-apps.css';
import { Container, Col, Row, Form, Button } from 'react-bootstrap';
import DailyAgendaService from '../../../services/daily-agenda-service';
import Axios from 'axios';

const DSAToDoForm = ({ addTodo }) => {
    const [value, setValue] = useState("");

    const handleSubmit = event => {
        event.preventDefault();  
        if (!value) return;
        addTodo(value)
        setValue("");
    }

    return (
        <Form onSubmit={handleSubmit}>
            <input 
            type="text"
            className="agenda-input"
            value={value}
            placeholder="Enter an Item"
            onChange={event => setValue(event.target.value)}
            />
        </Form>
    );
}

const Todo = ( {todo} ) => {
    return (
        <div className="todo">
            {todo.text}
        </div>
    );
};

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

    const DSATodo = ({ todo, index, completeTodo}) => {
        return (
            <div>
                {todos && todos.map((todo,index) => (
                    <div className="todo" key={index}>{ todo.name }</div>
                ))}
            </div>
        )
    }

    const addTodo = (text, resolve) => {
        Axios.post('http://localhost:8080/app/fun-apps/to-do-list/add-item',text)
            .then(res => {

                const newTodos = [...todos, text];
                console.log(newTodos);
                setTodos(newTodos);
            })
        // resolve();
        //window.location.reload();
    };

    return (
        <Container className="agenda-app-container">
            <br></br>
            <Row>
                <Col md={1}>

                </Col>
                <Col md={10}>
                    <div className="agenda-app">
                        <div className="to-do-list">
                            <DSATodo 
                            
                            />
                            <DSAToDoForm addTodo={addTodo} />
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
