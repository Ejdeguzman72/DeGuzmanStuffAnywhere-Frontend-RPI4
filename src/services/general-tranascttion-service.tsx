import React from 'react';
import Axios from 'axios';

const getAllGeneralTransactions = () => {
    return Axios.get('http://localhost:8080/app/general-transaction/all');
}

const addGeneralTransactionInformation = () => {
    return Axios.post("http://localhost:8080/app/general-transactions/add-transaction-information");
}


export default {
    getAllGeneralTransactions
}