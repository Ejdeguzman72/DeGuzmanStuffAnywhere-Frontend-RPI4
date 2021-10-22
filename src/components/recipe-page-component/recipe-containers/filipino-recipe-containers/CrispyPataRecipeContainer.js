import React from 'react';
import { Container } from 'react-bootstrap';

const CrispyPataRecipeContainer = () => {
    return (
        <Container className="adobo-recipe-container">
            <h1 className="App">Crispy Pata (Deep Fried Pork)</h1>
            <h3>Ingredients</h3>
            <ul className="list">
                <li>1 piece whole pig leg cleaned</li>
                <li>6 pieces dried bay leaves</li>
                <li>2 tablespoons whole peppercorn</li>
                <li>4 pieces star anise optional</li>
                <li>6 teaspoons salt</li>
                <li>2 teaspoons ground black pepper</li>
                <li>2 teaspoons garlic powder</li>
                <li>12 cups water</li>
                <li>6 cups cooking oil</li>
            </ul>
            <h3>Directions</h3>
            <ol>
                <li>Pour water in a cooking pot then let boil.</li>
                <li>Put-in dried bay leaves, whole peppercorn, star anise, and 4 teaspoons of salt.</li>
                <li>Add the whole pig’s legs in the cooking pot then simmer until the leg becomes tender (about 45 to 60 minutes).</li>
                <li>Remove the tender leg from the cooking pot and set aside until the temperature goes down.</li>
                <li>Rub the leg with garlic powder, ground black pepper, and remaining salt. Let stand for 15 minutes to absorb the rub.</li>
                <li>Heat a clean large cooking pot (preferably with cover) and pour-in cooking oil.</li>
                <li>When the oil becomes hot, deep fry the rubbed pork leg. Continue cooking in medium heat until one side becomes crispy, and then cautiously flip the leg to crisp the other side. Note: Be extra careful in doing this procedure.</li>
                <li>Turn-off the heat; remove the crispy pork leg; and transfer it to a wide serving plate.</li>
                <li>Serve with atcharang papaya and soy sauce – vinegar dipping sauce.</li>
            </ol>
        </Container>
    )
}

export default CrispyPataRecipeContainer;