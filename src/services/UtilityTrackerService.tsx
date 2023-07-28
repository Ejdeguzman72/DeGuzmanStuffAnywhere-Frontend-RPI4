import Axios from 'axios';

const getAllUtilityTrackerInformation = () => {
    return Axios.get('http://localhost:8080/app/utility-information/all');
}

export default {
    getAllUtilityTrackerInformation
};