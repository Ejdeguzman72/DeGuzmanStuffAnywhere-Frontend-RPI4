import React, { useState, useEffect } from 'react';
import NewsroomService from '../../services/NewsService';
import { Button, Modal, Form } from 'react-bootstrap';

const JokeModal = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleOpen = () => {
        getJoke();
        setShow(true);
    }
    const [isFlipped, setIsFlipped] = useState(false);
    const initialJokeState = {
        punchline: "",
        message: "",
    }
    const [joke, setJoke] = useState(initialJokeState);

    const getJoke = () => {
        NewsroomService.getJoke()
            .then(response => {
                console.log(response.data)
                const jokeData = response.data.body[0];
                setJoke({
                    setup: jokeData.setup,
                    punchline: jokeData.punchline,
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
        getJoke();
    }, [])


    return (
        <div>
            <Button size="lg" onClick={handleOpen}>
                Joke Of The Day
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                className
            >
                <Modal.Header closeButton>
                    <Modal.Title>Joke</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <br></br>
                    <div className="modal-container">
                        <div className="form-group">
                            <p className="joke-text">{joke.setup}</p>
                            <p className="joke-text">{joke.punchline} </p>
                        </div>
                    </div>

                </Modal.Body>
            </Modal>
        </div>

    )
}


export default JokeModal;