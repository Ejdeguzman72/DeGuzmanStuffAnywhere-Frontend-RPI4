import Axios from 'axios';

const GetAllCarInformation = () => {
    return Axios.get('http://localhost:8080/app/vehicles/all');
}

export default {
    GetAllCarInformation
};