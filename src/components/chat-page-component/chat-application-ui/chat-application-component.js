import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import SockJsClient from './sockjs-client';
import NameComponent from './name-component';
import '../../../style-sheets/chat-page.css';
import { Col } from 'react-bootstrap';

export default class ChatApplicationComponent extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            messages: [],
            typedMessage: "",
            name: ""
        }
    }

    setName = (name) => {
        this.setState({
            name: name
        });
        console.log(`${this.state.name} was entered into the chat`);
    }

    sendMessage = (event) => {
        // event.preventDefault();
        this.clientRef.sendMessage('/app/user-all', JSON.stringify({
            name: this.state.name,
            message: this.state.typedMessage,
        }));
        this.setState({message: ''});
    }

    reset = () => {
        this.setState({
            message: ''
        })
    }

    displayMessages = () => {
        return (
            <div>
                {this.state.messages.map((msg) => {
                    return (
                        <div>
                            {this.state.name == msg.name ?
                                <div>
                                    <Col md={3}>
                                        <p className="title1"> {msg.name}</p>
                                    </Col>
                                    <Col md={7}>
                                        <p> {msg.message} </p>
                                    </Col>
                                </div> :
                                <div>
                                    <p className="title2"> {msg.name} : </p>
                                    <p> {msg.message} </p>
                                </div>
                            }
                        </div>)
                })}
            </div>
        )
    }

    render() {
        return (
            <div id="white-background">
                <br></br>
                <NameComponent setName={this.setName} />
                <div className="align-center">
                    <h1 className="tabs">DeGuzmanStuffAnywhere Chat Application</h1>
                    <br /><br />
                </div>
                <div className="align-center">
                    <p className="user-title">User : </p><p className="title1"> {this.state.name}</p>
                </div>
                <div className="align-center">
                    <br /><br />
                    <div className="chat-input-row">
                        <TextField id="outlined-basic" label="Enter Message to Send" variant="outlined" className="chat-input"
                            onChange={(event) => {
                                this.setState({ typedMessage: event.target.value });
                            }} />
                    </div>

                    <Button variant="contained" color="primary"
                        onClick={this.sendMessage}>Send</Button>
                </div>
                <br /><br />
                <div className="align-center-msg">
                    {this.displayMessages()}
                </div>
                <SockJsClient url='http://ec2-54-162-1-238.compute-1.amazonaws.com:8080/websocket-chat'
                    topics={['/topic/user']}
                    onConnect={() => {
                        console.log("connected");
                    }}
                    onDisconnect={() => {
                        console.log("Disconnected");
                    }}
                    onMessage={(msg) => {
                        var jobs = this.state.messages;
                        jobs.push(msg);
                        this.setState({ messages: jobs });
                        console.log(this.state);
                        this.reset();
                    }}
                    ref={(client => {
                        this.clientRef = client
                    })} />
            </div>
        )
    }

}