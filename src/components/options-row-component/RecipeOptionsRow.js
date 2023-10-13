import React from 'react';
import { Col, Row } from 'react-bootstrap';
import AddAutoShopModalComponent from '../auto-repair-shops-component/AddAutoShopModalComponent'
import ExportAutoShopCSV from '../auto-repair-shops-component/ExportAutoShopCSV';
import SearchAutoShopDropdown from '../dropdown-components/SearchAutoShopDropdown';
import ExportCSV from '../auto-repair-shops-component/ExportAutoShopCSV';
import AddRecipeModal from '../recipe-page-component/AddRecipeModal';
import RecipeCategoryBtn from '../recipe-page-component/RecipeCategoryBtn'

const RecipeOptionsRow = (autoShop,fileName) => {
    return (
        <Row>
            <Col md={4}>
                <AddRecipeModal />
            </Col>
            <Col md={4}>
                <RecipeCategoryBtn />
            </Col>
            <Col md={1}>

            </Col>
            <Col md={2}>
                <ExportCSV />
            </Col>
        </Row>
    )
}

export default RecipeOptionsRow;