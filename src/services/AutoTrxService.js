import Axios from 'axios';
import authHeader from './AuthHeader';

const getAllAutoTransactions = () => {
    console.log(authHeader());
    return Axios.get('http://localhost:8080/app/auto-transactions/all');
}

const getAllAutoTransactionsPagination = (params) => {
    return Axios.get('http://localhost:8080/app/auto-transactions/all-transactions', { params });
}

const getAutoTrxByVehicle = (data) => {
    return Axios.get(`http://localhost:8080/app/auto-transactions/transactions/search/vehicle`,data);
}

const getAutoTrxByUser = (data) => {
    return Axios.get(`http://localhost:8080/app/auto-transactions/transactions/search/user`,data);
}

const getAutoTrxByTrxType = (data) => {
    return Axios.get(`http://localhost:8080/app/auto-transactions/transactions/search/type`,data);
}

const getAutoTransactionDTOById = (data) => {
    return Axios.get(`http://localhost:8080/app/auto-transactions/transaction-dto/search/id`,data);
}

const getAutoTransactionById = (data) => {
    return Axios.get(`http://localhost:8080/app/auto-transactions/transaction/search/id`,data);
}

const getTrxCount = () => {
    return Axios.get(`http://localhost:8080/app/auto-transactions/count`);
}

const addAutoTransactionInformation = (newData) => {
    return Axios.post('http://localhost:8080/app/auto-transactions/add',newData);
}

const updateAutoTransaction = (data) => {
    return Axios.put(`http://localhost:8080/app/auto-transactions/update`,data);
}

const deleteAutoTransaction = (data) => {
    return Axios.delete(`http://localhost:8080/app/auto-transactions/delete`,data);
}

const deleteAllTransactions = () => {
    return Axios.delete('http://localhost:8080/app/auto-transactions/delete-all');
}

export default {
    getAllAutoTransactions,
    addAutoTransactionInformation,
    getAllAutoTransactionsPagination,
    deleteAllTransactions,
    getAutoTransactionDTOById,
    updateAutoTransaction,
    deleteAutoTransaction,
    getAutoTrxByVehicle,
    getAutoTrxByUser,
    getAutoTrxByTrxType,
    getAutoTransactionById,
    getTrxCount
}