import React from 'react';
import { Container } from 'react-bootstrap';
import '../../style-sheets/utility-tracker-page.css';

const UtilityContainerComponent = () => {
    return (
        <div>
            <Container className="utility-container">
                <h1>Utility Information</h1>
                <p>This sections lists utilities used by the group. Information that is mentioned inclues,
                    name of entity, phone number, and expected due date. Website link is also provided 
                    for easy access.
                </p>
            </Container>
        </div>
    )
}

export default UtilityContainerComponent;