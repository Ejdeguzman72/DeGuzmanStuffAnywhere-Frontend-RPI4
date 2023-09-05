import Axios from 'axios';
import authHeader from './AuthHeader';

const getAllMusic = () => {
    return Axios.get('http://localhost:8080/music/all', { headers: authHeader() });
}

const getAllMusicPagination = (params) => {
    return Axios.get('http://localhost:8080/app/music/all-songs', { headers: authHeader(), params });
}

const getSongById = (songId) => {
    return Axios.get(`http://localhost:8080/app/music/song/id/${songId}`, { headers: authHeader() });
}

const getSongByTitle = (title) => {
    return Axios.get(`http://localhost:8080/app/music/song/title/${title}`, { headers: authHeader() });
}

const getSongByArtist = (artist) => {
    return Axios.get(`http://localhost:8080/app/music/all/artist/${artist}`, { headers: authHeader() });
}

const getSongsByGenre = (genre) => {
    return Axios.get(`http://localhost:8080/app/music/all/genre/${genre}`, { headers: authHeader() })
}

const getSongCount = () => {
    return Axios.get(`http://localhost:8080/app/music/count-of-songs`, { headers: authHeader() })
}

const addSongInformaton = (data) => {
    return Axios.post('http://localhost:8080/app/music/add-song-information', data, { headers: authHeader() });
}

const updateSongInformation = (songId,data) => {
    return Axios.put(`http://localhost:8080/app/music/update/${songId}`,data, { headers: authHeader() });
}

const deleteSongInformation = (songId) => {
    return Axios.delete(`http://localhost:8080/app/music/delete/${songId}`, { headers: authHeader() });
}

const deleteAllSongs = () => {
    return Axios.delete('http://localhost:8080/app/music/delete-all', { headers: authHeader() });
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