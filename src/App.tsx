import React from 'react';
import './style-sheets/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBarComponent } from './components/navbar-component/navbar-component';
import { HashRouter, Switch, Route } from 'react-router-dom';
import HomePageComponent from './components/home-page-component/home-page-component';
import { LoginPageComponent } from './components/login-page-component/login-page-component';
import { PhotoVideoPageComponent } from './components/photos-videos-page-component/media-page-component/photo-video-page-component';
import { PhotoPageComponent } from './components/photos-videos-page-component/photo-page-component/photo-page-component';
import { ChatPageComponent } from './components/chat-page-component/chat-page-component';
import { ContactPageComponent } from './components/general-info-components/contact-info-page-component/contact-page-component';
import { GeneralFinancePageComponent } from './components/finance-page-component/general-finance-page-components/general-finance-page-component';
import { RecipePageComponent } from './components/recipe-page-component/main-recipe-page-component';
import { RunTrackerPageComponent } from './components/run-tracker-component/run-tracker-page-component';
import { AutoFinancePageComponent } from './components/finance-page-component/auto-finance-page-components/auto-finance-page-component';
import { MedicalFinancePageComponent } from './components/finance-page-component/medical-finance-page-components/medical-finance-page-component';
import { MedicalFinanceUploadPageComponent } from './components/finance-page-component/medical-finance-page-components/medical-finance-upload-page-component';
import { GeneralFinanceUploadPageComponent } from './components/finance-page-component/general-finance-page-components/general-finance-upload-page-compnent';
import { AutoFinanceUploadPageComponent } from './components/finance-page-component/auto-finance-page-components/auto-finance-upload-page-component';
import { AdoboRecipePageComponent } from './components/recipe-page-component/recipe-pages/filipino-recipes/adobo-recipe-page-component';
import { BeefaroniRecipePageComponent } from './components/recipe-page-component/recipe-pages/comfort-recipes/beefaroni-recipe-page-component';
import { BeefstewRecipePageComponent } from './components/recipe-page-component/recipe-pages/comfort-recipes/beef-stew-recipe-page-component';
import { BlackEyedPeasAndHamHockRecipePageComponent } from './components/recipe-page-component/recipe-pages/slowcooker-recipes/black-eyed-peas-and-hamhocks-recipe-page-component';
import { ChiliRecipePageComponent } from './components/recipe-page-component/recipe-pages/comfort-recipes/chii-recipe-page-component';
import { FajitasRecipePageComponent } from './components/recipe-page-component/recipe-pages/hispanic-recipes/fajitas-recipe-page-component';
import { MarinaraRecipePageComponent } from './components/recipe-page-component/recipe-pages/italian-recipes/marinara-recipe-page-component';
import { MeatSaucePageComponent } from './components/recipe-page-component/recipe-pages/italian-recipes/meat-sauce-page-component';
import { MeatballsPageComponent } from './components/recipe-page-component/recipe-pages/italian-recipes/meatball-page-component';
import { PotRoastRecipePageComponent } from './components/recipe-page-component/recipe-pages/slowcooker-recipes/pot-roast-recipe-page-component';
import { PulledPorkRecipePageComponent } from './components/recipe-page-component/recipe-pages/slowcooker-recipes/puled-pork-recipe-page-component';
import { SalisburySteaksRecipePageComponent } from './components/recipe-page-component/recipe-pages/comfort-recipes/salisbury-steaks-recipe-page-component';
import { StuffedGreenPeppersPageComponent } from './components/recipe-page-component/recipe-pages/slowcooker-recipes/stuffed-green-peppers-recipe-page-component';
import { MeatloadRecipePageComponent } from './components/recipe-page-component/recipe-pages/comfort-recipes/meatloaf-recipe-page-component';
import { VideoPageComponent } from './components/photos-videos-page-component/video-page-component/video-page-component';
import { PhotoUploadPageComponent } from './components/photos-videos-page-component/photo-upload-page-component/photo-upload-page-component';
import { VideoUploadPageComponent } from './components/photos-videos-page-component/video-upload-page-component/video-upload-page-component';
import UtilityPageComponent from './components/utility-components/utility-page-component';
import CreamyPastaAndCrispyMushroomsRecipePageComponent from './components/recipe-page-component/recipe-pages/italian-recipes/creamy-pasta-and-crispy-mushrooms-recipe-page';
import ChatApplicationComponent from './components/chat-page-component/chat-application-ui/chat-application-component';
import AdmimPortalPageComponent from './components/admin-portal/admin-portal-page-component';
import AddUserPageComponent from './components/admin-portal/add-user/add-user-page-component';
import FindUserInfoPageComponent from './components/admin-portal/find-user-info/find-user-info-page-component';
import ApproveUserPageComponent from './components/admin-portal/approve-user/approve-user-page-component';
import PadThaiRecipePageComponent from './components/recipe-page-component/recipe-pages/asian-recipes/pad-thai-recipe-page-component';
import { jwtHelper } from './helper/jwt';
import AgendaPageApp from './components/fun-apps/to-do-list/to-do-list-component-page-component';
import DSAAgendaPageApp from './components/fun-apps/dsa-daily-agenda-component/dsa-to-do-list-component-page-component';
import { RegisterPageComponent } from './components/register-page-component/register-page-component';
import FirebasePhotoGalleryPageComponent from './components/photos-videos-page-component/firebase-photo-gallery/components/firebase-photo-gallery-page-component';
import CarInformationPageComponent from './components/car-information-page-component/car-information-page-component';
import AsianRecipeCategoryPageComponent from './components/recipe-page-component/category-recipe-pages/AsianRecipesCategoryPageComponent';
import BarbequeCategoryPageComponent from './components/recipe-page-component/category-recipe-pages/BarbequeCategoryPageComponent';
import BreakfeastCategoryPageComponent from './components/recipe-page-component/category-recipe-pages/BreakfeastCategoryPageComponent';
import ComfortFoodCategoryPageComponent from './components/recipe-page-component/category-recipe-pages/ComfortFoodCategoryPageComponent';
import DesertsCategoryPageComponent from './components/recipe-page-component/category-recipe-pages/DesertsCategoryPageComponent';
import FilipinoRecipesCategoryPageComponent from './components/recipe-page-component/category-recipe-pages/FilipnoRecipesCategoryPageComponent';
import HispanicRecipesCategoryPageComponent from './components/recipe-page-component/category-recipe-pages/HispanicRecipesCategoryPageComponent';
import ItalianRecipeCategoryPageComponent from './components/recipe-page-component/category-recipe-pages/ItalianRecipeCategoryPageComponent';
import SeafoodRecipeCategoryPageComponent from './components/recipe-page-component/category-recipe-pages/SeafoodRecipesCategoryPageComponent';
import SlowCookerRecipeCategoryPageComponent from './components/recipe-page-component/category-recipe-pages/SlowCookerRecipesCategoryPageComponent';
import PecanPieRecipePage from './components/recipe-page-component/recipe-pages/desert-recipes/PecanPieRecipePage';
import RestaurantRecommendationPageComponent from './components/restaurant-recomendation-component/RestaurantRecommendationPageComponent';
import DownloadsPageComponent from './components/downloads-component/DownloadsPageComponent';
import BookRecommendationPageComponent from './components/book-recommendations-component/BookRecommendationPageComponent';
import AddBookRecommendation from './components/book-recommendations-component/AddBookRecommendation';
import BookUpdate from './components/book-recommendations-component/BookUpdate';
import MusicRecommendationPageComponent from './components/music-recommendations/MusicRecommendationPageComponent';
import GymTrackerPageComponent from './components/gym-tracker/GymTrackerPageComponent';
import { StuffedShellsRecipePageComponent } from './components/recipe-page-component/recipe-pages/italian-recipes/StuffedShellsRecipePageComponent';
import ChickenParmesanRecipePage from './components/recipe-page-component/recipe-pages/italian-recipes/ChickenParmesanRecipePage';
import { LecheFlanRecipePage } from './components/recipe-page-component/recipe-pages/filipino-recipes/LecheFlanRecipePage';
import { CheeseSpinachQuicheRecipePage } from './components/recipe-page-component/recipe-pages/comfort-recipes/CheeseSpinachQuicheRecipePage';
import { UkoyRecipePage } from './components/recipe-page-component/recipe-pages/filipino-recipes/UkoyRecipePage';
import PekingStyleRecipePage from './components/recipe-page-component/recipe-pages/asian-recipes/PekingStylePorkchopsRecipePage';
import PanFriedNoodlesRecipePage from './components/recipe-page-component/recipe-pages/asian-recipes/PanFriedNoodlesRecipePage';
import BeefAndBroccoliRecipePage from './components/recipe-page-component/recipe-pages/asian-recipes/BeefAndBroccoliRecipePage';
import BreakfeastStrataRecipePage from './components/recipe-page-component/recipe-pages/breakfeast-recipes/BreakfeastStrataRecipePage';
import PancakeRecipePage from './components/recipe-page-component/recipe-pages/breakfeast-recipes/PancakeRecipePage';
import ArrozCaldoRecipePage from './components/recipe-page-component/recipe-pages/filipino-recipes/ArrozCaldoRecipePage';
import ChickenMarsalaRecipePage from './components/recipe-page-component/recipe-pages/italian-recipes/ChickenMarsalaRecipePage';
import StuffedFlounderRecipePage from './components/recipe-page-component/recipe-pages/seafood-recipes/StuffedFlounderRecipePage';
import PineappleUpsideDownRecipePage from './components/recipe-page-component/recipe-pages/desert-recipes/PineappleUpsideDownRecipePage';
import CarrotCakeRecipePage from './components/recipe-page-component/recipe-pages/desert-recipes/CarrotCakeRecipePage';
import SinigangRecipePage from './components/recipe-page-component/recipe-pages/filipino-recipes/SinigangRecipePage';
import BakedRedSnapperPage from './components/recipe-page-component/recipe-pages/seafood-recipes/RedSnapperRecipePage';
import TeriyakiSalmonRecipePage from './components/recipe-page-component/recipe-pages/seafood-recipes/TeriyakiSalmonRecipePage';
import ChickenPotPieRecipePage from './components/recipe-page-component/recipe-pages/comfort-recipes/ChickenPotPie';
import FrenchToastRecipePage from './components/recipe-page-component/recipe-pages/breakfeast-recipes/FrenchToastRecipePage';
import PandesalRecipePage from './components/recipe-page-component/recipe-pages/filipino-recipes/PandesalRecipePage';
import WontonSoupRecipePage from './components/recipe-page-component/recipe-pages/asian-recipes/WontonSoupRecipePage';
import ChickenNoodleSoupRecipePage from './components/recipe-page-component/recipe-pages/comfort-recipes/ChickenNoodleSoupRecipePage';
import CornedBeefRecipePage from './components/recipe-page-component/recipe-pages/breakfeast-recipes/CornedBeefRecipePage';
import EggFuYungRecipePage from './components/recipe-page-component/recipe-pages/asian-recipes/EggFuYungRecipePage';
import LumpiaRecipePage from './components/recipe-page-component/recipe-pages/filipino-recipes/LumpiaRecipePage';
import CrispyPataRecipePage from './components/recipe-page-component/recipe-pages/filipino-recipes/CrispyPataReicpePage';
import KoreanStyleRibsRecipePage from './components/recipe-page-component/recipe-pages/asian-recipes/KoreanStyleRibsRecipePage';
import StuffedClamsRecipePage from './components/recipe-page-component/recipe-pages/seafood-recipes/StuffedClamsRecipePage';
import CrabCakesRecipePage from './components/recipe-page-component/recipe-pages/seafood-recipes/CrabCakesRecipePage';
import RedVelvetCakeRecipePage from './components/recipe-page-component/recipe-pages/desert-recipes/RedVelvetCakeRecipePage';
import ChilaquilesRecipePage from './components/recipe-page-component/recipe-pages/hispanic-recipes/ChilaquilesRecipePage';
import EnchiladasRecipePage from './components/recipe-page-component/recipe-pages/hispanic-recipes/EnchiladasRecipePage';
import GnocchiSpinachPestoRecipePage from './components/recipe-page-component/recipe-pages/italian-recipes/GnocchiSpinachPestoRecipePage';
// import UpdateBookPageComponent from './components/book-recommendations-component/UpdateBookPageComponent';
// import BookRecommendationPageComponent from './components/book-recommendations-component/BookRecommendationPageComponent';

