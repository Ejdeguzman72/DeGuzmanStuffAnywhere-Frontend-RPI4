// import React, { useEffect, useState } from 'react';
// import '../../../style-sheets/fun-apps.css';
// import { Container, Col, Row, Form, Button } from 'react-bootstrap';
// import DailyAgendaService from '../../../services/daily-agenda-service';

// const DSAToDoForm = ({ addTodo }) => {
//     const [value,setValue] = useState("");

//     const handleSubmit = e => {
//         e.preventDefault();
//         if  (!value) return;
//         addTodo(value);
//         setValue("");
//     }

//     return (
//         <Form onSubmit={handleSubmit}>
//             <input
//                 type="text"
//                 className="agenda-input"
//                 value={value}
//                 placeholder="Enter an Item"
//                 onChange={e => setValue(e.target.value)}
//                 />
//         </Form>
//     );
// }

// const DSATodo = ( {data}) => {
//     console.log(data.name);
//     return (
//         <div className="todo">
//             {data.name}
//         </div>
//     );
//     console.log(data.name);
// };

// const DSAAgendaApp = () => {
//     const [todos, setTodos] = useState({
//       data: [
//           {
//               agendaId: 0,
//               name:"",
//               complete:false
//           }
//       ]
//     });

//     // useEffect(() => {
//     //     DailyAgendaService.GetAllDailyAgendaItems().then(response =>  {
//     //         let data = [];
//     //         response.data.forEach(e1 => {
//     //             data.push({
//     //                 agendaId: e1.agendaId,
//     //                 name: e1.name,
//     //                 c: e1.complete
//     //             });
//     //             console.log(data);
//     //         });
//     //         setTodos({ data: data});
//     //     })
//     //     .catch(function(error) {
//     //         console.log(error);
//     //     });
//     // }, []);

//     const DSATodo = ({ todo, index, completeTodo }) => {
//         console.log(todo + "this is data")
//         useEffect(() => {
//             DailyAgendaService.GetAllDailyAgendaItems().then(response =>  {
//                 let data = [];
//                 response.data.forEach(e1 => {
//                     data.push({
//                         agendaId: e1.agendaId,
//                         name: e1.name,
//                         complete: e1.complete
//                     });
//                     console.log(data + "this is data");
//                 });
//                 setTodos({ data: data});
//             })
//             .catch(function(error) {
//                 console.log(error);
//             });
//         }, []);
//         return (
//         <div 
//             className="todo"
//             style={{ textDecoration: todo.data.complete ? "line-through" : ""}}
//         >
//             {todo.name} 
//             <div>
//                 <Button variant="dark" className="todo-completed-button" size="sm" onClick={() => completeTodo(index)}>Completed</Button>
//                 <Button variant="dark" className="todo-deleted-button" size="sm" onClick={() => deleteTodo(index)}>X</Button>
//             </div>
//         </div>
//         )
//     }

//     const addTodo = (text) => {
//         const newTodos = [...todos, { text }];
//         setTodos(newTodos);
//     };

//     const completeTodo = (index) => {
//         const newTodos = [...todos];
//         newTodos[index].isCompleted  = true;
//         setTodos(newTodos);
//     };

//     const deleteTodo = (index) => {
//         const deletedToDo = [...todos];
//         deletedToDo.splice(index,1);
//         setTodos(deletedToDo);
//     }

//     return (
//         <Container className="agenda-app-container">
//             <br></br>
//             <Row>
//                 <Col md={1}>

//                 </Col>
//                 <Col md={10}>
//                     <div className="agenda-app">
//                         <div className="to-do-list">
                        
//                                <DSATodo
//                                    data={todos.data}
//                                 />
                        
//                             <DSAToDoForm addTodo={addTodo} />
//                         </div>
//                     </div>
//                 </Col>
//                 <Col md={1}>

//                 </Col>
//             </Row>
//             <br></br>
//         </Container>
//     )
// }

// export default DSAAgendaApp;
