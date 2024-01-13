import Axios from 'axios';

const getWeather = () => {
    return Axios.get('http://192.168.1.36:8081/app/jokes/joke');
}

const getTopHeadlines = () => {
    return Axios.get('http://192.168.1.36:8081/app/news/all');
}

const getBusinessNews = () => {
    return Axios.get('http://192.168.1.36:8081/app/news/business/all')
}

const getFinanceNews = () => {
    return Axios.get('http://192.168.1.36:8081/app/news/finance/all')
}

const getPoliticalNews = () => {
    return Axios.get('http://192.168.1.36:8081/app/news/political/all')
}

const getSportsNews = () => {
    return Axios.get('http://192.168.1.36:8081/app/news/sports/all')
}

const getTechnologyNews = () => {
    return Axios.get('http://192.168.1.36:8081/app/news/technology/all')
}

const searchNewsTopic = (topic) => {
    return Axios.get(`http://192.168.1.36:8081/app/news/search/${topic}`)
}

const getWeatherForCity = (city) => {
    return Axios.get(`http://192.168.1.36:8081/app/weather/city/${city}`);
}

const getStockInfo = (stock) => {
    return Axios.get(`http://192.168.1.36:8081/app/stocks/search/${stock}`);
}

const getJoke = () => {
    return Axios.get('http://192.168.1.36:8081/app/jokes/joke')
}

export default {
    getWeather,getTopHeadlines,getBusinessNews,getFinanceNews,getPoliticalNews,
    getSportsNews,getTechnologyNews,searchNewsTopic,getWeatherForCity,getStockInfo,
    getJoke
}