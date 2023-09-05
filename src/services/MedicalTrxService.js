import Axios from 'axios';
import authHeader from './AuthHeader';

const getAllMedicalTransactions = () => {
    return Axios.get('http://localhost:8080/app/medical-transactions/all', { headers: authHeader() });
}

const getAllTransactionsPagination = (params) => {
    return Axios.get('http://localhost:8080/app/medical-transactions/all-transactions', { headers: authHeader(), params });
}

const getTransactionsByFacility = (medicalOfficeId) => {
    return Axios.get(`http://localhost:8080/app/medical-transactions/transactions/search/facility/${medicalOfficeId}`, { headers: authHeader() })
}

const getTransactionsByType = (trxTypeId) => {
    return Axios.get(`http://localhost:8080/app/medical-transactions/transactions/search/type/${trxTypeId}`, { headers: authHeader() })
}

const getTransactionsByUser = (userId) => {
    return Axios.get(`http://localhost:8080/app/medical-transactions/transactions/search/user/${userId}`, { headers: authHeader() })
}

const getTransactionById = (medTrxId) => {
    return Axios.get(`http://localhost:8080/app/medical-transactions/transaction/search/id/${medTrxId}`, { headers: authHeader() });
} 

const getTransactionDTOById = (medTrxId) => {
    return Axios.get(`http://localhost:8080/app/medical-transactions/transaction-dto/search/id/${medTrxId}`, { headers: authHeader() })
}

const addMedicalTransaction = (data) => {
    return Axios.post(`http://localhost:8080/app/medical-transactions/add`,data, { headers: authHeader() });
}

const updateMedicalTransaction = (medTrxId,data) => {
    return Axios.put(`http://localhost:8080/app/medical-transactions/update/${medTrxId}`,data, { headers: authHeader() });
}

const deleteMedicalTransaction = (medTrxId) => {
    return Axios.delete(`http://localhost:8080/app/medical-transactions/delete/${medTrxId}`, { headers: authHeader() })
}

const deleteAllTransactions = () => {
    return Axios.delete('http://localhost:8080/app/medical-transactions/delete-all', { headers: authHeader() });
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