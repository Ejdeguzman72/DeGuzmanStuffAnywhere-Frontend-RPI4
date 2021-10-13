import React from  'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const LecheFlanBtn = () => {
    return (
        <Button variant="outline-info">
            <Link to="/leche-flan-recipe">
                Click Here!
            </Link>
        </Button>
    )
}

export default LecheFlanBtn;