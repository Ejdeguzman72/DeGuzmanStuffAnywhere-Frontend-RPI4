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
        setCurrentBook(null);
        setCurrentIndex(-1);
    }

    const setActiveBook = (book,index) => {
        setCurrentBook(book);
        setCurrentIndex(index);
    }

    const removeAllBooks = () => {
        BooksService.deleteAllBookInformation
            .then(response => {
                setBooks(response.data);
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    };

    const findByName = () => {
        BooksService.findBookByName(searchTitle)
            .then(response => {
                setBooks(response.data);
                console.log(response.data);
            })
    }

    return (
        <div className="list row">
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
                            onClick={findByName}
                        >
                            Search
                        </button>
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <h4>Book List</h4>

                <ul className="list-group">
                    {books &&
                    books.map((book,index) => (
                        <li 
                            className={
                            "list-group-item selected-book" + (index === currentIndex ? "active" : "")  
                            
                        }
                        onClick={() => setActiveBook(book,index)}
                        key={index}
                        >
                            {book.name}
                        </li>
                    ))}
                </ul>

                <button
                    className="m-3 btn btn-sm btn-danger"
                    onClick={removeAllBooks}
                >
                    Delete All
                </button>
            </div>
            <div className="col-md-6">
                {currentBook ? (
                    <div>
                        <h4>Book Information</h4>
                        <div>
                            <label>
                                <strong>TItle:</strong>
                            </label>{" "}
                            {currentBook.name}
                        </div>
                        <div>
                            <label>
                                <strong>Author:</strong>
                                {currentBook.author}
                            </label>
                        </div>
                        <div>
                            <label>
                                <strong>Description</strong>
                            </label>{" "}
                        </div>

                        <Link 
                            to={"/update-book-information" + currentBook.book_id}
                            className="badge badge-warning"
                        >
                            Edit
                        </Link>
                    </div>
                ) : (
                    <div>
                        <br></br>
                        <p>Please click on a tutorial...</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default BooksList;