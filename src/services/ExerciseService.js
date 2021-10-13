import Axios from 'axios';

const GetAllExercise = () => {
    return Axios.get('localhost:8080/app/gym-tracker/all');
}

const getAllExerciseInformation = (params) => {
    return Axios.get('localhost:8080/app/gym-tracker/all-exercise', { params } );
};

export default {
    GetAllExercise, getAllExerciseInformation
}