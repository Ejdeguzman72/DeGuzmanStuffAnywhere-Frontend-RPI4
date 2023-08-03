import http from '../http-common';

const getAllBooks = () => {
    return http.get(`/all`);
}

const getAllBookInformation = (params) => {
    return http.get('/all-books', { params } );
};

const getBooksByAuthor = (author) => {
    return http.get(`/book/search/author/${author}`);
}

const getBookInformationById = (bookId) => {
    return http.get(`/book/search/id/${bookId}`);
};

const findBookByName = (title) => {
    return http.get(`/book/search/title/${title}`);
}

const addBookInformation = (data) => {
    return http.post(`/add`,data);
};

const updateBookInformation = (bookId,book) => {
    return http.put(`/update/${bookId}`, book)
};

const deleteBookInformation = (bookId) => {
    return http.delete(`/delete/${bookId}`);
};

const deleteAllBookInformation = () => {
    return http.delete('/delete-all');
}

export default {
    getAllBooks,
    getAllBookInformation,
    getBookInformationById,
    addBookInformation,
    findBookByName,
    updateBookInformation,
    deleteBookInformation,
    deleteAllBookInformation,
    getBooksByAuthor
}