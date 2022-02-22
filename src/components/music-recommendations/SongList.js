import React, { useState, useEffect } from 'react';
import MusicService from '../../services/MusicService';
import { Link } from 'react-router-dom';
import { Row, Button } from 'react-bootstrap';
import AddSongModal from './AddSongModal'
import Pagination from "@material-ui/lab/Pagination";

const SongList = () => {
    const [songs, setSong] = useState([]);
    const [currentSong, setCurrentSong] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(-1);
    const [searchTitle, setSearchTitle] = useState("");

    const [page, setpage] = useState(1);
    const [count, setCount] = useState(0);
    const [pageSize, setPageSize] = useState(10);

    const onChangeSearchTitle = (event) => {
        const searchTitle = event.target.value;
        setSearchTitle(searchTitle);
    };

    const pageSizes = [10, 15, 20];

    const getRequestParams = (searchTitle, page, pageSize) => {
        let params = {};

        if (searchTitle) {
            params['title'] = searchTitle;
        }

        if (page) {
            params['page'] = page - 1;
        }

        if (pageSize) {
            params['size'] = pageSize;
        }

        return params;
    }

    const retrieveMusic = () => {
        const params = getRequestParams(searchTitle, page, pageSize);

        MusicService.getAllMusicPagination(params)
            .then(response => {
                const { songs, totalPages } = response.data;
                setSong(songs);
                setCount(totalPages);
                console.log(response.data + "skjdhfkjsdhfkjskjdfh");
            })
            .catch(error => {
                console.log(error);
            });
    };

    useEffect(retrieveMusic, [page, pageSize]);

    const refreshList = () => {
        retrieveMusic();
        setCurrentSong(null);
        setCurrentIndex(-1);
    }

    const handlePageChange = (event, value) => {
        setpage(value);
    }

    const handlePageSizeChange = (event) => {
        setPageSize(event.target.value);
        setpage(1);
    }

    const setActiveMusic = (music, index) => {
        setCurrentSong(music);
        console.log(music + " this is the music");
        setCurrentIndex(index);
    }

    const removeAllMusic = () => {
        MusicService.deleteAllSongs()
            .then(response => {
                setSong(response.data);
                console.log(response.data);

                window.location.reload();
            })
            .catch(error => {
                console.log(error);
            });
    };

    const findByName = () => {
        MusicService.getSongByTitle(searchTitle)
            .then(response => {
                setSong(response.data);
                console.log(response.data);
            })
    }

    return (
        <div className="list row">
            <div className="col-md-8">
                <div className="input-group mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search By Title"
                        value={searchTitle}
                        onChange={onChangeSearchTitle}
                    />
                    <div className="input-group-append">
                        <button
                            className="btn btn-outline-secondary"
                            type="button"
                            onClick={findByName}
                        >
                            Search
                        </button>
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <h4>Music Library</h4>


                <div className="mt-3">
                    {"Items per Page: "}
                    <select onChange={handlePageSizeChange} value={pageSize}>
                        {pageSizes.map((size) => (
                            <option key={size} value={size}>
                                {size}
                            </option>
                        ))}
                    </select>

                    <Pagination
                        className="my-3"
                        count={count}
                        page={page}
                        siblingCount={1}
                        boundaryCount={1}
                        variant="outlined"
                        shape="rounded"
                        onChange={handlePageChange}
                    />
                </div>


                <ul className="list-group">
                    {songs &&
                        songs.map((song, index) => (
                            <li
                                className={
                                    "list-group-item selected-book" + (index === currentIndex ? "active" : "")

                                }
                                onClick={() => setActiveMusic(song, index)}
                                key={index}
                            >
                                {song.artist + ' ' + '- ' + song.genre}
                            </li>
                        ))}
                </ul>
                <br></br>
                <Row>
                    <AddSongModal />
                    <Button
                        size="sm"
                        className="btn-danger delete-all-btn"
                        onClick={removeAllMusic}
                    >
                        Delete All
                    </Button>
                </Row>
            </div>
            <div className="col-md-6">
                {currentSong ? (
                    <div>
                        <h4>Music Library</h4>
                        <div>
                            <label>
                                <strong>Title:</strong>
                            </label>{" "}
                            {currentSong.title}
                        </div>
                        <div>
                            <label>
                                <strong>Arist:</strong>
                            </label>{" "}
                            {currentSong.artist}
                        </div>
                        <div>
                            <label>
                                <strong>Genre:</strong>
                            </label>{" "}
                            {currentSong.genre}
                        </div>

                        <Link
                            to={"/update-music/" + currentSong.song_id}
                            className="badge badge-warning"
                        >
                            Edit
                        </Link>
                    </div>
                ) : (
                    <div>
                        <br></br>
                        <p>Please click on a tutorial...</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default SongList;