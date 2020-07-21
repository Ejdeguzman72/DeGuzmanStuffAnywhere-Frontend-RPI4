import React, { useEffect } from 'react';
import UploadPhotosService from '../../services/photo-file-upload-services';

const PhotoUploadComponent = () => {
    const [selectedFiles, setSelectedFiles] = useState(undefined);
    const [currentFile, setCurrentFile] = useState(undefined);
    const [progress, setProgress] = useState(0);
    const [message, setMessage] = useState("");
    const [fileInfos, setFileInfos] = useState([]);


    useEffect(() => {
        UploadPhotosService.getPhotoFiles().then((response)  => {
            setFileInfos(response.data);
        });
    }, []);
    
    return (
        <div>
            <div id="white-background">
                <br></br>
                <div>
                    {currentFile && (
                        <div className="progress">
                            <div
                                className="progress-bar progress-bar-info progress-bar-striped"
                                role="progressbar"
                                aria-valuenow={progress}
                                aria-valuemin="0"
                                aria-valuemax="100"
                                style={{ width: progress + "%" }}
                            >
                                {progress}%
            </div>
                        </div>
                    )}

                    <label className="btn btn-default">
                        <input type="file" onChange={this.selectFile} />
                    </label>

                    <button className="btn btn-success"
                        disabled={!selectedFiles}
                        onClick={this.upload}
                    >
                        Upload
        </button>

                    <div className="alert alert-light" role="alert">
                        {message}
                    </div>

                    <div className="card">
                        <div className="card-header">List of Files</div>
                        <ul className="list-group list-group-flush">
                            {fileInfos &&
                                fileInfos.map((file, index) => (
                                    <li className="list-group-item" key={index}>
                                        <a href={file.url}>{file.name}</a>
                                    </li>
                                ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}