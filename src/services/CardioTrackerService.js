import Axios from 'axios';
import authHeader from './AuthHeader';

const getAllCardioTrackerInfo = () => {
    return Axios.get('http://localhost:8080/app/cardio-tracker-app/all', { headers: authHeader() });
}

const getAllCardioTypes = () => {
    return Axios.get('http://localhost:8080/app/cardio-types/all', { headers: authHeader() });
}

const getAllCardioByType = (cardioTypeId) => {
    return Axios.get(`http://localhost:8080/app/cardio-tracker-app/all/type/${cardioTypeId}`);
}

const getAllCardioPagination = (params) => {
    return Axios.get('http://localhost:8080/app/cardio-tracker-app/all-cardio', { headers: authHeader(), params });
}

const getCardioTrackerById = (cardioId) => {
    return Axios.get(`http://localhost:8080/app/cardio-tracker-app/cardio/id/${cardioId}`, { headers: authHeader() });
}

const addCardioInfo = (data) => {
    return Axios.post('http://localhost:8080/app/cardio-tracker-app/add',data, { headers: authHeader() });
}

const updateCardioInformation = (cardioId,data) => {
    return Axios.put(`http://localhost:8080/app/cardio-tracker-app/update/${cardioId}`,data, { headers: authHeader() });
}

const deleteCardio = (cardioId) => {
    return Axios.delete(`http://localhost:8080/app/cardio-tracker-app/delete/${cardioId}`, { headers: authHeader() });
}

const deleteAllCardioInfo = () => {
    return Axios.delete('http://localhost:8080/app/cardio-tracker-app/delete-all', { headers: authHeader() });
}

export default {
    getAllCardioTrackerInfo,
    getAllCardioTypes,
    getAllCardioByType,
    getAllCardioPagination,
    getCardioTrackerById,
    addCardioInfo,
    updateCardioInformation,
    deleteCardio,
    deleteAllCardioInfo
};