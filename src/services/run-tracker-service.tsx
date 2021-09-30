import Axios from 'axios';

const getAllRunTrackerInfo = () => {
    return Axios.get('http://ec2-54-162-1-238.compute-1.amazonaws.com:8080/app/run-tracker-app/all');
}

export default {
    getAllRunTrackerInfo
};