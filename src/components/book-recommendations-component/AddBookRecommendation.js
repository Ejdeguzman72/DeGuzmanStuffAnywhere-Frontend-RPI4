import React, { useState } from 'react';
import BookService from '../../services/BookService';
import { Button, Modal } from 'react-bootstrap';
import '../../style-sheets/book-recommendations.css';

const AddBookRecommendation = () => {
    const initialState = {
        bookId: 0,
        title: "",
        author: "",
        descr:""
    };

    const [book, setBook] = useState(initialState);
    const [submitted, setSubmitted] = useState(false);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setBook({ ...book, [name]: value });

    };

    const saveBook = () => {

        let data = {
            title: book.title,
            author: book.author,
            descr: book.descr
        };

        BookService.addBookInformation(data)
            .then(response => {
                setBook({
                    bookId: response.data.bookId,
                    title: response.data.title,
                    author: response.data.author,
                    descr: response.data.descr
                });
                setSubmitted(true);
               
                window.location.reload();
            })
            .catch(error => {
                console.log(error);
            });
    }

    const newBook = () => {
        setBook(initialState);
        setSubmitted(false);
    }

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <><Button variant="info" size="sm" onClick={handleShow}>
            Add Book
        </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Add Book</Modal.Title>
                </Modal.Header>

                {submitted ? (
                    <Modal.Body>
                        <div>
                            <h4>{book.name} has been added successfully</h4>
                            <Button className="btn btn-success" onClick={newBook} size="lg" variant="info">
                                Add
                            </Button>
                        </div>
                    </Modal.Body>
                ) : (
                        <Modal.Body>
                            Please fill out the following information:
                            <br></br>
                            <div className="modal-container">
                                <div className="form-group">
                                    <label htmlFor="name">Title</label>
                                    <br></br>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="title"
                                        required
                                        value={book.title}
                                        onChange={handleInputChange}
                                        name="title"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="author">Author</label>
                                    <br></br>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="author"
                                        required
                                        value={book.author}
                                        onChange={handleInputChange}
                                        name="author"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="descr">Summary</label>
                                    <br></br>
                                    <textarea
                                        type="text"
                                        className="form-control"
                                        id="descr"
                                        required
                                        value={book.descr}
                                        onChange={handleInputChange}
                                        name="descr"
                                    />
                                </div>
                            </div>

                        </Modal.Body>
                    )}
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={saveBook}>Submit</Button>
                </Modal.Footer>
            </Modal></>
    )
}

export default AddBookRecommendation;