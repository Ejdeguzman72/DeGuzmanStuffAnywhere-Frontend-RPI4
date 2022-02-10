import React from 'react';
import Axios from 'axios';

const getAllMedicalTransactions = () => {
    return Axios.get('http://localhost:8080/app/medical-transactions/all');
}

const getAllTransactionsPagination = (params:any) => {
    return Axios.get('http://localhost:8080/app/medical-transactions/all-transactions', { params });
}

const deleteAllTransactions = () => {
    return Axios.delete('http://localhost:8080/app/medical-transactions/delete-all-medical-transactions');
}

export default {
    getAllMedicalTransactions,
    getAllTransactionsPagination,
    deleteAllTransactions
}