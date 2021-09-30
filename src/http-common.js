import * as Axios from 'axios';

export default Axios.create({
    baseURL: "http://ec2-54-162-1-238.compute-1.amazonaws.com:8080/app/books",
    headers:{
        "Content-type": "application/json"
    }
});