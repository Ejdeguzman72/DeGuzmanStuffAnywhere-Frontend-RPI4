import React from 'react';
import { Container } from 'react-bootstrap';

const KoreanStyleRibsContainer = () => {
    return (
        <Container className="adobo-recipe-container">
            <h1 className="App">Crispy Pata (Deep Fried Pork)</h1>
            <h3>Ingredients</h3>
            <ul className="list">
                <li>1/2 cup soy sauce</li>
                <li>2 Tbsp. rice vinegar</li>
                <li>2 Tbsp. sesame oil</li>
                <li>2 Tbsp. red pepper powder</li>
                <li>8 garlic cloves, minced</li>
                <li>1 Tbsp. grated ginger</li>
                <li>1 cup onions</li>
                <li>3 lbs baby back ribs</li>
                <li>1/4 cup honey</li>
                <li>sesame seeds for garnish</li>
                <li>chopped scallions for garnish</li>
            </ul>
            <h3>Directions</h3>
            <ol>
                <li>Combine marinade ingredients in a bowl. Pour marinade over ribs and let them marinate for at least four hours.</li>
                <li>After marinating, place ribs on baking dish. Reserve the marinade for later. Bake ribs at 325°F/160°C for two and a half to three hours</li>
                <li>Pour the leftover marinade into a saucepan, add the honey, and bring to a boil to form a glaze. Set aside</li>
                <li>After two and half to three hours, remove the ribs from the oven. Pour the glaze over the ribs and broil for 5 to 10 minutes.</li>
                <li>Rub the leg with garlic powder, ground black pepper, and remaining salt. Let stand for 15 minutes to absorb the rub.</li>
                <li>Cut up the ribs, sprinkle sesame seeds over, and garnish with scallions.</li>
            </ol>
        </Container>
    )
}

export default KoreanStyleRibsContainer;