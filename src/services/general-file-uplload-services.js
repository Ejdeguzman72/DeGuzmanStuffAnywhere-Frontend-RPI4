import React from 'react';
import Axios from 'axios';

class UploadGeneralFileUploadService {
    uploadGeneralFile(file, onUploadProgress) {
        let formData = new FormData();

        formData.append("file",file);


        return Axios.post("http://ec2-54-162-1-238.compute-1.amazonaws.com:8080/app/general-transaction-documents/upload", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
            onUploadProgress,
        });
    }

    getGeneralFiles() {
        return Axios.get('http://ec2-54-162-1-238.compute-1.amazonaws.com:8080/app/general-transaction-documents/files');
    }
}

export default new UploadGeneralFileUploadService();