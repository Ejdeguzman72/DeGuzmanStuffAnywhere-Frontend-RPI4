import Axios from 'axios';

const getAllUsersService = () => {
    return Axios.get('http://localhost:8080/app/users/all');
}

export default {
    getAllUsersService
};