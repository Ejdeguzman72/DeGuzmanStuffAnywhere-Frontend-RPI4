import Axios from 'axios';
import authHeader from './AuthHeader';

const getAllAutoTransactions = () => {
    console.log(authHeader());
    return Axios.get('http://localhost:8080/app/auto-transactions/all');
}

const getAllAutoTransactionsPagination = (params) => {
    return Axios.get('http://localhost:8080/app/auto-transactions/all-transactions', { params });
}

const addAutoTransactionInformation = (newData,resolve) => {
    return Axios.post('http://localhost:8080/app/auto-transactions/add-auto-transaction-information');
}

const deleteAllTransactions = () => {
    return Axios.delete('http://localhost:8080/app/auto-transactions/delete-all-transactions');
}

export default {
    getAllAutoTransactions,
    addAutoTransactionInformation,
    getAllAutoTransactionsPagination,
    deleteAllTransactions
}