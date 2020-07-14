import React from 'react';
import { Container } from 'react-bootstrap';

const BeefStewRecipeContainerComponent = () => {
    return (
        <Container className="beef-stew-recipe-container">
            <h1>Beef Stew (Red Sauce)</h1>
            <p>Ingredients</p>
            <ul>
                <li>Beef Chuck</li>
                <li>Tomato</li>
                <li>Carrots</li>
                <li>Celery</li>
                <li>Green Pepper</li>
                <li>Onion</li>
            </ul>
            <p>Directions</p>
            <ol>
                <li>Chop onion</li>
                <li>Slice beef into small slices</li>
                <li>Add beef</li>
                <li>Add nature's seasoning and allow beef to brown</li>
                <li>Chop tomato and place into pot</li>
                <li>Cut celery into small pieces and add to pot</li>
                <li>Cut pepper into small  pieces and place in pot</li>
                <li>Cover and allow tosimme until  carots are soft</li>
                <li>can eat as is or over rice</li>
            </ol>
            <br></br>
            <h1>Brown Sauce</h1>
            <p>Ingredients</p>
            <ul>
                <li>Beef Chuck</li>
                <li>Onion</li>
                <li>Potatoes</li>
                <li>Carrots</li>
                <li>Celery</li>
                <li>Brown gravy mix</li>
            </ul>
            <p>Directions</p>
            <ol>
                <li>slice beef chuck into small cubes</li>
                <li>chop onion</li>
                <li>peel potatoes and carrots. slice into bit sized pieces</li>
                <li>slice celery into bit sized pieces</li>
                <li>place onion in pot with oil and saute the onion</li>
                <li>add cubedbeef and allow to browm</li>
                <li>add nature's seasoning</li>
                <li>add potatoes, carrots, and celery</li>
                <li>place contents of brown gravy mix into a glass and add water</li>
                <li>mix and add to pot</li>
                <li>allow to simmer until carrots are soft</li>
                <li>serve as is or with rice</li>
            </ol>
        </Container>
    )
}

export default BeefStewRecipeContainerComponent;