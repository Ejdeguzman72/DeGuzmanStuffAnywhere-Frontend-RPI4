import Axios from 'axios';
import authHeader from './AuthHeader';

const getAllUtilityTrackerInformation = () => {
    return Axios.get('http://192.168.1.36:8080/app/utility-information/all', { headers: authHeader() });
}

export default {
    getAllUtilityTrackerInformation
};