import React from  'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AdoboBtnComponent = () => {
    return (
        <Button variant="outline-info">
            <Link to="/adobo-recipe">
                Click Here!
            </Link>
        </Button>
    )
}

export default AdoboBtnComponent;