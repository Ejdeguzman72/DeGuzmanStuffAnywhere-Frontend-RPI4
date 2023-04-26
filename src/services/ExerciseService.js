import Axios from 'axios';

const GetAllExercise = () => {
    return Axios.get('http://localhost:8080/app/gym-tracker/all');
}

const getAllExerciseInformation = (params) => {
    return Axios.get('http://localhost:8080/app/gym-tracker/all-exercises', { params } );
};

const getAllExercisesByUser = (data) => {
    return Axios.get(`http://localhost:8080/app/gym-tracker/exercises/search/user`,data);
}

const getAllExercisesByType = (data) => {
    return Axios.get(`http://localhost:8080/app/gym-tracker/exercise/search/type`,data);
}

const getExerciseInfoDTOById = (data) => {
    return Axios.get(`http://localhost:8080/app/gym-tracker/exercise-dto/search/id`,data);
}

const getExerciseInformationById = (data) => {
    return Axios.get(`http://localhost:8080/app/gym-tracker/exercise/search/id`,data);
}

const addExerciseInformation = (data) => {
    return Axios.post('http://localhost:8080/app/gym-tracker/add',data);
}

const updateExerciseinformation = (data) => {
    return Axios.put(`http://localhost:8080/app/gym-tracker/update`,data);
}

const deleteExercise = (data) => {
    return Axios.delete(`http://localhost:8080/app/gym-tracker/delete`,data);
}

const deleteAllExercises = () => {
    return Axios.delete('http://localhost:8080/app/gym-tracker/delete-all');
}

export default {
    GetAllExercise, getAllExerciseInformation, getAllExercisesByType, getAllExercisesByUser, getExerciseInfoDTOById, deleteAllExercises, addExerciseInformation, updateExerciseinformation, deleteExercise, getExerciseInformationById
}