import Axios from 'axios';

const getAllRunTrackerInfo = () => {
    return Axios.get('http://localhost:8080/app/run-tracker-app/all');
}

export default {
    getAllRunTrackerInfo
};