import * as Axios from 'axios';

export default Axios.create({
    baseURL: "http://192.168.1.36:8080/app/books",
    headers:{
        "Content-type": "application/json"
    }
});