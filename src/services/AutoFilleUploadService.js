import React from 'react';
import Axios from 'axios';

class UploadAutoFilesService {
    uploadAutoFiles(file,onUploadProgress) {
        let formData = new FormData();

        formData.append("file",file);

        return Axios.post("http://192.168.1.36:8080/app/auto-transaction-documents/upload", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
            onUploadProgress,
        });
    };

    getAutoFiles() {
        return Axios.get('http://192.168.1.36:8080/app/auto-transaction-documents/files');
    }
}

export default new UploadAutoFilesService();