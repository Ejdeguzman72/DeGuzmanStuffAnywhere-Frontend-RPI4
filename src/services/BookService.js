import http from '../http-common';

const getAllBookInformation = () => {
    return http.get('/all');
};

const getBookInformationById = (book_id) => {
    return http.get(`/book/${book_id}`);
};

const addBookInformation = (data) => {
    return http.post(`/add-book-information`,data);
};

const updateBookInformation = (book_id,data) => {
    return http.put(`/update-book-information/book/${book_id}`, data)
};

const deleteBookInformation = (book_id) => {
    return http.delete(`/delete-book/book/${book_id}`);
};

export default {
    getAllBookInformation,
    getBookInformationById,
    addBookInformation,
    updateBookInformation,
    deleteBookInformation
}