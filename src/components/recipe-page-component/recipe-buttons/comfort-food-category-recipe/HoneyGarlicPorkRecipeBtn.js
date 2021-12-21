import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const HoneyGarlicPorkRecipeBtn  =  () => {
    return (
        <Button variant="outline-info">
            <Link to="/honey-garlic-pork">
                Click Here!
            </Link>
        </Button>
    )
}

export default HoneyGarlicPorkRecipeBtn;