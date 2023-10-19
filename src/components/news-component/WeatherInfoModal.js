import React, { useState, useEffect } from 'react';
import NewsroomService from '../../services/NewsService';
import { Button, Modal, Form } from 'react-bootstrap';

const WeatherInfoModal = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleOpen = () => setShow(true);

    const [weather, setWeather] = useState({
        clouds: "",
        main: "",
        description: "",
        wind: "",
        city: "",
        mainTemp: 0,
        minTemp: 0,
        maxTemp: 0,
        humidity: 0,

    });

    const convertKelvinToFahrenheit = (kelvin) => {
        return Math.round((kelvin - 273.15) * 1.8 + 32)
    }

    const getWeather = () => {
        const city = "New York"
        NewsroomService.getWeatherForCity(city)
            .then(response => {
                console.log(response.data)
                const data = response.data
                setWeather({
                    clouds: data.clouds.all,
                    main: data.weather[0].main,
                    description: data.weather[0].description,
                    city: data.name,
                    mainTemp: convertKelvinToFahrenheit(data.main.temp),
                    minTemp: convertKelvinToFahrenheit(data.main.temp_min),
                    maxTemp: convertKelvinToFahrenheit(data.main.temp_max),
                    humidity: data.main.humidity
                })
            })
            .catch(error => {
                console.log(error)
            }, []);
    }

    useEffect(() => {
        getWeather();
    }, [])

    return (
        <div>
            <Button size="lg" onClick={handleOpen}>
                Weather
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                className
            >
                <Modal.Header closeButton>
                    <Modal.Title>Weather</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <br></br>
                    <div className="modal-container">
                        <div className="form-group">
                            <h2>Weather: {weather.city}</h2>
                            <p>Main: {weather.main} </p>
                            <p>Description: {weather.description}</p>
                            <p>Main Temperature: {weather.mainTemp} F</p>
                            <p>Minimum Forecast: {weather.minTemp} F</p>
                            <p>Max Forecast: {weather.maxTemp} F</p>
                            <p>Humidity: {weather.humidity}</p>
                            <p>Clouds: {weather.clouds}</p>
                        </div>
                    </div>

                </Modal.Body>
            </Modal>
        </div>

    )
}


export default WeatherInfoModal;