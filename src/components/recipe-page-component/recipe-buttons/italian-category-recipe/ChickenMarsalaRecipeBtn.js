import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ChickenMarsalaBtn  =  () => {
    return (
        <Button variant="outline-info">
            <Link to="chicken-marsala-recipe">
                Click Here!
            </Link>
        </Button>
    )
}

export default ChickenMarsalaBtn;