import React from 'react';
import Axios from 'axios';

const getAllGeneralTransactions = () => {
    return Axios.get('http://ec2-54-162-1-238.compute-1.amazonaws.com:8080/app/general-transaction/all');
}

const addGeneralTransactionInformation = (newData: any) => {
    return Axios.post("http://ec2-54-162-1-238.compute-1.amazonaws.com:8080/app/general-transaction/add-transaction-information", newData);
}


export default {
    getAllGeneralTransactions,
    addGeneralTransactionInformation
}