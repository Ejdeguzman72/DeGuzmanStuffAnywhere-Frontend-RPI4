import Axios from 'axios';
import authHeader from './AuthHeader';

const getAllAutoTransactions = () => {
    console.log(authHeader());
    return Axios.get('http://localhost:8080/app/auto-transactions/all');
}

const getAllAutoTransactionsPagination = (params) => {
    return Axios.get('http://localhost:8080/app/auto-transactions/all-transactions', { params });
}

const getAutoTransactionById = (auto_transaction_id) => {
    return Axios.get(`http://localhost:8080/app/auto-transactions/auto-transaction/${auto_transaction_id}`);
}

const addAutoTransactionInformation = (newData,resolve) => {
    return Axios.post('http://localhost:8080/app/auto-transactions/add-auto-transaction-information');
}

const updateAutoTransaction = (auto_transaction_id,data) => {
    return Axios.put(`http://localhost:8080/app/auto-transactions/auto-transaction/${auto_transaction_id}`,data);
}

const deleteAutoTransaction = (auto_transaction_id) => {
    return Axios.delete(`http://localhost:8080/app/auto-transactions/auto-transaction/${auto_transaction_id}`);
}

const deleteAllTransactions = () => {
    return Axios.delete('http://localhost:8080/app/auto-transactions/delete-all-transactions');
}

export default {
    getAllAutoTransactions,
    addAutoTransactionInformation,
    getAllAutoTransactionsPagination,
    deleteAllTransactions,
    getAutoTransactionById,
    updateAutoTransaction,
    deleteAutoTransaction
}