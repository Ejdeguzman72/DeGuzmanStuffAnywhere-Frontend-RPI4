import Axios from 'axios';
import authHeader from '../services/AuthHeader'

const getContactInfo = () => {
    return Axios.get('http://localhost:8080/app/person-info/all', { headers: authHeader() });
}

const getAllContactInfo = (params) => {
    return Axios.get('http://localhost:8080/app/person-info/all-contacts', { headers: authHeader(), params });
}

const getContactInfoById = (personId) => {
    return Axios.get(`http://localhost:8080/app/person-info/contact/id/${personId}`, { headers: authHeader() });
}

const getContactsByLastName = (data) => {
    return Axios.get(`http://localhost:8080/app/person-info/contact/lastname`,data, { headers: authHeader() })
}

const getContactsByEmail = (data) => {
    return Axios.get(`http://localhost:8080/app/person-info/contact/email`,data, { headers: authHeader() });
}

const getContactsByPhone = (data) => {
    return Axios.get(`http://localhost:8080/app/person-info/contact/email`,data, { headers: authHeader() })
}

const getContactCount = () => {
    return Axios.get(`http://localhost:8080/app/person-info/count`, { headers: authHeader() });
}

const addContactInfo = (data) => {
    return Axios.post('http://localhost:8080/app/person-info/add', data, { headers: authHeader() });
}

const updateContactInfo = (personId, data) => {
    return Axios.put(`http://localhost:8080/app/person-info/update/${personId}`, data, { headers: authHeader() });
}

const deleteContactById = (personId) => {
    return Axios.delete(`http://localhost:8080/app/person-info/delete/${personId}`, { headers: authHeader() });
}

const deleteAllContactInfo = () => {
    return Axios.delete('http://localhost:8080/app/person-info/delete-all', { headers: authHeader() });
}

export default {
    getContactInfo,
    deleteAllContactInfo,
    getAllContactInfo,
    getContactsByLastName,
    getContactsByEmail,
    getContactsByPhone,
    getContactCount,
    addContactInfo,
    getContactInfoById,
    updateContactInfo,
    deleteContactById
};