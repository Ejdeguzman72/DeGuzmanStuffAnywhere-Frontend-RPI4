import React from 'react';
import Axios from 'axios';

const getContactInfo = () => {
    return Axios.get('http://localhost:8080/app/person-info/all');
}

export default {
    getContactInfo
};