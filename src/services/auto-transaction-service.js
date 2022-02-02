import Axios from 'axios';
import authHeader from './AuthHeader';

const getAllAutoTransactions = () => {
    console.log(authHeader());
    return Axios.get('http://localhost:8080/app/auto-transactions/all');
}

const addAutoTransactionInformation = (newData,resolve) => {
    Axios.post('http://localhost:8080/app/auto-transactions/add-auto-transaction-information');
}

export default {
    getAllAutoTransactions,
    addAutoTransactionInformation
}