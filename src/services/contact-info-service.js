import React from 'react';
import Axios from 'axios';

const getContactInfo = () => {
    return Axios.get('http://ec2-54-162-1-238.compute-1.amazonaws.com:8080/app/person-info/all');
}

const addContactInfo = () => {
    return Axios.post('http://ec2-54-162-1-238.compute-1.amazonaws.com:8080/app/person-info/add-contact-info');
}
export default {
    getContactInfo,
    addContactInfo
};