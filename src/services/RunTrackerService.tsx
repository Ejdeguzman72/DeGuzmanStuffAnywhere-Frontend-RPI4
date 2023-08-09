import Axios from 'axios';

const getAllRunTrackerInfo = () => {
    return Axios.get('http://localhost:8080/app/run-tracker-app/all');
}

const getAllRunsPagination = (params:any) => {
    return Axios.get('http://localhost:8080/app/run-tracker-app/all-runs', { params} );
}

const getRunTrackerById = (runId:any) => {
    return Axios.get(`http://localhost:8080/app/run-tracker-app/run/id/${runId}`);
}

const updateRunInformation = (runId:any,data:any) => {
    return Axios.put(`http://localhost:8080/app/run-tracker-app/update/${runId}`,data);
}

const deleteRun = (runId:any) => {
    return Axios.delete(`http://localhost:8080/app/run-tracker-app/delete/${runId}`);
}

const deleteAllRunsInfo = () => {
    return Axios.delete('http://localhost:8080/app/run-tracker-app/delete-all');
}

export default {
    getAllRunTrackerInfo,
    getAllRunsPagination,
    deleteAllRunsInfo,
    getRunTrackerById,
    updateRunInformation,
    deleteRun
};