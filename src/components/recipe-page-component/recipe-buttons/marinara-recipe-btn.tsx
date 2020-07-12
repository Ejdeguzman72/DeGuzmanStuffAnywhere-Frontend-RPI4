import React from 'react';
import { render } from '@testing-library/react';
import { Button } from "react-bootstrap";
import { Link } from 'react-router-dom';

const MarinaraRecipeBtnComponent = () => {
    return (
    <Button variant="outline-info">
        <Link to="/marinara-sauce">
            Click Here!
        </Link>
    </Button>
    )}

export default MarinaraRecipeBtnComponent;