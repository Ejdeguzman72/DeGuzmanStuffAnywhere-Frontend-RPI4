import React, { useState, useEffect} from 'react';
import BooksService from '../../services/BookService';
import { Link } from 'react-router-dom';

const BooksList = () => {
    const [books,setBooks] = useState([]);
    const [currentBook,setCurrentBook] = useState(null);
    const [currentIndex,setCurrentIndex] = useState(-1);
    const [searchTitle,setSearchTitle] = useState("");

    useEffect(() => {
        retrieveBooks();
    }, []);

    const onChangeSearchTitle = (event) => {
        const searchTitle = event.target.value;
        setSearchTitle(searchTitle);
    }

    const retrieveBooks = () => {
        BooksService.getAllBookInformation()
            .then(response => {
                setBooks(response.data);
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    };

    const refreshList = () => {
        retrieveBooks();
        setCurrentTutorial(null);
        setCurrentIndex(-1);
    }

    const setActiveBook = (book,index) => {
        setCurrentBook(book);
        setCurrentIndex(index);
    }

    const removeTutorial = (index) => {
        BooksService.deleteBookInformation(index)
            .then(response => {
                setBooks(response.data);
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    };

    return (
        <div className="list-row">
            <div className="col-md-8">
                <div className="input-group mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search By Title"
                        value={searchTitle}
                        onChange={onChangeSearchTitle}
                    />
                    <div className="input-group-append">
                        <button
                            className="btn btn-outline-secondary"
                            type="button"
                            onClick={findByTitle}
                        >
                            Search
                        </button>
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <h4>Book List</h4>

                <ul className="lsit-group">
                    {books &&
                    books.map((book,index) => {
                        <li classname={
                            "list-group-item " + (index === currentIndex ? "active" : "")  
                        }
                        onClick={() => setActiveBook(book,index)}
                        key={index}
                        >
                            {book.name}
                        </li>
                    })}
                </ul>

                <button
                    className="m-3 btn btn-sm btn-danger"
                    onClick={removeAllBooks}
                >
                    Delete
                </button>
            </div>
            <div className="col-md-6">
                
            </div>
        </div>
    )
}

export default BooksList;