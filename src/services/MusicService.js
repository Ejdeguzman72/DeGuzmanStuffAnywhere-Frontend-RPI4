import Axios from 'axios';

const getAllMusic = () => {
    return Axios.get('http://localhost:8080/music/all');
}

const getAllMusicPagination = (params) => {
    return Axios.get('http://localhost:8080/app/music/all-songs', { params });
}

const getSongById = (song_id) => {
    return Axios.get(`http://localhost:8080/app/music/song/${song_id}`);
}

const getSongByTitle = (title) => {
    return Axios.get(`http://localhost:8080/app/music/song/title/${title}`);
}

const getSongByArtist = (artist) => {
    return Axios.get(`http://localhost:8080/app/music/song/artist/${artist}`);
}

const addSongInformaton = (data) => {
    return Axios.post('http://localhost:8080/app/music/add-song-information', data);
}

const updateSongInformation = (song_id,data) => {
    return Axios.put(`http://localhost:8080/app/music/song/${song_id, data}`);
}

const deleteSongInformation = (song_id) => {
    return Axios.delete(`http://localhost:8080/app/music/song/${song_id}`);
}

const deleteAllSongs = () => {
    return Axios.delete('http://localhost:8080/app/music/delete-all-songs');
}

export default {
    getAllMusic,
    getAllMusicPagination,
    getSongById,
    getSongByTitle,
    getSongByArtist,
    addSongInformaton,
    updateSongInformation,
    deleteSongInformation,
    deleteAllSongs
}