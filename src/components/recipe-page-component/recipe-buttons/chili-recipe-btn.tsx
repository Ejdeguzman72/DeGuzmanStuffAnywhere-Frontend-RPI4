import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const ChiliBtnComponent  =  () => {
    return (
        <Button variant="outline-info">
            <Link to="/chili-recipe">
                Click Here!
            </Link>
        </Button>
    )
}

export default ChiliBtnComponent;