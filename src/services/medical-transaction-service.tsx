import React from 'react';
import Axios from 'axios';

const getAllMedicalTransactions = () => {
    return Axios.get('localhost:8080/app/medical-transactions/all');
}

export default {
    getAllMedicalTransactions
}