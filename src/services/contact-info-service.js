import React from 'react';
import Axios from 'axios';

const getContactInfo = () => {
    return Axios.get('http://localhost:8080/app/person-info/all');
}

const addContactInfo = () => {
    return Axios.post('http://localhost:8080/app/person-info/add-contact-info');
}
export default {
    getContactInfo,
    addContactInfo
};