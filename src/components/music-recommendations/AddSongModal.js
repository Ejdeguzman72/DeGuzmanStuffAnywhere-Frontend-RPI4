import React, { useState } from 'react';
import BookService from '../../services/BookService';
import { Button, Modal, Form } from 'react-bootstrap';
import { data } from 'jquery';
import MusicService from '../../services/MusicService';
import '../../style-sheets/music.css';
import GenreDropdownComponent from './../dropdown-components/GenreDropdown';

const AddSongModal = () => {
    const initialState = {
        song_id: 0,
        title: "",
        artist: "",
        genre: ""
    };

    const [music, setMusic] = useState(initialState);
    const [submitted, setSubmitted] = useState(false);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setMusic({ ...music, [name]: value });
    };

    const saveSong = () => {
        let data = {
            song_id: music.song_id,
            title: music.title,
            artist: music.artist,
            genre: music.genre
        };

        MusicService.addSongInformaton(data)
            .then(response => {
                setMusic({
                    song_id: response.data.song_id,
                    title: response.data.title,
                    artist: response.data.artist,
                    genre: response.data.genre
                });
                setSubmitted(true);

                window.location.reload();
            })
            .catch(error => {
                console.log(error);
            });
    }

    const newSong = () => {
        setMusic(initialState);
        setSubmitted(false);
    }

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleOpen = () => setShow(true);

    return (
        <div>
            <Button className="add-music-btn" variant="info" size="sm" onClick={handleOpen}>
                Add Music
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                className
            >
                <Modal.Header closeButton>
                    <Modal.Title>Add Music</Modal.Title>
                </Modal.Header>

                {submitted ? (
                    <Modal.Body>
                        <div>
                            <h4>{music.title} has been added</h4>
                            <Button className="btn btn-success" onClick={newSong} size="lg" variant="info">
                                Add
                                </Button>
                        </div>
                    </Modal.Body>
                ) : (
                    <Modal.Body>
                        Please fill out the following information:
                        <br></br>
                        <div className="modal-container">
                            <div className="form-group">
                                <label htmlFor="name">Title</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="title"
                                    required
                                    value={music.title}
                                    onChange={handleInputChange}
                                    name="title"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="artist">Artist</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="artist"
                                    required
                                    value={music.artist}
                                    onChange={handleInputChange}
                                    name="artist"
                                />
                            </div>
                            <Form.Control as="select" name="genre" className="form-control" onChange={handleInputChange} >
                                <option value="" disabled selected>Select a genre</option>
                                <option value="Rock">Rock</option>
                                <option value="Pop">Country</option>
                                <option value="Classical">Classical</option>
                                <option value="Electronic">Electronic</option>
                                <option value="Lofi Beats">Lofi Beats</option>
                                <option value="Metal">Metal</option>
                                <option value="Blues">Blues</option>
                                <option value="Rap">Rap</option>
                                <option value="Hip Hop">Hip Hop</option>
                                <option value="R&B">R&B</option>
                                <option value="Jazz">Jazz</option>
                            </Form.Control><br></br>
                        </div>

                    </Modal.Body>
                )}
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={saveSong}>Submit</Button>
                </Modal.Footer>
            </Modal>
        </div>

    )
}


export default AddSongModal;