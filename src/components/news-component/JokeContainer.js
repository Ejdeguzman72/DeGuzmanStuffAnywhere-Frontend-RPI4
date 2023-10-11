import React, { useState, useEffect } from 'react';
import NewsroomService from '../../services/NewsService';
import { Button } from 'react-bootstrap'
import ReactCardFlip from 'react-card-flip';

const JokeContainer = () => {
    const [isFlipped, setIsFlipped] = useState(false);
    const initialJokeState = {
        setup: "",
        punchline: "",
        message: "",
    }
    const [joke, setJoke] = useState(initialJokeState);

    const getWeather = () => {
        NewsroomService.getJoke()
            .then(response => {
                console.log(response.data)

                setJoke({
                    setup: response.data.setup,
                    punchline: response.data.punchline,
                    message: response.data.message
                })
                console.log(joke)
            })
            .catch(error => {
                setJoke({
                    setup: "Exceeded the number of API calls to DailyJoke API"
                })
                console.log(error)
            }, []);
    }

    useEffect(() => {
        // getWeather();
    }, [])

    return (
        <div>
            <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
                <div style={{
                    width: '300px',
                    height: '200px',
                    background: '#d7fbda',
                    fontSize: '40px',
                    color: 'black',
                    margin: '20px',
                    borderRadius: '4px',
                    textAlign: 'center',
                    padding: '20px',
                    borderRadius: '50px',
                    boxShadow: '5px 10px 18px #888888',
                    borderColor: 'black',
                    backgroundColor: '#FFF5EE',
                    fontFamily: 'fantasy',
                }}>
                    <h2>Random Joke</h2>
                    <p>{joke.setup}</p>
                    <Button variant="info" onClick={() => setIsFlipped(!isFlipped)}>Click</Button>
                </div>
                <div style={{
                    width: '300px',
                    height: '200px',
                    background: '#fbd7f8',
                    fontSize: '40px',
                    color: 'blue',
                    margin: '20px',
                    borderRadius: '4px',
                    textAlign: 'center',
                    padding: '20px',
                    borderRadius: '50px',
                    boxShadow: '5px 10px 18px #888888',
                    borderColor: 'black',
                    backgroundColor: '#FFF5EE',
                    fontFamily: 'fantasy',
                }}>
                    <p>{joke.punchline}</p>
                    <Button variant="info" onClick={() => setIsFlipped(!isFlipped)}>Click</Button>
                </div>
            </ReactCardFlip>
        </div>
    )
}

export default JokeContainer;

