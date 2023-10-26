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

function CardioCategoryTabs() {
    return (
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row>
                <Col sm={3}>
                    <Nav variant="pills" className="flex-column">
                        <Nav.Item className="recipe-tab">
                            <Nav.Link eventKey="bike-category">Biking</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="recipe-tab">
                            <Nav.Link className="nav-link" eventKey="run-category">Running</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="recipe-tab">
                            <Nav.Link eventKey="swim-category">Swimming</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Col>
                <Col sm={9}>
                    <Tab.Content>
                        <Tab.Pane eventKey="bike-category">
                            
                        </Tab.Pane>
                        <Tab.Pane eventKey="run-category">
                            
                        </Tab.Pane>
                        <Tab.Pane eventKey="swim-category">
                            
                        </Tab.Pane>
                    </Tab.Content>
                </Col>
            </Row>
            <br></br>
        </Tab.Container>
    );
}

export default CardioCategoryTabs;