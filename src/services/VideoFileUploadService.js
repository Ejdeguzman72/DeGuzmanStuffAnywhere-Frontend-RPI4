import React from 'react';
import Axios from 'axios';

const uploadvideoFile = (file,onUploadProgress) => {
    let formData = new FormData();

    formData.append("file",file);

    return Axios.post("http://192.168.1.36:8080/app/video-uploads/upload", formData, {
        headers: {
            "Content-Type": "multipart/form-data"
        },
        onUploadProgress
    });
};

const getVideos = () => {
    return Axios.get("http://192.168.1.36:8080/app/video-uploads/files");
}

export default {
    uploadvideoFile,
    getVideos
}