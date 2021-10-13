import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ChickenParmesanBtn  =  () => {
    return (
        <Button variant="outline-info">
            <Link to="chicken-parmesan-recipe">
                Click Here!
            </Link>
        </Button>
    )
}

export default ChickenParmesanBtn;