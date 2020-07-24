import React from 'react';
import Axios from 'axios';

const getAllGeneralTransactions = () => {
    return Axios.get('http://localhost:8080/app/general-transaction/all');
}

export default {
    getAllGeneralTransactions
}