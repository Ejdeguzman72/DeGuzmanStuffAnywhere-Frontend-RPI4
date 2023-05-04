import Axios from 'axios';

const getAllRunTrackerInfo = () => {
    return Axios.get('http://localhost:8080/app/run-tracker-app/all');
}

const getAllRunsPagination = (params:any) => {
    return Axios.get('http://localhost:8080/app/run-tracker-app/all-runs', { params} );
}

const getRunTrackerById = (run_id:any) => {
    return Axios.get(`http://localhost:8080/app/run-tracker-app/run/${run_id}`);
}



const updateRunInformation = (data:any) => {
    return Axios.put(`http://localhost:8080/app/run-tracker-app/update`,data);
}

const deleteRun = (data:any) => {
    return Axios.delete(`http://localhost:8080/app/run-tracker-app/delete`,data);
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