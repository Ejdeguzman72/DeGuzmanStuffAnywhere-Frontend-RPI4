import React from 'react';
import Axios from 'axios';

const getAllGeneralTransactions = () => {
    return Axios.get('http://localhost:8080/app/general-transactions/all');
}

const addGeneralTransactionInformation = (newData: any) => {
    return Axios.post("http://localhost:8080/app/general-transaction/add-transaction-information", newData);
}


export default {
    getAllGeneralTransactions,
    addGeneralTransactionInformation
}