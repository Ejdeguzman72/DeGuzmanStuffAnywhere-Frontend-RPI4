import Axios from 'axios';

const getAllRunTrackerInfo = () => {
    return Axios.get('localhost:8080/app/run-tracker-app/all');
}

export default {
    getAllRunTrackerInfo
};