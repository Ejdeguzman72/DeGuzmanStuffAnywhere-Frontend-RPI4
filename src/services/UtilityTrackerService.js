import Axios from 'axios';
import authHeader from './AuthHeader';

const getAllUtilityTrackerInformation = () => {
    return Axios.get('http://localhost:8080/app/utility-information/all', { headers: authHeader() });
}

export default {
    getAllUtilityTrackerInformation
};