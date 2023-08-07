import Axios from 'axios';

const getAllMusic = () => {
    return Axios.get('http://localhost:8080/music/all');
}

const getAllMusicPagination = (params) => {
    return Axios.get('http://localhost:8080/app/music/all-songs', { params });
}

const getSongById = (songId) => {
    return Axios.get(`http://localhost:8080/app/music/song/id/${songId}`);
}

const getSongByTitle = (title) => {
    return Axios.get(`http://localhost:8080/app/music/song/title/${title}`);
}

const getSongByArtist = (artist) => {
    return Axios.get(`http://localhost:8080/app/music/all/artist/${artist}`,);
}

const getSongsByGenre = (genre) => {
    return Axios.get(`http://localhost:8080/app/music/all/genre/${genre}`)
}

const getSongCount = () => {
    return Axios.get(`http://localhost:8080/app/music/count-of-songs`)
}

const addSongInformaton = (data) => {
    return Axios.post('http://localhost:8080/app/music/add', data);
}

const updateSongInformation = (songId,data) => {
    return Axios.put(`http://localhost:8080/app/music/update/${songId}`,data);
}

const deleteSongInformation = (songId) => {
    return Axios.delete(`http://localhost:8080/app/music/delete/${songId}`);
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