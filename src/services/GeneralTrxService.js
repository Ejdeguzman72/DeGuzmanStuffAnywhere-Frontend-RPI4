import Axios from 'axios';
import authHeader from './AuthHeader';

const getAllGeneralTransactions = () => {
    return Axios.get('http://localhost:8080/app/general-transactions/all', { headers: authHeader() });
}

const getAllTransactionsPagination = (params) => {
    return Axios.get('http://localhost:8080/app/general-transactions/all-transactions', { headers: authHeader(), params });
}

const getAllTransactionsByType = (trxTypeId) => {
    return Axios.get(`http://localhost:8080/app/general-transactions/search/type/${trxTypeId}`, { headers: authHeader() })
}

const getAllTransactionsByUser = (userId) => {
    return Axios.get(`http://localhost:8080/app/general-transactions/search/user/${userId}`, { headers: authHeader() })
}

const getGeneralTransactionDTOById = (genTrxId) => {
    return Axios.get(`http://localhost:8080/app/general-transactions/tranasction-dto/search/id/${genTrxId}`, { headers: authHeader() })
}

const getTransactionById = (genTrxId) => {
    return Axios.get(`http://localhost:8080/app/general-transactions/transaction/search/id/${genTrxId}`, { headers: authHeader() });
}

const addGeneralTransactionInformation = (newData) => {
    return Axios.post("http://localhost:8080/app/general-transactions/add", newData, { headers: authHeader() });
}

const updateTransactionInformation = (genTrxId,data) => {
    return Axios.put(`http://localhost:8080/app/general-transactions/update/${genTrxId}`,data, { headers: authHeader() });
}

const deleteTransaction = (genTrxId) => {
    return Axios.delete(`http://localhost:8080/app/general-transactions/delete/${genTrxId}`, { headers: authHeader() });
}

const deleteAllTransactions = () => {
    return Axios.delete('http://localhost:8080/app/general-transactions/delete-all', { headers: authHeader() });
}

export default {
    getAllGeneralTransactions,
    addGeneralTransactionInformation,
    getAllTransactionsPagination,
    deleteAllTransactions,
    getTransactionById,
    updateTransactionInformation,
    deleteTransaction,
    getAllTransactionsByType,
    getAllTransactionsByUser,
    getGeneralTransactionDTOById
}