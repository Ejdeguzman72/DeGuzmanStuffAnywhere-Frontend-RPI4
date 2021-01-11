import * as Axios from 'axios';

export default Axios.create({
    baseURL: "http://localhost:8080/app/books",
    headers:{
        "Content-type": "application/json"
    }
});