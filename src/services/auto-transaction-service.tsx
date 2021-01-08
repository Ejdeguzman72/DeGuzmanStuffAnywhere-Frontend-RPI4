import Axios from 'axios';

const getAllAutoTransactions = () => {
    return Axios.get('http://localhost:8080/app/auto-transactions/all');
}

const addAutoTransactionInformation = (newData: any, resolve: any) => {
    Axios.post('http://localhost:8080/app/auto-transactions/add-auto-transaction-information');
}

export default {
    getAllAutoTransactions,
    addAutoTransactionInformation
}