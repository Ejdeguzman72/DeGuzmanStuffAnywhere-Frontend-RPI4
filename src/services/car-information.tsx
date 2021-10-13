import Axios from 'axios';

const GetAllCarInformation = () => {
    return Axios.get('localhost:8080/app/cars/all');
}

export default {
    GetAllCarInformation
};