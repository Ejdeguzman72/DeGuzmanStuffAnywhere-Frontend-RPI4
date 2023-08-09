import Axios from 'axios';

const getAllMedicalTransactions = () => {
    return Axios.get('http://localhost:8080/app/medical-transactions/all');
}

const getAllTransactionsPagination = (params) => {
    return Axios.get('http://localhost:8080/app/medical-transactions/all-transactions', { params });
}

const getTransactionsByFacility = (data) => {
    return Axios.get(`http://localhost:8080/app/medical-transactions/transactions/search/facility`,data)
}

const getTransactionsByType = (data) => {
    return Axios.get(`http://localhost:8080/app/medical-transactions/transactions/search/type`,data)
}

const getTransactionsByUser = (data) => {
    return Axios.get(`http://localhost:8080/app/medical-transactions/transactions/search/user`,data)
}

const getTransactionById = (medTrxId) => {
    return Axios.get(`http://localhost:8080/app/medical-transactions/transaction/search/id/${medTrxId}`);
} 

const getTransactionDTOById = (medTrxId) => {
    return Axios.get(`http://localhost:8080/app/medical-transactions/transaction-dto/search/id/${medTrxId}`)
}

const addMedicalTransaction = (data) => {
    return Axios.post(`http://localhost:8080/app/medical-transactions/add`,data);
}

const updateMedicalTransaction = (medTrxId,data) => {
    return Axios.put(`http://localhost:8080/app/medical-transactions/update/${medTrxId}`,data);
}

const deleteMedicalTransaction = (data) => {
    return Axios.delete(`http://localhost:8080/app/medical-transactions/delete`,data)
}

const deleteAllTransactions = () => {
    return Axios.delete('http://localhost:8080/app/medical-transactions/delete-all');
}

export default {
    getAllMedicalTransactions,
    getAllTransactionsPagination,
    getTransactionsByUser,
    getTransactionsByFacility,
    getTransactionsByType,
    deleteAllTransactions,
    getTransactionDTOById,
    getTransactionById,
    addMedicalTransaction,
    updateMedicalTransaction,
    deleteMedicalTransaction
}