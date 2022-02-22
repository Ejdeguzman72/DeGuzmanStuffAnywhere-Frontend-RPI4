import React, { useState, useEffect } from 'react';
import BooksService from '../../services/BookService';
import { Link } from 'react-router-dom';
import AddBookRecommendation from './AddBookRecommendation';
import Pagination from "@material-ui/lab/Pagination";

const BooksList = () => {
    const [books, setBooks] = useState([]);
    const [currentBook, setCurrentBook] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(-1);
    const [searchTitle, setSearchTitle] = useState("");

    const [page, setpage] = useState(1);
    const [count, setCount] = useState(0);
    const [pageSize, setPageSize] = useState(10);

    const onChangeSearchTitle = (event) => {
        const searchTitle = event.target.value;
        setSearchTitle(searchTitle);
    };

    const pageSizes = [10,15,20];

    const getRequestParams = (searchTitle, page, pageSize) => {
        let params = {};

        if (searchTitle) {
            params['title'] = searchTitle;
        }

        if (page) {
            params['page'] = page - 1;
        }

        if (pageSize) {
            params['size'] = pageSize;
        }

        return params;
    }

    const retrieveBooks = () => {
        const params = getRequestParams(searchTitle, page, pageSize);
        
        BooksService.getAllBookInformation(params)
            .then(response => {
                const { books, totalPages } = response.data;

                setBooks(books);
                setCount(totalPages);
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    };

    useEffect(retrieveBooks, [page, pageSize]);

    const refreshList = () => {
        retrieveBooks();
        setCurrentBook(null);
        setCurrentIndex(-1);
    }

    const handlePageChange = (event, value) => {
        setpage(value);
    }

    const handlePageSizeChange = (event) => {
        setPageSize(event.target.value);
        setpage(1);
    }

    const setActiveBook = (book, index) => {
        setCurrentBook(book);
        setCurrentIndex(index);
    }

    const removeAllBooks = () => {
        BooksService.deleteAllBookInformation()
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


                <div className="mt-3">
                    {"Items per Page: "}
                    <select onChange={handlePageSizeChange} value={pageSize}>
                        {pageSizes.map((size) => (
                            <option key={size} value={size}>
                                {size}
                            </option>
                        ))}
                    </select>

                    <Pagination
                        className="my-3"
                        count={count}
                        page={page}
                        siblingCount={1}
                        boundaryCount={1}
                        variant="outlined"
                        shape="rounded"
                        onChange={handlePageChange}
                    />
                </div>


                <ul className="list-group">
                    {books &&
                        books.map((book, index) => (
                            <li
                                className={
                                    "list-group-item selected-book" + (index === currentIndex ? "active" : "")

                                }
                                onClick={() => setActiveBook(book, index)}
                                key={index}
                            >
                                {book.title}
                            </li>
                        ))}
                </ul>
                <button
                    className="m-3 btn btn-sm btn-danger"
                    onClick={removeAllBooks}
                >
                    Delete All
                </button>
                {/* <button
                    className="m-3 btn btn-primary"
                    onClick={removeAllBooks}
                >
                    Add Book Information
                </button> */}
                <AddBookRecommendation />
            </div>
            <div className="col-md-6">
                {currentBook ? (
                    <div>
                        <h4>Book Information</h4>
                        <div>
                            <label>
                                <strong>Title:</strong>
                            </label>{" "}
                            {currentBook.title}
                        </div>
                        <div>
                            <label>
                                <strong>Author:</strong>
                            </label>{" "}
                            {currentBook.author}
                        </div>
                        <div>
                            <label>
                                <strong>Description:</strong>
                            </label>{" "}
                            {currentBook.descr}
                        </div>

                        <Link
                            to={"/update-book-information/" + currentBook.book_id}
                            className="badge badge-warning"
                        >
                            Edit
                        </Link>
                    </div>
                ) : (
                        <div>
                            <br></br>
                            <p>Please click on a book...</p>
                        </div>
                    )}
            </div>
        </div>
    )
}

export default BooksList;