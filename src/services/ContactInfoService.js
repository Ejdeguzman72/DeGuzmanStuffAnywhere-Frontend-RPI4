import React from 'react';
import Axios from 'axios';

const getContactInfo = () => {
    return Axios.get('http://localhost:8080/app/person-info/all');
}

const getAllContactInfo = (params) => {
    return Axios.get('http://localhost:8080/app/person-info/all-contacts', { params });
}

const getContactInfoById = (personId) => {
    return Axios.get(`http://localhost:8080/app/person-info/contact/id/${personId}`);
}

const getContactsByLastName = (data) => {
    return Axios.get(`http://localhost:8080/app/person-info/contact/lastname`,data)
}

const getContactsByEmail = (data) => {
    return Axios.get(`http://localhost:8080/app/person-info/contact/email`,data);
}

const getContactsByPhone = (data) => {
    return Axios.get(`http://localhost:8080/app/person-info/contact/email`,data)
}

const getContactCount = () => {
    return Axios.get(`http://localhost:8080/app/person-info/count`);
}

const addContactInfo = (data) => {
    return Axios.post('http://localhost:8080/app/person-info/add', data);
}

const updateContactInfo = (personId, data) => {
    return Axios.put(`http://localhost:8080/app/person-info/update/${personId}`, data);
}

const deleteContactById = (personId) => {
    return Axios.delete(`http://localhost:8080/app/person-info/delete/${personId}`);
}

const deleteAllContactInfo = () => {
    return Axios.delete('http://localhost:8080/app/person-info/delete-all');
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