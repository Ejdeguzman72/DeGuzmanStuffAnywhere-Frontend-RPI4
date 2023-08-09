import React, { useState, useEffect } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import BooksService from '../../services/BookService';
import AddBookRecommendationTabComponent from '../tab-components/AddBookRecommendationTabComponent';
import BookrecommendationsTabComponent from '../tab-components/BookRecommendationsTabComponent';

const BookUpdate = props => {
    const initialBookState = {
        bookId: null,
        title: "",
        author: "",
        descr: ""
    };

    const [currentBook, setCurrentBook] = useState(initialBookState);
    const [message, setMessage] = ("");

    const getBook = (bookId) => {
        BooksService.getBookInformationById(bookId)
            .then(response => {
                setCurrentBook(response.data.book);
            })
            .catch(error => {
                console.log(error);
            });
    };

    useEffect(() => {
        getBook(props.match.params.bookId);
    }, [props.match.params.bookId]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setCurrentBook({ ...currentBook, [name]: value });
    };

    const updateBook = () => {
        BooksService.updateBookInformation(currentBook.bookId, currentBook)
            .then(response => {
                // setMessage("The book was updated successfully");
                alert("The book was updated successfully");
            })
            .catch(error => {
                console.log(error);
            });
    };

    const deleteBook = () => {
        BooksService.deleteBookInformation(currentBook.bookId)
            .then(response => {
                props.history.push("/book-recommendations-grid");
            })
            .catch(error => {
                console.log(error);
            });
    };

    return (
        <div>
            <div id="white-background">
                <br></br>
                <BookrecommendationsTabComponent />
                <br></br>
                {currentBook ? (
                    <div className="edit form">
                        <h2>Book Recommendations</h2>
                        <form className="update-book-container">
                            <div className="form-group">
                                <label htmlFor="name">Book Title</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="title"
                                    name="title"
                                    value={currentBook.title}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="author">Author</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="author"
                                    name="author"
                                    value={currentBook.author}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="descr">Description</label>
                                <textarea
                                    type="text"
                                    className="form-control"
                                    id="descr"
                                    name="descr"
                                    value={currentBook.descr}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </form>
                    </div>
                ) : (
                    <div>
                        <Button className="badge badge-danger mr-2" onClick={() => updateBook(true)}>
                            Update
                        </Button>
                    </div>
                )}
                <br></br>
                <Row>
                    <Col md={4}>

                    </Col>
                    <Col md={2}>
                        <div>
                            <Button type="submit" size="lg" variant="dark" onClick={updateBook}>Update</Button>
                        </div>
                    </Col>
                    <Col md={2}>
                        <div>
                            <Button type="submit" size="lg" variant="outline-danger" onClick={deleteBook}>
                                Delete
                            </Button>
                        </div>
                    </Col>
                    <Col md={4}>

                    </Col>
                </Row>
                <p>{message}</p>
            </div>
        </div>
    )
}

export default BookUpdate;
