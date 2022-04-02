import React from 'react';
import { Helmet } from 'react-helmet';
import { FooterComponent } from '../footer-component/footer-component';
import { Container } from 'react-bootstrap'
import '../../style-sheets/chat-page.css';
import ChatPageButtonComponent from './enter-chat-page-button-component';

export class ChatPageComponent extends React.Component<any,any> {
    render() {
        return(
            <div>
                <Helmet>
                    <title>Chat Application</title>
                </Helmet>
                <div id="white-background">
                    <br></br>
                    <br></br>
                    <Container className="chat-page-container">
                        <h1>DeGuzmanStuffAnywhere Chat</h1>
                        <hr></hr>
                        <p>Click the button to enter the chat application.</p>
                        <p>Talk with family around the world, ranging from New Jersey, New York, Florida, and Haiti.</p>
                        <p>Have fun, catch up, make jokes, share memes, share memories, etc</p>
                        <p>If any trouble, contact EJ DeGuzman (201-546-0750) / (ejdeguzmna72@gmail.com)</p>
                        <ChatPageButtonComponent />
                    </Container>
                </div>
                <FooterComponent />
            </div>
        )
    }
}