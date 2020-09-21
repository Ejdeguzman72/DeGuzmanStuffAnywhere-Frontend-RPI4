import React, { useState } from 'react';
import '../../../style-sheets/fun-apps.css';
import { Container, Col, Row, Form, Button } from 'react-bootstrap';

const ToDoForm = ({ addTodo }) => {
    const [value,setValue] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        if  (!value) return;
        addTodo(value);
        setValue("");
    }

    return (
        <Form onSubmit={handleSubmit}>
            <input
                type="text"
                className="agenda-input"
                value={value}
                placeholder="Enter an Item"
                onChange={e => setValue(e.target.value)}
                />
        </Form>
    );
}

// const Todo = ( {todo}) => {
//     return (
//         <div className="todo">
//             {todo.text}
//         </div>
//     );
// };

const AgendaApp = () => {
    const [todos, setTodos] = useState([
        { 
            text: "Learn about React" ,
            isCompleted: false
        },
        { 
            text: "Meet friend for lunch",
            isCompleted: false
        },
        { 
            text: "Build application",
            isCompleted: false
        }
    ]);

    const Todo = ({ todo, index, completeTodo }) => {
        return (
        <div 
            className="todo"
            style={{ textDecoration: todo.isCompleted ? "line-through" : ""}}
        >
            {todo.text} 
            <div>
                <Button variant="dark" className="todo-completed-button" size="sm" onClick={() => completeTodo(index)}>Completed</Button>
                <Button variant="dark" className="todo-deleted-button" size="sm" onClick={() => deleteTodo(index)}>X</Button>
            </div>
        </div>
        )
    }

    const addTodo = (text) => {
        const newTodos = [...todos, { text }];
        setTodos(newTodos);
    };

    const completeTodo = (index) => {
        const newTodos = [...todos];
        newTodos[index].isCompleted  = true;
        setTodos(newTodos);
    };

    const deleteTodo = (index) => {
        const deletedToDo = [...todos];
        deletedToDo.splice(index,1);
        setTodos(deletedToDo);
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
                            {todos.map((todo, index) => (
                                <Todo
                                    key={index}
                                    index={index}
                                    todo={todo}
                                    completeTodo={completeTodo}
                                    deleteTodo={deleteTodo}
                                />
                            ))}
                            <ToDoForm addTodo={addTodo} />
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

export default AgendaApp;
