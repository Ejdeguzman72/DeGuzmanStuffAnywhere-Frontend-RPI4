import Axios from 'axios';

const getAllEntertainment = () => {
    return Axios.get('http://192.168.1.36:8080/app/entertainment/all')
}

const getAllEntertainmentTypes = () => {
    return Axios.get('http://192.168.1.36:8080/app/entertainment-types/all')
}

const getAllEntertainmentByType = (entertainmentTypeId) => {
    return Axios.get(`http://192.168.1.36:8080/app/entertainment/all/type/${entertainmentTypeId}`);
}

const getEntertainmentById = (entityId) => {
    return Axios.get(`http://192.168.1.36:8080/app/entertainment/search/${entityId}`)
}

const getEntertainmentByName = (name) => {
    return Axios.get(`http://192.168.1.36:8080/app/entertainment/search/${name}`)
}

const addEntertainmentInfo = (data) => {
    return Axios.post(`http://192.168.1.36:8080/app/entertainment/add`, data)
}

const updateEntertainmentInfo = (entityId, data) => {
    return Axios.put(`http://192.168.1.36:8080/app/entertainment/update/${entityId}`,data)
}

const deleteEntertainment = (entityId) => {
    return Axios.delete(`http://192.168.1.36:8080/app/delete/${entityId}`);
}

export default {
    getAllEntertainment,getAllEntertainmentByType,getEntertainmentById,getEntertainmentByName,
    addEntertainmentInfo,updateEntertainmentInfo,deleteEntertainment,getAllEntertainmentTypes
}