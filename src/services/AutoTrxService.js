import Axios from 'axios';
import authHeader from './AuthHeader';

const getAllAutoTransactions = () => {
    console.log(authHeader());
    return Axios.get('http://192.168.1.36:8080/app/auto-transactions/all', { headers : authHeader() });
}

const getAllAutoTransactionsPagination = (params) => {
    return Axios.get('http://192.168.1.36:8080/app/auto-transactions/all-transactions', { headers: authHeader(), params });
}

const getAutoTrxByVehicle = (data) => {
    return Axios.get(`http://192.168.1.36:8080/app/auto-transactions/transactions/search/vehicle`,data, { headers: authHeader() });
}

const getAutoTrxByUser = (data) => {
    return Axios.get(`http://192.168.1.36:8080/app/auto-transactions/transactions/search/user`,data, { headers: authHeader() });
}

const getAutoTrxByTrxType = (data) => {
    return Axios.get(`http://192.168.1.36:8080/app/auto-transactions/transactions/search/type`,data, { headers: authHeader() });
}

const getAutoTransactionDTOById = (autoTrxId) => {
    return Axios.get(`http://192.168.1.36:8080/app/auto-transactions/transaction-dto/search/id/${autoTrxId}`, { headers: authHeader() });
}

const getAutoTransactionById = (autoTrxId) => {
    return Axios.get(`http://192.168.1.36:8080/app/auto-transactions/transaction/search/id/${autoTrxId}`, { headers: authHeader() });
}

const getTrxCount = () => {
    return Axios.get(`http://192.168.1.36:8080/app/auto-transactions/count`, { headers: authHeader() });
}

const addAutoTransactionInformation = (newData) => {
    return Axios.post('http://192.168.1.36:8080/app/auto-transactions/add',newData, { headers: authHeader() });
}

const updateAutoTransaction = (autoTrxId,data) => {
    return Axios.put(`http://192.168.1.36:8080/app/auto-transactions/update/${autoTrxId}`,data, { headers: authHeader() });
}

const deleteAutoTransaction = (autoTrxId) => {
    return Axios.delete(`http://192.168.1.36:8080/app/auto-transactions/delete/${autoTrxId}`, { headers: authHeader() });
}

const deleteAllTransactions = () => {
    return Axios.delete('http://192.168.1.36:8080/app/auto-transactions/delete-all', { headers: authHeader() });
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