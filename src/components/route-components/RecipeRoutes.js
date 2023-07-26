import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { RecipePageComponent } from '../recipe-page-component/main-recipe-page-component';
import AsianRecipeCategoryPageComponent from '../recipe-page-component/category-recipe-pages/AsianRecipesCategoryPageComponent';
import BarbequeCategoryPageComponent from '../recipe-page-component/category-recipe-pages/BarbequeCategoryPageComponent';
import BreakfeastCategoryPageComponent from '../recipe-page-component/category-recipe-pages/BreakfeastCategoryPageComponent';
import ComfortFoodCategoryPageComponent from '../recipe-page-component/category-recipe-pages/ComfortFoodCategoryPageComponent';
import DesertsCategoryPageComponent from '../recipe-page-component/category-recipe-pages/DesertsCategoryPageComponent';
import PecanPieRecipePage from '../recipe-page-component/recipe-pages/desert-recipes/PecanPieRecipePage';
import FilipinoRecipesCategoryPageComponent from '../recipe-page-component/category-recipe-pages/FilipnoRecipesCategoryPageComponent';
import HispanicRecipesCategoryPageComponent from '../recipe-page-component/category-recipe-pages/HispanicRecipesCategoryPageComponent';
import ItalianRecipeCategoryPageComponent from '../recipe-page-component/category-recipe-pages/ItalianRecipeCategoryPageComponent';
import SeafoodRecipeCategoryPageComponent from '../recipe-page-component/category-recipe-pages/SeafoodRecipesCategoryPageComponent';
import SlowCookerRecipeCategoryPageComponent from '../recipe-page-component/category-recipe-pages/SlowCookerRecipesCategoryPageComponent';
import { AdoboRecipePageComponent } from '../recipe-page-component/recipe-pages/filipino-recipes/adobo-recipe-page-component';
import { LecheFlanRecipePage } from '../recipe-page-component/recipe-pages/filipino-recipes/LecheFlanRecipePage';
import { BeefaroniRecipePageComponent } from '../recipe-page-component/recipe-pages/comfort-recipes/beefaroni-recipe-page-component';
import { BeefstewRecipePageComponent } from '../recipe-page-component/recipe-pages/comfort-recipes/beef-stew-recipe-page-component';
import { BlackEyedPeasAndHamHockRecipePageComponent } from '../recipe-page-component/recipe-pages/slowcooker-recipes/BlackEyedPeasPage';
import { ChiliRecipePageComponent } from '../recipe-page-component/recipe-pages/comfort-recipes/chii-recipe-page-component';
import { FajitasRecipePageComponent } from '../recipe-page-component/recipe-pages/hispanic-recipes/fajitas-recipe-page-component';
import { MarinaraRecipePageComponent } from '../recipe-page-component/recipe-pages/italian-recipes/marinara-recipe-page-component';
import { MeatSaucePageComponent } from '../recipe-page-component/recipe-pages/italian-recipes/meat-sauce-page-component';
import { MeatballsPageComponent } from '../recipe-page-component/recipe-pages/italian-recipes/meatball-page-component';
import { MeatloadRecipePageComponent } from '../recipe-page-component/recipe-pages/comfort-recipes/meatloaf-recipe-page-component';
import { PotRoastRecipePageComponent } from '../recipe-page-component/recipe-pages/slowcooker-recipes/pot-roast-recipe-page-component';
import WaffleRecipePage from '../recipe-page-component/recipe-pages/breakfeast-recipes/WaffleRecipePage';
import HoneyGarlicPorkRecipeBtn from '../recipe-page-component/recipe-buttons/comfort-food-category-recipe/HoneyGarlicPorkRecipeBtn';
import GnocchiSpinachPestoRecipePage from '../recipe-page-component/recipe-pages/italian-recipes/GnocchiSpinachPestoRecipePage';
import EnchiladasRecipePage from '../recipe-page-component/recipe-pages/hispanic-recipes/EnchiladasRecipePage';
import ChilaquilesRecipeBtn from '../recipe-page-component/recipe-buttons/hispanic-category-recipe/ChilaquilesRecipeBtn';
import RedVelvetCakeRecipePage from '../recipe-page-component/recipe-pages/desert-recipes/RedVelvetCakeRecipePage';
import CrabCakesRecipePage from '../recipe-page-component/recipe-pages/seafood-recipes/CrabCakesRecipePage';
import KoreanStyleRibsRecipePage from '../recipe-page-component/recipe-pages/asian-recipes/KoreanStyleRibsRecipePage';
import BakedRedSnapperRecipePage from '../recipe-page-component/recipe-pages/seafood-recipes/RedSnapperRecipePage';
import CrispyPataRecipePage from '../recipe-page-component/recipe-pages/filipino-recipes/CrispyPataReicpePage';
import LumpiaRecipePage from '../recipe-page-component/recipe-pages/filipino-recipes/LumpiaRecipePage';
import EggFuYungRecipePage from '../recipe-page-component/recipe-pages/asian-recipes/EggFuYungRecipePage';
import { PulledPorkRecipePageComponent } from '../recipe-page-component/recipe-pages/slowcooker-recipes/puled-pork-recipe-page-component';
import { SalisburySteaksRecipePageComponent } from '../recipe-page-component/recipe-pages/comfort-recipes/salisbury-steaks-recipe-page-component';
import { StuffedGreenPeppersPageComponent } from '../recipe-page-component/recipe-pages/slowcooker-recipes/stuffed-green-peppers-recipe-page-component';
import { StuffedShellsRecipePageComponent } from '../recipe-page-component/recipe-pages/italian-recipes/StuffedShellsRecipePageComponent';
import ChickenParmesanRecipePage from '../recipe-page-component/recipe-pages/italian-recipes/ChickenParmesanRecipePage';
import CreamyPastaAndCrispyMushroomsRecipePageComponent from '../recipe-page-component/recipe-pages/italian-recipes/creamy-pasta-and-crispy-mushrooms-recipe-page';
import PadThaiRecipePageComponent from '../recipe-page-component/recipe-pages/asian-recipes/pad-thai-recipe-page-component';
import { CheeseSpinachQuicheRecipePage } from '../recipe-page-component/recipe-pages/comfort-recipes/CheeseSpinachQuicheRecipePage';
import { UkoyRecipePage } from '../recipe-page-component/recipe-pages/filipino-recipes/UkoyRecipePage';
import PekingStyleRecipePage from '../recipe-page-component/recipe-pages/asian-recipes/PekingStylePorkchopsRecipePage';
import PanFriedNoodlesRecipePage from '../recipe-page-component/recipe-pages/asian-recipes/PanFriedNoodlesRecipePage';
import BeefAndBroccoliRecipePage from '../recipe-page-component/recipe-pages/asian-recipes/BeefAndBroccoliRecipePage';
import BreakfeastStrataRecipePage from '../recipe-page-component/recipe-pages/breakfeast-recipes/BreakfeastStrataRecipePage';
import PancakeRecipePage from '../recipe-page-component/recipe-pages/breakfeast-recipes/PancakeRecipePage';
import ArrozCaldoRecipePage from '../recipe-page-component/recipe-pages/filipino-recipes/ArrozCaldoRecipePage';
import ChickenMarsalaRecipePage from '../recipe-page-component/recipe-pages/italian-recipes/ChickenMarsalaRecipePage';
import StuffedFlounderRecipeBtn from '../recipe-page-component/recipe-buttons/seafood-category-button/StuffedFlounderRecipeBtn';
import StuffedFlounderRecipePage from '../recipe-page-component/recipe-pages/seafood-recipes/StuffedFlounderRecipePage';
import PineappleUpsideDownRecipePage from '../recipe-page-component/recipe-pages/desert-recipes/PineappleUpsideDownRecipePage';
import CarrotCakeRecipePage from '../recipe-page-component/recipe-pages/desert-recipes/CarrotCakeRecipePage';
import SinigangRecipePage from '../recipe-page-component/recipe-pages/filipino-recipes/SinigangRecipePage';
import TeriyakiSalmonRecipeBtn from '../recipe-page-component/recipe-buttons/seafood-category-button/TeriyakiSalmonRecipeBtn';
import ChickenPotPieRecipeBtn from '../recipe-page-component/recipe-buttons/comfort-food-category-recipe/ChickenPotPieRecipeBtn';
import ChickenPotPieRecipePage from '../recipe-page-component/recipe-pages/comfort-recipes/ChickenPotPie';
import FrenchToastRecipePage from '../recipe-page-component/recipe-pages/breakfeast-recipes/FrenchToastRecipePage';
import PandesalRecipePage from '../recipe-page-component/recipe-pages/filipino-recipes/PandesalRecipePage';
import WontonSoupRecipePage from '../recipe-page-component/recipe-pages/asian-recipes/WontonSoupRecipePage';
import TeriyakiSalmonRecipePage from '../recipe-page-component/recipe-pages/seafood-recipes/TeriyakiSalmonRecipePage';
import ChickenNoodleSoupRecipePage from '../recipe-page-component/recipe-pages/comfort-recipes/ChickenNoodleSoupRecipePage';
import CornedBeefRecipePage from '../recipe-page-component/recipe-pages/breakfeast-recipes/CornedBeefRecipePage';
import StuffedClamsRecipePage from '../recipe-page-component/recipe-pages/seafood-recipes/StuffedClamsRecipePage';
import ChilaquilesRecipePage from '../recipe-page-component/recipe-pages/hispanic-recipes/ChilaquilesRecipePage';
import HoneyGarlicPorkRecipePage from '../recipe-page-component/recipe-pages/comfort-recipes/HoneyGarlicPorkRecipePage';

