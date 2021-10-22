import React from  'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const KoreanStyleRibsBtn = () => {
    return (
        <Button variant="outline-info">
            <Link to="/korean-style-ribs-recipe">
                Click Here!
            </Link>
        </Button>
    )
}

export default KoreanStyleRibsBtn;