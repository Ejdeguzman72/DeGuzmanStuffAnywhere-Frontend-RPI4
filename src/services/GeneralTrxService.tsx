import Axios from 'axios';

const getAllGeneralTransactions = () => {
    return Axios.get('http://localhost:8080/app/general-transactions/all');
}

const getAllTransactionsPagination = (params:any) => {
    return Axios.get('http://localhost:8080/app/general-transactions/all-transactions', { params });
}

const getAllTransactionsByType = (data:any) => {
    return Axios.get(`http://localhost:8080/app/general-transactions/search/type`,data)
}

const getAllTransactionsByUser = (data:any) => {
    return Axios.get(`http://localhost:8080/app/general-transactions/search/user`,data)
}

const getGeneralTransactionDTOById = (data:any) => {
    return Axios.get(`http://localhost:8080/app/general-transactions/tranasction-dto/search/id`,data)
}

const getTransactionById = (data:any) => {
    return Axios.get(`http://localhost:8080/app/general-transactions/transaction/search/id`,data);
}

const addGeneralTransactionInformation = (newData:any) => {
    return Axios.post("http://localhost:8080/app/general-transactions/add", newData);
}

const updateTransactionInformation = (data:any) => {
    return Axios.put(`http://localhost:8080/app/general-transactions/update`,data);
}

const deleteTransaction = (data:any) => {
    return Axios.delete(`http://localhost:8080/app/general-transactions/delete`,data);
}

const deleteAllTransactions = () => {
    return Axios.delete('http://localhost:8080/app/general-transactions/delete-all');
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