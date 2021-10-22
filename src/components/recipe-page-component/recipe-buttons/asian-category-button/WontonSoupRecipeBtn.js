import React from  'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const WontonSoupRecipeBtn = () => {
    return (
        <Button variant="outline-info">
            <Link to="/wonton-soup-recipe">
                Click Here!
            </Link>
        </Button>
    )
}

export default WontonSoupRecipeBtn;