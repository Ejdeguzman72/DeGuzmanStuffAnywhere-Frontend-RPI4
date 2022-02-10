import Axios from 'axios';

const getAllRunTrackerInfo = () => {
    return Axios.get('http://localhost:8080/app/run-tracker-app/all');
}

const getAllRunsPagination = (params:any) => {
    return Axios.get('http://localhost:8080/app/run-tracker-app/all-runs', { params} );
}

const deleteAllRunsInfo = () => {
    return Axios.delete('http://localhost:8080/app/run-tracker-app/delete-all-runs');
}

export default {
    getAllRunTrackerInfo,
    getAllRunsPagination,
    deleteAllRunsInfo
};