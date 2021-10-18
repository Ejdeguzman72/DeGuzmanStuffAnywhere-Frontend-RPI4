import Axios from 'axios';

const GetAllExercise = () => {
    return Axios.get('http://localhost:8080/app/gym-tracker/all');
}

const getAllExerciseInformation = (params) => {
    return Axios.get('http://localhost:8080/app/gym-tracker/all-exercise', { params } );
};

export default {
    GetAllExercise, getAllExerciseInformation
}