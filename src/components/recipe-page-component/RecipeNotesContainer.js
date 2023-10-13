import React from 'react';
import { Container } from 'react-bootstrap';
import '../../style-sheets/recipe-styles.css';

export class RecipeNotesContainerComponent extends React.Component {
    render() {
        return (
            <Container className="recipe-container">
                <p>
                    I look at cooking as art so I really don't look to measure things that often.So when I have an amount listed,  it is just as a reference. 
                    Since cooking is an art, modify the amounts based on your tastes.
                    In doing this, it takes a little bit of experience cooking the dishes listed. 
                </p>
                <p>
                    I really try to use a whole item when I cook so  it doesn't go to waste. Because of this, when I buy ingredients, I look for appropriate sizes.
                    Some  dishes mayneed a large onion while others may need a small onion as an example. Probably the one item that I don't do this for is garlic since
                    you  only need a few cloves off a head of garlic to cook.
                </p>
            </Container>
        )
    }
}