import Axios from 'axios';
import authHeader from './AuthHeader';

const GetAllUsers = () => {
    Axios.get('http://localhost:8080/app/users/all-users-information', { headers: authHeader() });
}

export default {
    GetAllUsers
}