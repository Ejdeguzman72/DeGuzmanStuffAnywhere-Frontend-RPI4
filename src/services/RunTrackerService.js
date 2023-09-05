import Axios from 'axios';
import authHeader from './AuthHeader';

const getAllRunTrackerInfo = () => {
    return Axios.get('http://localhost:8080/app/run-tracker-app/all', { headers: authHeader() });
}

const getAllRunsPagination = (params) => {
    return Axios.get('http://localhost:8080/app/run-tracker-app/all-runs', { headers: authHeader(), params });
}

const getRunTrackerById = (runId) => {
    return Axios.get(`http://localhost:8080/app/run-tracker-app/run/id/${runId}`, { headers: authHeader() });
}

const addRunInfo = (data) => {
    return Axios.post('http://localhost:8080/app/run-tracker-app/add',data, { headers: authHeader() });
}

const updateRunInformation = (runId,data) => {
    return Axios.put(`http://localhost:8080/app/run-tracker-app/update/${runId}`,data, { headers: authHeader() });
}

const deleteRun = (runId) => {
    return Axios.delete(`http://localhost:8080/app/run-tracker-app/delete/${runId}`, { headers: authHeader() });
}

const deleteAllRunsInfo = () => {
    return Axios.delete('http://localhost:8080/app/run-tracker-app/delete-all', { headers: authHeader() });
}

export default {
    getAllRunTrackerInfo,
    getAllRunsPagination,
    deleteAllRunsInfo,
    getRunTrackerById,
    addRunInfo,
    updateRunInformation,
    deleteRun
};