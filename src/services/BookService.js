import http from '../http-common';

const getAllBooks = () => {
    return http.get(`/all`);
}

const getAllBookInformation = (params) => {
    return http.get('/all-books', { params } );
};

const getBooksByAuthor = (data) => {
    return http.get(`/book/search/author`,data);
}

const getBookInformationById = (data) => {
    return http.get(`/book/search/id`,data);
};

const findBookByName = (data) => {
    return http.get(`/book/search/title`,data);
}

const addBookInformation = (data) => {
    return http.post(`/add`,data);
};

const updateBookInformation = (data) => {
    return http.put(`/update`, data)
};

const deleteBookInformation = (data) => {
    return http.delete(`/delete`,data);
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