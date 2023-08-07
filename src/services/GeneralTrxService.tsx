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

const getGeneralTransactionDTOById = (genTrxId:any) => {
    return Axios.get(`http://localhost:8080/app/general-transactions/tranasction-dto/search/id/${genTrxId}`)
}

const getTransactionById = (genTrxId:any) => {
    return Axios.get(`http://localhost:8080/app/general-transactions/transaction/search/id/${genTrxId}`);
}

const addGeneralTransactionInformation = (newData:any) => {
    return Axios.post("http://localhost:8080/app/general-transactions/add", newData);
}

const updateTransactionInformation = (genTrxId:any,data:any) => {
    return Axios.put(`http://localhost:8080/app/general-transactions/update/${genTrxId}`,data);
}

const deleteTransaction = (genTrxId:any) => {
    return Axios.delete(`http://localhost:8080/app/general-transactions/delete/${genTrxId}`);
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