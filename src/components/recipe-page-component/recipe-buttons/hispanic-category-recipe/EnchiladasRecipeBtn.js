import React from  'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const EnchiladasRecipeBtn = () => {
    return (
        <Button variant="outline-info">
            <Link to="/enchiladas-recipe">
                Click Here!
            </Link>
        </Button>
    )
}

export default EnchiladasRecipeBtn;