import { auth } from 'firebase';
import http from '../http-common';
import authHeader from './AuthHeader';

const getAllBooks = () => {
    return http.get(`/all`, { headers: authHeader() });
}

const getAllBookInformation = (params) => {
    return http.get('/all-books', { headers: authHeader(), params });
};

const getBooksByAuthor = (author) => {
    return http.get(`/book/search/author/${author}`, { headers: authHeader() });
}

const getBookInformationById = (bookId) => {
    return http.get(`/book/search/id/${bookId}`, { headers: authHeader() });
};

const findBookByName = (title) => {
    return http.get(`/book/search/title/${title}`, { headers: authHeader() });
}

const addBookInformation = (data) => {
    return http.post(`/add`,data, { headers: authHeader() });
};

const updateBookInformation = (bookId,book) => {
    return http.put(`/update/${bookId}`, book, { headers: authHeader() })
};

const deleteBookInformation = (bookId) => {
    return http.delete(`/delete/${bookId}`, { headers: authHeader() });
};

const deleteAllBookInformation = () => {
    return http.delete('/delete-all', { headers: authHeader() });
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