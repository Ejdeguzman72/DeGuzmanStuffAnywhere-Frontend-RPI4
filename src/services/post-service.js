import Axios from 'axios';
import authHeader from './AuthHeader';

const getAllPosts = (params) => {
    return Axios.get('http://localhost:8080/app/posts/all-posts', { headers: authHeader(), params });
}

const getPostByUser = (data) => {
    return Axios.get(`http://localhost:8080/app/posts/user`,data);
}

const addPost = (newData) => {
    return Axios.post(`http://localhost:8080/app/posts/add`, newData)
}

const deletePost = (data) => {
    return Axios.delete(`http://localhost:8080/app/posts/delete`,data);
}

export default {
    getAllPosts,getPostByUser,addPost,deletePost
}