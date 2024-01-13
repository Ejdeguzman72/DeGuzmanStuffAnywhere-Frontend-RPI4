import Axios from 'axios';
import authHeader from './AuthHeader';

const getAllUsersService = () => {
    return Axios.get('http://192.168.1.36:8080/app/users/all', { headers: authHeader() });
}

const getAllPendingUsersService = () => {
    return Axios.get(`http://192.168.1.36:8080/app/users/pending-users`);
}

// const getAllCustomUsersInfo = () => {
//     return Axios.get()
// }

export default {
    getAllUsersService,
    getAllPendingUsersService
};