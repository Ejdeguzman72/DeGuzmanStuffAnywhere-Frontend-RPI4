import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ChatSquare = () => {
    return (
        <div>
            <Button className="square2">
                <Link to="/chat">
                    Chat With Family
                </Link>
            </Button>
        </div>
    )
}

export default ChatSquare;