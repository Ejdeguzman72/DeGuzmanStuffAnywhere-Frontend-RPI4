import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';

const Recipe = ({ recipe }) => {
    return (
        <Card>
            <Accordion.Toggle as={Card.Header} eventKey={recipe.recipeId.toString()} className="accordion-header">
                {recipe.name}
            </Accordion.Toggle>
            <Accordion.Collapse eventKey={recipe.recipeId.toString()}>
                <Card.Body className="accordion-body">
                    <p>Description: {recipe.descr}</p>
                    <h3>Ingredients:</h3>
                    <ul >
                        {recipe.ingredients.map((ingredient, index) => (
                            <li key={index} className='accordion-list-item'>{ingredient}</li>
                        ))}
                    </ul>
                    <h3>Directions:</h3>
                    <ol>
                        {recipe.directions.map((step, index) => (
                            <li key={index} className='accordion-list-item'>{step}</li>
                        ))}
                    </ol>
                </Card.Body>
            </Accordion.Collapse>
        </Card>
    );
};


export default Recipe;