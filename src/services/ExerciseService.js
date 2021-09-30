import Axios from 'axios';

const GetAllExercise = () => {
    return Axios.get('http://ec2-54-162-1-238.compute-1.amazonaws.com:8080/app/gym-tracker/all');
}

const getAllExerciseInformation = (params) => {
    return Axios.get('http://ec2-54-162-1-238.compute-1.amazonaws.com:8080/app/gym-tracker/all-exercise', { params } );
};

export default {
    GetAllExercise, getAllExerciseInformation
}