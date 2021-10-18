import React from 'react';
import Axios from 'axios';

const GetAllUsers = () => {
    Axios.get('http://localhost:8080/app/users/all-users-information');
}

export default {
    GetAllUsers
}