const jwt = jwtHelper();

function App() {
  return (
    <div className="App">
      <HashRouter>
        <NavBarComponent />
        <Switch>
          <Route path="/register" exact component={RegisterPageComponent} />
          <Route path="/login" exact component={LoginPageComponent} />
          {/* <Route path="register" exact component={RegisterPageComponent} /> */}
          {
            jwt ?
              <Route path="/home" exact component={HomePageComponent} /> : null
          }
          {
            jwt ?
              <Route path="/media" exact component={PhotoVideoPageComponent} /> : null
          }
          {
            jwt ?
              <Route path="/music" exact component={MusicRecommendationPageComponent} /> : null
          }
          {
            jwt ?
              <Route path="/admin-portal" exact component={AdmimPortalPageComponent} /> : null
          }
          {
            jwt ?
              <Route path="/photos" exact component={PhotoPageComponent} /> : null
          }
          {
            jwt ?
              <Route path="/photo-uploads" exact component={PhotoUploadPageComponent} /> : null
          }
          {
            jwt ?
              <Route path="/firebase-photo-gallery" exact component={FirebasePhotoGalleryPageComponent} /> : null
          }
          {
            jwt ?
              <Route path="/videos" exaxt component={VideoPageComponent} /> : null
          }
          {
            jwt ?
              <Route path="/video-uploads" exact component={VideoUploadPageComponent} /> : null
          }
          {
            jwt ?
              <Route path="/chat" exact component={ChatPageComponent} /> : null
          }
          {
            jwt ?
              <Route path="/deguzman-family-chat" exact component={ChatApplicationComponent} /> : null
          }
          {
            jwt ?
              <Route path="/general-finance" exact component={GeneralFinancePageComponent} /> : null
          }
          {
            jwt ?
              <Route path="/general-finance-uploads" exact component={GeneralFinanceUploadPageComponent} /> : null
          }
          {
            jwt ?
              <Route path="/auto-finance" exact component={AutoFinancePageComponent} /> : null
          }
          {
            jwt ?
              <Route path="/auto-finance-uploads" exact component={AutoFinanceUploadPageComponent} /> : null
          }
          {
            jwt ?
              <Route path="/view-cars" exact component={CarInformationPageComponent} /> : null
          }
          {
            jwt ?
              <Route path="/medical-finance" exact component={MedicalFinancePageComponent} /> : null
          }
          {
            jwt ?
              <Route path="/medical-finance-uploads" exact component={MedicalFinanceUploadPageComponent} /> : null
          }

          {/* <Route path="/birthdays" exact component={BirthdayPageComponent} /> */}
          {
            jwt ?
              <Route path="/contact-info" exact component={ContactPageComponent} /> : null
          }
          {
            jwt ?
              <Route path="/utility-tracker" exact component={UtilityPageComponent} /> : null
          }
          {
            jwt ?
              <Route path="/run-tracker" exact component={RunTrackerPageComponent} /> : null
          }
          {
            jwt ?
              <Route path="/add-user" exact component={AddUserPageComponent} /> : null
          }
          {
            jwt ?
              <Route path="/find-a-user" exact component={FindUserInfoPageComponent} /> : null
          }
          {
            jwt ?
              <Route path="/approve-user" exact component={ApproveUserPageComponent} /> : null
          }
          {
            jwt ?
              <Route path="/agenda" exact component={AgendaPageApp} /> : null
          }
          {
            jwt ?
              <Route path="/dsa-agenda" exact component={DSAAgendaPageApp} /> : null
          }
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
          <Route path="/baked-red-snapper-recipe" exact component={BakedRedSnapperPage} />
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
          {
            jwt ?
              <Route path="/restaurant-recommendations" exact component={RestaurantRecommendationPageComponent} /> : null
          }
          {
            jwt ?
              <Route path="/downloads" exact component={DownloadsPageComponent} /> : null
          }
          {
            jwt ?
              <Route path="/book-recommendations" exact component={BookRecommendationPageComponent} /> : null
          }
          {
            jwt ?
              <Route path="/add-book-information" exact component={AddBookRecommendation} /> : null
          }
          {
            jwt ?
              <Route path="/update-book-information" exact component={BookUpdate} /> : null
          }
          {
            jwt ?
              <Route path="/gym-tracker" exact component={GymTrackerPageComponent} /> : null
          }
          <Route component={LoginPageComponent} />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
