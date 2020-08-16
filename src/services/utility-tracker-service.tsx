import Axios from 'axios';

const getAllUtilityTrackerInformation = () => {
    return Axios.get('localhost:8080/locahost:8080/app/utility-information/all');
}

export default {
    getAllUtilityTrackerInformation
};