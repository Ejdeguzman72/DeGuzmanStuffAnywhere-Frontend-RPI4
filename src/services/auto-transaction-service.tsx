import Axios from 'axios';

const getAllAutoTransations = () => {
    return Axios.get('http://localhost:8080/app/auto-transactions/all');
}

export default {
    getAllAutoTransations
}