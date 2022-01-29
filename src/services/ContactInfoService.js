import React from 'react';
import Axios from 'axios';

const getContactInfo = () => {
    return Axios.get('http://localhost:8080/app/person-info/all');
}

const getAllContactInfo = (params) => {
    return Axios.get('http://localhost:8080/app/person-info/all-contacts', { params });
}

const addContactInfo = () => {
    return Axios.post('http://localhost:8080/app/person-info/add-contact-info');
}

const deleteAllContactInfo = () => {
    return Axios.delete('http://localhost:8080/app/person-info/all-contacts');
}

export default {
    getContactInfo,
    deleteAllContactInfo,
    getAllContactInfo,
    addContactInfo
};