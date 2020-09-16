import React from 'react';
import { Table, Pagination } from 'react-bootstrap';
import MarinaraRecipeBtnComponent from './recipe-buttons/marinara-recipe-btn';
import MeatsauceBtnComponent from './recipe-buttons/meat-sauce-btn';
import BeefaroniBtnComponent from './recipe-buttons/beefaroni-recipe-btn';
import ChiliBtnComponent from './recipe-buttons/chili-recipe-btn';
import BeefStewBtnComponent from './recipe-buttons/beef-stew-recipe-btn';
import FajitasBtnComponent from './recipe-buttons/fajitas-recipe-btn-component';
import MeatloafbtnComponent from './recipe-buttons/mealoaf-recipe-btn-component';
import BlackEyedPeasAndHamHock from './recipe-buttons/black-eyed-peas-and-hamhock-recipe-btn';
import StuffedGreenPeppersBtnComponent from './recipe-buttons/stuffed-green-peppers-btn';
import PulledPorkBtn from './recipe-buttons/pulled-pork-btn-component';
import PotRoastBtn from './recipe-buttons/pot-roast-btn-';
import MeatballBtnComponent from './recipe-buttons/meatballs-recipe-btn';
import SalisburySteakBtnComponent from './recipe-buttons/salisbury-steaks-btn';
import AdoboBtnComponent from './recipe-buttons/adobo-recipe-btn';
import creamyPastaAndCrunchyMushroomButton from './recipe-buttons/creamy-mushroom-with-crispy-mushroom-pasta';
import CreamyPastaAndCrunchyMushroomButton from './recipe-buttons/creamy-mushroom-with-crispy-mushroom-pasta';
import PaginationComponent from './recipe-page-pagination-component/recipe-page-pagination-component';
import PadThaiRecipeBtnComponent from './recipe-buttons/pad-thai-recipe-btn';

export class RecipeTableComponent extends React.Component<any, any> {
    render() {
        return (
            <div>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>Recipe Name</th>
                            <th>Link</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Basic Marinara Sauce</td>
                            <td><MarinaraRecipeBtnComponent /></td>
                        </tr>
                        <tr>
                            <td>Meat Sauce</td>
                            <td> <MeatsauceBtnComponent /> </td>
                        </tr>
                        <tr>
                            <td>Meatballs</td>
                            <td> <MeatballBtnComponent  /> </td>
                        </tr>
                        <tr>
                            <td>Beefaroni</td>
                            <td> <BeefaroniBtnComponent /> </td>
                        </tr>
                        <tr>
                            <td>Chili</td>
                            <td> <ChiliBtnComponent /> </td>
                        </tr>
                        <tr>
                            <td>Beef Stew  (Brown Sauce/Red Sauce)</td>
                            <td> <BeefStewBtnComponent /> </td>
                        </tr>
                        <tr>
                            <td>Fajitas</td>
                            <td> <FajitasBtnComponent /> </td>
                        </tr>
                        <tr>
                            <td>MeatLoaf</td>
                            <td> <MeatloafbtnComponent /> </td>
                        </tr>
                        <tr>
                            <td>Black-eyed Peas amd Ham Hocks</td>
                            <td> <BlackEyedPeasAndHamHock /> </td>
                        </tr>
                        <tr>
                            <td>Stuffed Green Peppers</td>
                            <td> <StuffedGreenPeppersBtnComponent /> </td>
                        </tr>
                        <tr>
                            <td>Pulled Pork</td>
                            <td> <PulledPorkBtn /> </td>
                        </tr>
                        <tr>
                            <td>Pot Roast</td>
                            <td> <PotRoastBtn /> </td>
                        </tr>
                        <tr>
                            <td>Salisbury Steaks</td>
                            <td> <SalisburySteakBtnComponent /> </td>
                        </tr>
                        <tr>
                            <td>Adobo</td>
                            <td> <AdoboBtnComponent /> </td>
                        </tr>
                        <tr>
                            <td>Creamy Pasta and Creamy Mushrooms</td>
                            <td> <CreamyPastaAndCrunchyMushroomButton /> </td>
                        </tr>
                        <tr>
                            <td>Pad Thai</td>
                            <td><PadThaiRecipeBtnComponent /></td>
                        </tr>
                    </tbody>
                </Table>
                <PaginationComponent />
            </div>
        )
    }
}