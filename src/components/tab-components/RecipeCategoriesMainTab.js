import React from 'react';
import { Tabs, Tab, Col, Row, Nav } from 'react-bootstrap';
import '../../style-sheets/recipe-styles.css';
import AmericanRecipesList from '../recipe-page-component/list-components/AmericanRecipesList';
import SlowCookerRecipesList from '../recipe-page-component/list-components/SlowCookerRecipeList';
import AsianRecipesList from '../recipe-page-component/list-components/AsianRecipesLIst';
import BreakfeastRecipesList from '../recipe-page-component/list-components/BreakfeastRecipesList';
import BrazilianRecipesList from '../recipe-page-component/list-components/BrazillianRecipesList';
import ComfortFoodRecipesList from '../recipe-page-component/list-components/ComfortFoodRecipesList';
import DesertRecipesList from '../recipe-page-component/list-components/DesertRecipesList';
import FilipinoRecipesList from '../recipe-page-component/list-components/FilipinoRecipesList';
import HispanicRecipesList from '../recipe-page-component/list-components/HispanicRecipesList';
import ItalianRecipesList from '../recipe-page-component/list-components/ItalianRecipesList';
import SeafoodRecipesList from '../recipe-page-component/list-components/SeafoodRecipesList';

function RecipeCategoriesMainTab() {
    return (
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row>
                <Col sm={3}>
                    <Nav variant="pills" className="flex-column">
                        <Nav.Item className="recipe-tab">
                            <Nav.Link eventKey="american-recipes">American Recipes</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="recipe-tab">
                            <Nav.Link className="nav-link" eventKey="asian-recipes">Asian Recipes</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="recipe-tab">
                            <Nav.Link eventKey="breakfeast-recipes">Breakfeast Recipes</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="recipe-tab">
                            <Nav.Link eventKey="brazilian-recipes">Brazilian Recipes</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="recipe-tab">
                            <Nav.Link eventKey="comfort-recipes">Comfort Recipes</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="recipe-tab">
                            <Nav.Link eventKey="desert-recipes">Desert Recipes</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="recipe-tab">
                            <Nav.Link eventKey="filipino-recipes">Filipino Recipes</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="recipe-tab">
                            <Nav.Link eventKey="hispanic-recipes">Hispanic Recipes</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="recipe-tab">
                            <Nav.Link eventKey="italian-recipes">Italian Recipes</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="recipe-tab">
                            <Nav.Link eventKey="seafood-recipes">Seafood Recipes</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="recipe-tab">
                            <Nav.Link eventKey="slow-cooker-recipes">Slow Cooker Recipes</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Col>
                <Col sm={9}>
                    <Tab.Content>
                        <Tab.Pane eventKey="american-recipes">
                            <AmericanRecipesList />
                        </Tab.Pane>
                        <Tab.Pane eventKey="asian-recipes">
                            <AsianRecipesList />
                        </Tab.Pane>
                        <Tab.Pane eventKey="breakfeast-recipes">
                            <BreakfeastRecipesList />
                        </Tab.Pane>
                        <Tab.Pane eventKey="slow-cooker-recipes">
                            <SlowCookerRecipesList />
                        </Tab.Pane>
                        <Tab.Pane eventKey="brazilian-recipes">
                            <BrazilianRecipesList />
                        </Tab.Pane>
                        <Tab.Pane eventKey="comfort-recipes">
                            <ComfortFoodRecipesList />
                        </Tab.Pane>
                        <Tab.Pane eventKey="desert-recipes">
                            <DesertRecipesList />
                        </Tab.Pane>
                        <Tab.Pane eventKey="filipino-recipes">
                            <FilipinoRecipesList />
                        </Tab.Pane>
                        <Tab.Pane eventKey="hispanic-recipes">
                            <HispanicRecipesList />
                        </Tab.Pane>
                        <Tab.Pane eventKey="italian-recipes">
                            <ItalianRecipesList />
                        </Tab.Pane>
                        <Tab.Pane eventKey="seafood-recipes">
                            <SeafoodRecipesList />
                        </Tab.Pane>
                        <Tab.Pane eventKey="slow-cooker-recipes">
                            <SlowCookerRecipesList />
                        </Tab.Pane>
                    </Tab.Content>
                </Col>
            </Row>
            <br></br>
        </Tab.Container>
    );
}

export default RecipeCategoriesMainTab;