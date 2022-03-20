import Axios from 'axios';

const getAllPosts = (params) => {
    return Axios.get('http://localhost:8080/app/posts/all-posts', { params });
}

const getPostByUser = (user_id) => {
    return Axios.get(`http://localhost:8080/app/posts/user/${user_id}`);
}

const addPost = (newData) => {
    return Axios.post(`http://localhost:8080/app/posts/add-post`, newData)
}

const deletePost = (post_id) => {
    return Axios.delete(`http://localhost:8080/app/posts/post/${post_id}`);
}

export default {
    getAllPosts,getPostByUser,addPost,deletePost
}