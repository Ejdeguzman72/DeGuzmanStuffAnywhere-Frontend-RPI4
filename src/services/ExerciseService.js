import Axios from 'axios';
import authHeader from './AuthHeader';

const GetAllExercise = () => {
    return Axios.get('http://localhost:8080/app/gym-tracker/all', { headers: authHeader() });
}

const getAllExerciseInformation = (params) => {
    return Axios.get('http://localhost:8080/app/gym-tracker/all-exercises', { headers: authHeader(), params });
};

const getAllExercisesByUser = (userId) => {
    return Axios.get(`http://localhost:8080/app/gym-tracker/exercises/search/user/${userId}`, { headers: authHeader() });
}

const getAllExercisesByType = (exerciseTypeId) => {
    return Axios.get(`http://localhost:8080/app/gym-tracker/exercises/search/type/${exerciseTypeId}`, { headers: authHeader() });
}

const getExerciseInfoDTOById = (exerciseId) => {
    return Axios.get(`http://localhost:8080/app/gym-tracker/exercise-dto/search/id/${exerciseId}`, { headers: authHeader() });
}

const getExerciseInformationById = (exerciseId) => {
    return Axios.get(`http://localhost:8080/app/gym-tracker/exercise/search/id/${exerciseId}`, { headers: authHeader() });
}

const addExerciseInformation = (data) => {
    return Axios.post('http://localhost:8080/app/gym-tracker/add', data, { headers: authHeader() });
}

const updateExerciseinformation = (exerciseId,data) => {
    return Axios.put(`http://localhost:8080/app/gym-tracker/update/${exerciseId}`, data, { headers: authHeader() });
}

const deleteExercise = (exerciseId) => {
    return Axios.delete(`http://localhost:8080/app/gym-tracker/delete/${exerciseId}`, { headers: authHeader() });
}

const deleteAllExercises = () => {
    return Axios.delete('http://localhost:8080/app/gym-tracker/delete-all', { headers: authHeader() });
}

export default {
    GetAllExercise, 
    getAllExerciseInformation, 
    getAllExercisesByType, 
    getAllExercisesByUser, 
    getExerciseInfoDTOById, 
    deleteAllExercises, 
    addExerciseInformation, 
    updateExerciseinformation, 
    deleteExercise, 
    getExerciseInformationById
}