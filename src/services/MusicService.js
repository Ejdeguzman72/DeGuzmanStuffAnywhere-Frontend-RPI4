import Axios from 'axios';

const getAllMusic = () => {
    return Axios.get('localhost:8080/music/all');
}

const getAllMusicPagination = (params) => {
    return Axios.get('localhost:8080/app/music/all-music', { params });
}

const getSongById = (song_id) => {
    return Axios.get(`/song/${song_id}`);
}

const getSongByTitle = (title) => {
    return Axios.get(`localhost:8080/app/music/song/title/${title}`);
}

const getSongByArtist = (artist) => {
    return Axios.get(`localhost:8080/app/music/song/artist/${artist}`);
}

const addSongInformaton = (data) => {
    return Axios.post('localhost:8080/app/music/add-music', data);
}

const updateSongInformation = (song_id,data) => {
    return Axios.put(`localhost:8080/app/music/song/${song_id, data}`);
}

const deleteSongInformation = (song_id) => {
    return Axios.delete(`localhost:8080/app/music/song/${song_id}`);
}

const deleteAllSongs = () => {
    return Axios.delete('localhost:8080/app/music/delete-all');
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