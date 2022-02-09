import Axios from 'axios';

const GetAllExercise = () => {
    return Axios.get('http://localhost:8080/app/gym-tracker/all');
}

const getAllExerciseInformation = (params) => {
    return Axios.get('http://localhost:8080/app/gym-tracker/all-exercises', { params } );
};

const deleteAllExercises = () => {
    return Axios.delete('http://localhost:8080/app/gym-tracker/delete-all-exercises');
}

export default {
    GetAllExercise, getAllExerciseInformation, deleteAllExercises
}