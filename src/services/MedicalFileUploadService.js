import React from 'react';
import Axios from 'axios';

class UploadMedicalFileUploadService {
    uploadMedicalFile(file, onUploadProgress) {
        let formData = new FormData();

        formData.append("file", file);

        return Axios.post("http://192.168.1.36:8080/app/medical-transaction-documents/upload", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
            onUploadProgress,
        });
    }

    getMedicalFiles() {
        return Axios.get('http://192.168.1.36:8080/app/medical-transaction-documents/files');
    }
}

export default new UploadMedicalFileUploadService();