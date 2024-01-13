import React from 'react';
import Axios from 'axios';

const uploadPhotosService = (file, onUploadProgress) => {
    let formData = new FormData();

    formData.append("file",file);

    return Axios.post("http://192.168.1.36:8080/app/photo-uploads/upload", formData, {
        headers: {
            "Content-Type": "multipart/form-data"
        },
        onUploadProgress
    });
};

const getPhotoFiles = () => {
    return Axios.get("http://192.168.1.36:8080/app/photo-uploads/files");
}

export default {
    uploadPhotosService,
    getPhotoFiles
};