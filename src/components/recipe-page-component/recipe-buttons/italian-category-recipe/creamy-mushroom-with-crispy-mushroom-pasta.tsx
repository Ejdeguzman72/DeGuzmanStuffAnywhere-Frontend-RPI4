import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const creamyPastaAndCrunchyMushroomButton = () => {
    return (
        <div>
            <Button variant="outline-info">
                <Link to="/creamy-pasta-and-crispy-mushrooms-recipe">
                    Click Here
                </Link>
            </Button>
        </div>
    )
}

export default creamyPastaAndCrunchyMushroomButton;