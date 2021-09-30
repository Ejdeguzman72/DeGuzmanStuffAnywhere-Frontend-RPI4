import React from 'react';
import Axios from 'axios';

const uploadvideoFile = (file: any,onUploadProgress: any) => {
    let formData = new FormData();

    formData.append("file",file);

    return Axios.post("http://ec2-54-162-1-238.compute-1.amazonaws.com:8080/app/video-uploads/upload", formData, {
        headers: {
            "Content-Type": "multipart/form-data"
        },
        onUploadProgress
    });
};

const getVideos = () => {
    return Axios.get("http://ec2-54-162-1-238.compute-1.amazonaws.com:8080/app/video-uploads/files");
}

export default {
    uploadvideoFile,
    getVideos
}