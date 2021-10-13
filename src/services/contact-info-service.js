import React from 'react';
import Axios from 'axios';

const getContactInfo = () => {
    return Axios.get('localhost:8080/app/person-info/all');
}

const addContactInfo = () => {
    return Axios.post('localhost:8080/app/person-info/add-contact-info');
}
export default {
    getContactInfo,
    addContactInfo
};