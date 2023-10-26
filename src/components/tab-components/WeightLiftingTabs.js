import React from 'react';
import { Tabs, Tab, Col, Row, Nav } from 'react-bootstrap';
import '../../style-sheets/recipe-styles.css';
import AbExerciseList from '../gym-tracker/pagination/AbExerciseList';
import BackExerciseList from '../gym-tracker/pagination/BackExerciseList';
import BicepsExerciseList from '../gym-tracker/pagination/BicepsExerciseList';
import ChestExerciseList from '../gym-tracker/pagination/ChestExerciseList';
import DeltoidsExerciseList from '../gym-tracker/pagination/DeltoidsExerciseList';
import ShouldersExerciseList from '../gym-tracker/pagination/ShouldersExerciseList';
import LegsExerciseList from '../gym-tracker/pagination/LegsExerciseList';

function WeightliftingTabs() {
    return (
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row>
                <Col sm={3}>
                    <Nav variant="pills" className="flex-column">
                        <Nav.Item className="recipe-tab">
                            <Nav.Link eventKey="abdominals-category">Abdominals</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="recipe-tab">
                            <Nav.Link className="nav-link" eventKey="back-category">Back</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="recipe-tab">
                            <Nav.Link eventKey="biceps-category">Biceps</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="recipe-tab">
                            <Nav.Link eventKey="chest-category">Chest</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="recipe-tab">
                            <Nav.Link eventKey="deltoids-category">Deltoids</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="recipe-tab">
                            <Nav.Link eventKey="shoulders-category">Shoulders</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="recipe-tab">
                            <Nav.Link eventKey="legs-category">Legs</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Col>
                <Col sm={9}>
                    <Tab.Content>
                        <Tab.Pane eventKey="abdominals-category">
                            <AbExerciseList />
                        </Tab.Pane>
                        <Tab.Pane eventKey="back-category">
                            <BackExerciseList />
                        </Tab.Pane>
                        <Tab.Pane eventKey="biceps-category">
                            <BicepsExerciseList />
                        </Tab.Pane>
                        <Tab.Pane eventKey="chest-category">
                            <ChestExerciseList />
                        </Tab.Pane>
                        <Tab.Pane eventKey="deltoids-category">
                            <DeltoidsExerciseList />
                        </Tab.Pane>
                        <Tab.Pane eventKey="shoulders-category">
                            <ShouldersExerciseList />
                        </Tab.Pane>
                        <Tab.Pane eventKey="legs-category">
                            <LegsExerciseList />
                        </Tab.Pane>
                    </Tab.Content>
                </Col>
            </Row>
            <br></br>
        </Tab.Container>
    );
}

export default WeightliftingTabs;