import React, { useState, useEffect } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import MusicService from '../../services/MusicService';
import MusicTabComponent from './../tab-components/MusicTabComponent';

const Song = props => {
    const initialState = {
        songId: null,
        title: "",
        artist: "",
        genre: ""
    };

    const [currentSong, setCurrentSong] = useState(initialState);
    const [message, setMessage] = useState("");

    const getSong = (songId) => {
        MusicService.getSongById(songId)
            .then(response => {
                setCurrentSong(response.data.song);
            })
            .catch(error => {
                console.log(error);
            });
    };

    useEffect(() => {
        getSong(props.match.params.songId);
    }, [props.match.params.songId]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setCurrentSong({ ...currentSong, [name]: value });
    };

    const updateSong = () => {
        MusicService.updateSongInformation(currentSong.songId, currentSong)
            .then(response => {
                alert("The song was updated successfully");
            })
            .catch(error => {
                console.log(error);
            });
    };

    const deleteSong = () => {
        MusicService.deleteSongInformation(currentSong.songId)
            .then(response => {
                props.history.push("/music");
            })
            .catch(error => {
                console.log(error);
            });
    };

    return (
        <div>
            <br></br>
            <MusicTabComponent />
            <div id="white-background">
                {currentSong ? (
                    <div className="edit form">
                        <h4>Music Library</h4>
                        <form className="update-book-container">
                            <div className="form-group">
                                <label htmlFor="name">Song Title</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="title"
                                    name="title"
                                    value={currentSong.title}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="author">Artist</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="artist"
                                    name="artist"
                                    value={currentSong.artist}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="descr">Genre</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="genre"
                                    name="genre"
                                    value={currentSong.genre}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </form>
                    </div>
                ) : (
                    <div>
                    <Button className="badge badge-danger mr-2" onClick={() => updateSong(true)}>
                        Update
                    </Button>
                </div>
                        )}

<br></br>
                <Row>
                    <Col md={4}>

                    </Col>
                    <Col md={2}>
                        <div>
                            <Button type="submit" size="lg" variant="dark" onClick={updateSong}>Update</Button>
                        </div>
                    </Col>
                    <Col md={2}>
                        <div>
                            <Button type="submit" size="lg" variant="outline-danger" onClick={deleteSong}>
                                Delete
                            </Button>
                        </div>
                    </Col>
                    <Col md={4}>

                    </Col>
                </Row>
                        <p>{message}</p>
                        </div>
        </div>
    )
}

export default Song;