const RecipeRoutes = () => {
    return (
        <HashRouter>
            <Switch>
                <Route path="/recipes" exact component={RecipePageComponent} />
                <Route path="/asian-recipes" exact component={AsianRecipeCategoryPageComponent} />
                <Route path="/barbeque-recipes" exact component={BarbequeCategoryPageComponent} />
                <Route path="/breakfeast-recipes" exact component={BreakfeastCategoryPageComponent} />
                <Route path="/comfort-food-recipes" exact component={ComfortFoodCategoryPageComponent} />
                <Route path="/desert-recipes" exact component={DesertsCategoryPageComponent} />
                <Route path="/pecan-pie-recipe" exact component={PecanPieRecipePage} />
                <Route path="/filipino-recipes" exact component={FilipinoRecipesCategoryPageComponent} />
                <Route path="/hispanic-recipes" exact component={HispanicRecipesCategoryPageComponent} />
                <Route path="/italian-recipes" exact component={ItalianRecipeCategoryPageComponent} />
                <Route path="/seafood-recipes" exact component={SeafoodRecipeCategoryPageComponent} />
                <Route path="/slow-cooker-recipes" exact component={SlowCookerRecipeCategoryPageComponent} />
                <Route path="/adobo-recipe" exact component={AdoboRecipePageComponent} />
                <Route path="/leche-flan-recipe" exact component={LecheFlanRecipePage} />
                <Route path="/beefaroni-recipe" exact component={BeefaroniRecipePageComponent} />
                <Route path="/beef-stew-recipe" exact component={BeefstewRecipePageComponent} />
                <Route path="/black-eyed-peas-and-ham-hock-recipe" exact component={BlackEyedPeasAndHamHockRecipePageComponent} />
                <Route path="/chili-recipe" exact component={ChiliRecipePageComponent} />
                <Route path="/fajitas-recipe" exact component={FajitasRecipePageComponent} />
                <Route path="/marinara-recipe" exact component={MarinaraRecipePageComponent} />
                <Route path="/meat-sauce-recipe" exact component={MeatSaucePageComponent} />
                <Route path="/meatball-recipe" exact component={MeatballsPageComponent} />
                <Route path="/meatloaf-recipe" exact component={MeatloadRecipePageComponent} />
                <Route path="/pot-roast-recipe" exact component={PotRoastRecipePageComponent} />
                <Route path="/pulled-pork-recipe" exact component={PulledPorkRecipePageComponent} />
                <Route path="/salisbury-steaks-recipe" exact component={SalisburySteaksRecipePageComponent} />
                <Route path="/stuffed-green-peppers-recipe" exact component={StuffedGreenPeppersPageComponent} />
                <Route path="/stuffed-shells-recipe" exact component={StuffedShellsRecipePageComponent} />
                <Route path="/chicken-parmesan-recipe" exact component={ChickenParmesanRecipePage} />
                <Route path="/creamy-pasta-and-crispy-mushrooms-recipe" exact component={CreamyPastaAndCrispyMushroomsRecipePageComponent} />
                <Route path="/pad-thai-recipe" exact component={PadThaiRecipePageComponent} />
                <Route path="/quiche-recipe" exact component={CheeseSpinachQuicheRecipePage} />
                <Route path="/ukoy-recipe" exact component={UkoyRecipePage} />
                <Route path="/peking-style-porkchop-recipe" exact component={PekingStyleRecipePage} />
                <Route path="/pan-fried-noodles-recipe" exact component={PanFriedNoodlesRecipePage} />
                <Route path="/beef-and=broccoli-recipe" exact component={BeefAndBroccoliRecipePage} />
                <Route path="/breakfeast-strata-recipe" exact component={BreakfeastStrataRecipePage} />
                <Route path="/pancake-recipe" exact component={PancakeRecipePage} />
                <Route path="/arroz-caldo-recipe" exact component={ArrozCaldoRecipePage} />
                <Route path="/chicken-marsala-recipe" exact component={ChickenMarsalaRecipePage} />
                <Route path="/stuffed-flounder-recipe" exact component={StuffedFlounderRecipePage} />
                <Route path="/pineapple-upside-down-cake-recipe" exact component={PineappleUpsideDownRecipePage} />
                <Route path="/carrot-cake-recipe" exact component={CarrotCakeRecipePage} />
                <Route path="/sinigang-recipe" exact component={SinigangRecipePage} />
                <Route path="/baked-red-snapper-recipe" exact component={BakedRedSnapperRecipePage} />
                <Route path="/teriyaki-salmon-recipe" exact component={TeriyakiSalmonRecipePage} />
                <Route path="/chicken-pot-pie-recipe" exact component={ChickenPotPieRecipePage} />
                <Route path="/french-toast-recipe" exact component={FrenchToastRecipePage} />
                <Route path="/pandesal-recipe" exact component={PandesalRecipePage} />
                <Route path="/wonton-soup-recipe" exact component={WontonSoupRecipePage} />
                <Route path="/chicken-noodle-soup-recipe" exact component={ChickenNoodleSoupRecipePage} />
                <Route path="/corned-beef-recipe" exact component={CornedBeefRecipePage} />
                <Route path="/egg-fu-yung-recipe" exact component={EggFuYungRecipePage} />
                <Route path="/lumpia-recipe" exact component={LumpiaRecipePage} />
                <Route path="/crispy-pata-recipe" exact component={CrispyPataRecipePage} />
                <Route path="/korean-style-ribs-recipe" exact component={KoreanStyleRibsRecipePage} />
                <Route path="/stuffed-clams-recipe" exact component={StuffedClamsRecipePage} />
                <Route path="/crab-cakes-recipe" exact component={CrabCakesRecipePage} />
                <Route path="/red-velvet-cake-recipe" exact component={RedVelvetCakeRecipePage} />
                <Route path="/chilaquiles-recipe" exact component={ChilaquilesRecipePage} />
                <Route path="/enchiladas-recipe" exact component={EnchiladasRecipePage} />
                <Route path="/gnocchi-spinach-pesto-recipe" exact component={GnocchiSpinachPestoRecipePage} />
                <Route path="/honey-garlic-pork" exact component={HoneyGarlicPorkRecipePage} />
                <Route path="/waffles-recipe" exact component={WaffleRecipePage} />
                <Route path="/recipes" exact component={RecipePageComponent} />
                <Route path="/asian-recipes" exact component={AsianRecipeCategoryPageComponent} />
                <Route path="/barbeque-recipes" exact component={BarbequeCategoryPageComponent} />
                <Route path="/breakfeast-recipes" exact component={BreakfeastCategoryPageComponent} />
                <Route path="/comfort-food-recipes" exact component={ComfortFoodCategoryPageComponent} />
                <Route path="/desert-recipes" exact component={DesertsCategoryPageComponent} />
                <Route path="/pecan-pie-recipe" exact component={PecanPieRecipePage} />
                <Route path="/filipino-recipes" exact component={FilipinoRecipesCategoryPageComponent} />
                <Route path="/hispanic-recipes" exact component={HispanicRecipesCategoryPageComponent} />
                <Route path="/italian-recipes" exact component={ItalianRecipeCategoryPageComponent} />
                <Route path="/seafood-recipes" exact component={SeafoodRecipeCategoryPageComponent} />
                <Route path="/slow-cooker-recipes" exact component={SlowCookerRecipeCategoryPageComponent} />
                <Route path="/adobo-recipe" exact component={AdoboRecipePageComponent} />
                <Route path="/leche-flan-recipe" exact component={LecheFlanRecipePage} />
                <Route path="/beefaroni-recipe" exact component={BeefaroniRecipePageComponent} />
                <Route path="/beef-stew-recipe" exact component={BeefstewRecipePageComponent} />
                <Route path="/black-eyed-peas-and-ham-hock-recipe" exact component={BlackEyedPeasAndHamHockRecipePageComponent} />
                <Route path="/chili-recipe" exact component={ChiliRecipePageComponent} />
                <Route path="/fajitas-recipe" exact component={FajitasRecipePageComponent} />
                <Route path="/marinara-recipe" exact component={MarinaraRecipePageComponent} />
                <Route path="/meat-sauce-recipe" exact component={MeatSaucePageComponent} />
                <Route path="/meatball-recipe" exact component={MeatballsPageComponent} />
                <Route path="/meatloaf-recipe" exact component={MeatloadRecipePageComponent} />
                <Route path="/pot-roast-recipe" exact component={PotRoastRecipePageComponent} />
                <Route path="/pulled-pork-recipe" exact component={PulledPorkRecipePageComponent} />
                <Route path="/salisbury-steaks-recipe" exact component={SalisburySteaksRecipePageComponent} />
                <Route path="/stuffed-green-peppers-recipe" exact component={StuffedGreenPeppersPageComponent} />
                <Route path="/stuffed-shells-recipe" exact component={StuffedShellsRecipePageComponent} />
                <Route path="/chicken-parmesan-recipe" exact component={ChickenParmesanRecipePage} />
                <Route path="/creamy-pasta-and-crispy-mushrooms-recipe" exact component={CreamyPastaAndCrispyMushroomsRecipePageComponent} />
                <Route path="/pad-thai-recipe" exact component={PadThaiRecipePageComponent} />
                <Route path="/quiche-recipe" exact component={CheeseSpinachQuicheRecipePage} />
                <Route path="/ukoy-recipe" exact component={UkoyRecipePage} />
                <Route path="/peking-style-porkchop-recipe" exact component={PekingStyleRecipePage} />
                <Route path="/pan-fried-noodles-recipe" exact component={PanFriedNoodlesRecipePage} />
                <Route path="/beef-and=broccoli-recipe" exact component={BeefAndBroccoliRecipePage} />
                <Route path="/breakfeast-strata-recipe" exact component={BreakfeastStrataRecipePage} />
                <Route path="/pancake-recipe" exact component={PancakeRecipePage} />
                <Route path="/arroz-caldo-recipe" exact component={ArrozCaldoRecipePage} />
                <Route path="/chicken-marsala-recipe" exact component={ChickenMarsalaRecipePage} />
                <Route path="/stuffed-flounder-recipe" exact component={StuffedFlounderRecipePage} />
                <Route path="/pineapple-upside-down-cake-recipe" exact component={PineappleUpsideDownRecipePage} />
                <Route path="/carrot-cake-recipe" exact component={CarrotCakeRecipePage} />
                <Route path="/sinigang-recipe" exact component={SinigangRecipePage} />
                <Route path="/baked-red-snapper-recipe" exact component={BakedRedSnapperRecipePage} />
                <Route path="/teriyaki-salmon-recipe" exact component={TeriyakiSalmonRecipePage} />
                <Route path="/chicken-pot-pie-recipe" exact component={ChickenPotPieRecipePage} />
                <Route path="/french-toast-recipe" exact component={FrenchToastRecipePage} />
                <Route path="/pandesal-recipe" exact component={PandesalRecipePage} />
                <Route path="/wonton-soup-recipe" exact component={WontonSoupRecipePage} />
                <Route path="/chicken-noodle-soup-recipe" exact component={ChickenNoodleSoupRecipePage} />
                <Route path="/corned-beef-recipe" exact component={CornedBeefRecipePage} />
                <Route path="/egg-fu-yung-recipe" exact component={EggFuYungRecipePage} />
                <Route path="/lumpia-recipe" exact component={LumpiaRecipePage} />
                <Route path="/crispy-pata-recipe" exact component={CrispyPataRecipePage} />
                <Route path="/korean-style-ribs-recipe" exact component={KoreanStyleRibsRecipePage} />
                <Route path="/stuffed-clams-recipe" exact component={BakedRedSnapperRecipePage} />
                <Route path="/crab-cakes-recipe" exact component={CrabCakesRecipePage} />
                <Route path="/red-velvet-cake-recipe" exact component={RedVelvetCakeRecipePage} />
                <Route path="/chilaquiles-recipe" exact component={ChilaquilesRecipeBtn} />
                <Route path="/enchiladas-recipe" exact component={EnchiladasRecipePage} />
                <Route path="/gnocchi-spinach-pesto-recipe" exact component={GnocchiSpinachPestoRecipePage} />
                <Route path="/honey-garlic-pork" exact component={HoneyGarlicPorkRecipeBtn} />
                <Route path="/waffles-recipe" exact component={WaffleRecipePage} />
            </Switch>
        </HashRouter>
    )
}

export default RecipeRoutes;