import React from 'react';
import Axios from 'axios';

const GetAllUsers = () => {
    Axios.get('localhost:8080/app/users/all-users-information');
}

export default {
    GetAllUsers
}