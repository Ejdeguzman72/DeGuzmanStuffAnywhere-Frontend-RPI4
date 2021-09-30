import Axios from 'axios';

const GetAllCarInformation = () => {
    return Axios.get('http://ec2-54-162-1-238.compute-1.amazonaws.com:8080/app/cars/all');
}

export default {
    GetAllCarInformation
};