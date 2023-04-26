import Axios from 'axios';

const getAllMusic = () => {
    return Axios.get('http://localhost:8080/music/all');
}

const getAllMusicPagination = (params) => {
    return Axios.get('http://localhost:8080/app/music/all-songs', { params });
}

const getSongById = (data) => {
    return Axios.get(`http://localhost:8080/app/music/song/id`,data);
}

const getSongByTitle = (title) => {
    return Axios.get(`http://localhost:8080/app/music/song/title/${title}`);
}

const getSongByArtist = (data) => {
    return Axios.get(`http://localhost:8080/app/music/all/artist`,data);
}

const getSongsByGenre = (data) => {
    return Axios.get(`http://localhost:8080/app/music/all/genre`,data)
}

const getSongCount = () => {
    return Axios.get(`http://localhost:8080/app/music/count-of-songs`)
}

const addSongInformaton = (data) => {
    return Axios.post('http://localhost:8080/app/music/add-song-information', data);
}

const updateSongInformation = (data) => {
    return Axios.put(`http://localhost:8080/app/music/update`,data);
}

const deleteSongInformation = (data) => {
    return Axios.delete(`http://localhost:8080/app/music/delete`,data);
}

const deleteAllSongs = () => {
    return Axios.delete('http://localhost:8080/app/music/delete-all');
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