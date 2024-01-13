import Axios from 'axios';
import authHeader from './AuthHeader';

const getAllPosts = (params) => {
    return Axios.get('http://192.168.1.36:8080/app/posts/all-posts', { headers: authHeader(), params });
}

const getPostByUser = (data) => {
    return Axios.get(`http://192.168.1.36:8080/app/posts/user`,data, { headers: authHeader() });
}

const addPost = (newData) => {
    return Axios.post(`http://192.168.1.36:8080/app/posts/add`, newData, { headers: authHeader() })
}

const deletePost = (data) => {
    return Axios.delete(`http://192.168.1.36:8080/app/posts/delete`,data, { headers: authHeader() });
}

export default {
    getAllPosts,getPostByUser,addPost,deletePost
}