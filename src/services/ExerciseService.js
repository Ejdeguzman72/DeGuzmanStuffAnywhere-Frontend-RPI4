import Axios from 'axios';

const GetAllExercise = () => {
    return Axios.get('http://localhost:8080/app/gym-tracker/all');
}

const getAllExerciseInformation = (params) => {
    return Axios.get('http://localhost:8080/app/gym-tracker/all-exercises', { params } );
};

const getAllExercisesByUser = (userId) => {
    return Axios.get(`http://localhost:8080/app/gym-tracker/exercises/search/user/${userId}`);
}

const getAllExercisesByType = (exerciseTypeId) => {
    return Axios.get(`http://localhost:8080/app/gym-tracker/exercise/search/type/${exerciseTypeId}`);
}

const getExerciseInfoDTOById = (exerciseId) => {
    return Axios.get(`http://localhost:8080/app/gym-tracker/exercise-dto/search/id/${exerciseId}`);
}

const getExerciseInformationById = (exerciseId) => {
    return Axios.get(`http://localhost:8080/app/gym-tracker/exercise/search/id/${exerciseId}`);
}

const addExerciseInformation = (data) => {
    return Axios.post('http://localhost:8080/app/gym-tracker/add',data);
}

const updateExerciseinformation = (exerciseId,data) => {
    return Axios.put(`http://localhost:8080/app/gym-tracker/update/${exerciseId}`,data);
}

const deleteExercise = (exerciseId) => {
    return Axios.delete(`http://localhost:8080/app/gym-tracker/delete/${exerciseId}`);
}

const deleteAllExercises = () => {
    return Axios.delete('http://localhost:8080/app/gym-tracker/delete-all');
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