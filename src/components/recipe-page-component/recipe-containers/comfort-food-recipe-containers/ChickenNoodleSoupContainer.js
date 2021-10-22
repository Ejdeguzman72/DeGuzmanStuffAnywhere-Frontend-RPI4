import React from 'react';
import { Container } from 'react-bootstrap';

const ChickenNoodleSoupContainer = () => {
    return (
        <Container className="beefaroni-recipe-container">
            <h1 className="App">Chicken Noodle Soup</h1>
            <h3>Ingredients</h3>
            <ul className="list">
                <li>In your slow cooker, combine 1 chopped onion, 3 chopped carrots, 3 chopped celery stalks, 3 minced garlic cloves and 3 boneless, skinless chicken breasts that have been cut into ½-inch cubes.</li>
                <li>Add 5½ cups chicken broth and 1 bay leaf; season with salt and pepper.</li>
                <li>3 chopped celery stalks</li>
                <li>Cook on low for 6 hours.</li>
                <li>Add 2½ cups egg noodles and 1 cup frozen peas</li>
                <li>Cook until the noodles are tender, 6 to 7 minutes.</li>
                <li>Stir in ¼ cup chopped fresh parsley. Serve immediately.</li>
            </ul>
            <br></br>
        </Container>
    )
}

export default ChickenNoodleSoupContainer;