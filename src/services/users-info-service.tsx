import Axios from 'axios';

const getAllUsersService = () => {
    return Axios.get('localhost:8080/app/users/all');
}

const getAllPendingUsersService = () => {
    return Axios.get(`localhost:8080/app/users/pending-users`);
}

// const getAllCustomUsersInfo = () => {
//     return Axios.get()
// }

export default {
    getAllUsersService,
    getAllPendingUsersService
};