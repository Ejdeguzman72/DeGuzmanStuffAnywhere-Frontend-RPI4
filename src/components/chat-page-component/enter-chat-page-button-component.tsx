import React from 'react';
import { render } from '@testing-library/react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ChatPageButtonComponent = () => {
    return <Button variant="dark">
        <Link to="/deguzman-family-chat">
            Enter Chat
        </Link>
    </Button>
}

export default ChatPageButtonComponent;