import Axios from 'axios';

const getAllAutoTransactions = () => {
    return Axios.get('http://ec2-54-162-1-238.compute-1.amazonaws.com:8080/app/auto-transactions/all');
}

const addAutoTransactionInformation = (newData: any, resolve: any) => {
    Axios.post('http://ec2-54-162-1-238.compute-1.amazonaws.com:8080/app/auto-transactions/add-auto-transaction-information');
}

export default {
    getAllAutoTransactions,
    addAutoTransactionInformation
}