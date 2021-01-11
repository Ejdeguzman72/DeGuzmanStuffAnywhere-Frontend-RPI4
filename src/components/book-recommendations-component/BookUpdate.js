import React, { useState, useEffect } from 'react';
import BooksService from '../../services/BookService';
import AddBookRecommendationTabComponent from '../tab-components/AddBookRecommendationTabComponent';
import BookrecommendationsTabComponent from '../tab-components/BookRecommendationsTabComponent';

const BookUpdate = props => {
    const initialBookState = {
        book_id: 0,
        name: "",
        author: "",
        descr: ""
    };

    const [currentBook, setCurrentBook] = useState(initialBookState);
    const [message, setMEssage] = ("");

    const getBook = (book_id) => {
        BooksService.getBookInformationById(book_id)
            .then(response => {
                setCurrentBook(response.data);
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    };

    useEffect(() => {
        getBook(props.match.params.book_id);
    }, [props.match.params.book_id]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setCurrentBook({ ...currentBook, [name]: value });
    };

    const updateBook = () => {
        BooksService.updateBookInformation(currentBook.book_id, currentBook)
            .then(response => {
                console.log(response.data);
                setMEssage("The book was updated successfully");
            })
            .catch(error => {
                console.log(error);
            });
    };

    const deleteBook = () => {
        BooksService.deleteBookInformation(currentBook.book_id)
            .then(response => {
                console.log(response.data);
                props.history.push("/books");
            })
            .catch(error => {
                console.log(error);
            });
    };

    return (
        <div>
            <div id="white-background">
                <BookrecommendationsTabComponent />
                <AddBookRecommendationTabComponent />
                {currentBook ? (
                    <div className="edit form">
                        <h4>Tutorial</h4>
                        <form className="update-book-container">
                            <div className="form-group">
                                <label htmlFor="name">Book Title</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    name="name"
                                    value={currentBook.name}
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
                                <input
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
                        <button className="badge badge-danger mr-2" onClick={deleteBook}>
                            Delete
                        </button>

                        // <button type="submit" className="badge badge-success" onClick={updateBook}>
                        //     Update
                        // </button>
                        // <p>{message}</p>
                    )}
            </div>
        </div>
    )
}

export default BookUpdate;

