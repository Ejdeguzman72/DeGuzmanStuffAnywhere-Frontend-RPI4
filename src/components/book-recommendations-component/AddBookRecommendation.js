import React, { useState } from 'react';
import BookService from '../../services/BookService';
import { Button } from 'react-bootstrap';
import '../../style-sheets/book-recommendations.css';
import AddBookRecommendationTabComponent from '../tab-components/AddBookRecommendationTabComponent';
import BookrecommendationsTabComponent from '../tab-components/BookRecommendationsTabComponent';

const AddBookRecommendation = () => {
    const initialState = {
        book_id: 0,
        name: "",
        author: ""
    };

    const [book, setBook] = useState(initialState);
    const [submitted, setSubmitted] = useState(false);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setBook({ ...book, [name]: value });

    };

    const saveBook = () => {
        
        let data = {
            title: book.name,
            author: book.author
        };

        BookService.addBookInformation(data)
            .then(response => {
                setBook({
                    book_id: response.data.book_id,
                    name: response.data.name,
                    author: response.data.author
                });
                setSubmitted(true);
                alert(`${book.name} has been added`)
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }

    const newBook = () => {
        setBook(initialState);
        setSubmitted(false);
    }

    return (
        <div id="white-background">
            <br></br>
            <BookrecommendationsTabComponent />
            <AddBookRecommendationTabComponent />
            <br></br>
            <div className="add-book-recommendation-container">
                <div className="submit-form">
                    {submitted ? (
                        <div>
                            <h4>Book Information has been submitted successfully</h4>
                            <Button className="btn btn-success" onClick={newBook} size="lg" variant="info">
                                Add
                            </Button>
                        </div>
                    ) : (
                            <div>
                                <div className="form-group">
                                    <label htmlFor="name">Title</label>
                                    <br></br>
                                    <input
                                        type="text"
                                        className="book-name-input"
                                        id="name"
                                        required
                                        value={book.name}
                                        onChange={handleInputChange}
                                        name="name"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="author">Author</label>
                                    <br></br>
                                    <input
                                        type="text"
                                        className="author-input"
                                        id="author"
                                        required
                                        value={book.author}
                                        onChange={handleInputChange}
                                        name="author"
                                    />
                                </div>

                                <Button onClick={saveBook} variant="dark" size="lg">
                                    Submit
                                </Button>
                            </div>
                        )}
                </div>
            </div>
        </div>
    )
}

export default AddBookRecommendation;