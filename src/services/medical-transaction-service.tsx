import Axios from 'axios';

const getAllMedicalTransactions = () => {
    return Axios.get('http://localhost:8080/app/medical-transactions/all');
}

const getAllTransactionsPagination = (params:any) => {
    return Axios.get('http://localhost:8080/app/medical-transactions/all-transactions', { params });
}

const getTransactionsByFacility = (data:any) => {
    return Axios.get(`http://localhost:8080/app/medical-transactions/transactions/search/facility`,data)
}

const getTransactionsByType = (data:any) => {
    return Axios.get(`http://localhost:8080/app/medical-transactions/transactions/search/type`,data)
}

const getTransactionsByUser = (data:any) => {
    return Axios.get(`http://localhost:8080/app/medical-transactions/transactions/search/user`,data)
}

const getTransactionById = (data:any) => {
    return Axios.get(`http://localhost:8080/app/medical-transactions/transaction/search/id`,data);
} 

const getTransactionDTOById = (data:any) => {
    return Axios.get('http://localhost:8080/app/medical-transactions/transaction-dto/search/id',data)
}

const addMedicalTransaction = (data:any) => {
    return Axios.post(`http://localhost:8080/app/medical-transactions/add`,data);
}

const updateMedicalTransaction = (data:any) => {
    return Axios.put(`http://localhost:8080/app/medical-transactions/update`,data);
}

const deleteMedicalTransaction = (data:any) => {
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