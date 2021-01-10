import React from 'react';
import './style-sheets/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBarComponent } from './components/navbar-component/navbar-component';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { HomePageComponent } from './components/home-page-component/home-page-component';
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
import { AdoboRecipePageComponent } from './components/recipe-page-component/recipe-pages/adobo-recipe-page-component';
import { BeefaroniRecipePageComponent } from './components/recipe-page-component/recipe-pages/beefaroni-recipe-page-component';
import { BeefstewRecipePageComponent } from './components/recipe-page-component/recipe-pages/beef-stew-recipe-page-component';
import { BlackEyedPeasAndHamHockRecipePageComponent } from './components/recipe-page-component/recipe-pages/black-eyed-peas-and-hamhocks-recipe-page-component';
import { ChiliRecipePageComponent } from './components/recipe-page-component/recipe-pages/chii-recipe-page-component';
import { FajitasRecipePageComponent } from './components/recipe-page-component/recipe-pages/fajitas-recipe-page-component';
import { MarinaraRecipePageComponent } from './components/recipe-page-component/recipe-pages/marinara-recipe-page-component';
import { MeatSaucePageComponent } from './components/recipe-page-component/recipe-pages/meat-sauce-page-component';
import { MeatballsPageComponent } from './components/recipe-page-component/recipe-pages/meatball-page-component';
import { PotRoastRecipePageComponent } from './components/recipe-page-component/recipe-pages/pot-roast-recipe-page-component';
import { PulledPorkRecipePageComponent } from './components/recipe-page-component/recipe-pages/puled-pork-recipe-page-component';
import { SalisburySteaksRecipePageComponent } from './components/recipe-page-component/recipe-pages/salisbury-steaks-recipe-page-component';
import { StuffedGreenPeppersPageComponent } from './components/recipe-page-component/recipe-pages/stuffed-green-peppers-recipe-page-component';
import { MeatloadRecipePageComponent } from './components/recipe-page-component/recipe-pages/meatloaf-recipe-page-component';
import { VideoPageComponent } from './components/photos-videos-page-component/video-page-component/video-page-component';
import { PhotoUploadPageComponent } from './components/photos-videos-page-component/photo-upload-page-component/photo-upload-page-component';
import { VideoUploadPageComponent } from './components/photos-videos-page-component/video-upload-page-component/video-upload-page-component';
import UtilityPageComponent from './components/utility-components/utility-page-component';
import CreamyPastaAndCrispyMushroomsRecipePageComponent from './components/recipe-page-component/recipe-pages/creamy-pasta-and-crispy-mushrooms-recipe-page';
import ChatApplicationComponent from './components/chat-page-component/chat-application-ui/chat-application-component';
import AdmimPortalPageComponent from './components/admin-portal/admin-portal-page-component';
import AddUserPageComponent from './components/admin-portal/add-user/add-user-page-component';
import FindUserInfoPageComponent from './components/admin-portal/find-user-info/find-user-info-page-component';
import ApproveUserPageComponent from './components/admin-portal/approve-user/approve-user-page-component';
import PadThaiRecipePageComponent from './components/recipe-page-component/recipe-pages/pad-thai-recipe-page-component';
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
import PecanPieRecipePage from './components/recipe-page-component/recipe-pages/PecanPieRecipePage';
import RestaurantRecommendationPageComponent from './components/restaurant-recomendation-component/RestaurantRecommendationPageComponent';
import DownloadsPageComponent from './components/downloads-component/DownloadsPageComponent';
import BookRecommendationPageComponent from './components/book-recommendations-component/BookRecommendationPageComponent';
import AddBookRecommendation from './components/book-recommendations-component/AddBookRecommendation';
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
          {
            jwt ?
              <Route path="/recipes" exact component={RecipePageComponent} /> : null
          }
          {
            jwt ?
              <Route path="/asian-recipes" exact component={AsianRecipeCategoryPageComponent} /> : null
          }
          {
            jwt ?
              <Route path="/barbeque-recipes" exact component={BarbequeCategoryPageComponent} /> : null
          }
          {
            jwt ?
              <Route path="/breakfeast-recipes" exact component={BreakfeastCategoryPageComponent} /> : null
          }
          {
            jwt ?
              <Route path="/comfort-food-recipes" exact component={ComfortFoodCategoryPageComponent} /> : null
          }
          {
            jwt ?
              <Route path="/desert-recipes" exact component={DesertsCategoryPageComponent} /> : null
          }
          {
            jwt ?
            <Route path="/pecan-pie-recipe" exact component={PecanPieRecipePage} /> : null
          }
          {
            jwt ?
              <Route path="/filipino-recipes" exact component={FilipinoRecipesCategoryPageComponent} /> : null
          }
          {
            jwt ?
              <Route path="/hispanic-recipes" exact component={HispanicRecipesCategoryPageComponent} /> : null
          }
          {
            jwt ?
              <Route path="/italian-recipes" exact component={ItalianRecipeCategoryPageComponent} /> : null
          }
          {
            jwt ?
              <Route path="/seafood-recipes" exact component={SeafoodRecipeCategoryPageComponent} /> : null
          }
          {
            jwt ?
              <Route path="/slow-cooker-recipes" exact component={SlowCookerRecipeCategoryPageComponent} /> : null
          }
          {
            jwt ?
              <Route path="/adobo-recipe" exact component={AdoboRecipePageComponent} /> : null
          }
          {
            jwt ?
              <Route path="/beefaroni-recipe" exact component={BeefaroniRecipePageComponent} /> : null
          }
          {
            jwt ?
              <Route path="/beef-stew-recipe" exact component={BeefstewRecipePageComponent} /> : null
          }
          {
            jwt ?
              <Route path="/black-eyed-peas-and-ham-hock-recipe" exact component={BlackEyedPeasAndHamHockRecipePageComponent} /> : null
          }
          {
            jwt ?
              <Route path="/chili-recipe" exact component={ChiliRecipePageComponent} /> : null
          }
          {
            jwt ?
              <Route path="/fajitas-recipe" exact component={FajitasRecipePageComponent} /> : null
          }
          {
            jwt ?
              <Route path="/marinara-recipe" exact component={MarinaraRecipePageComponent} /> : null
          }
          {
            jwt ?
              <Route path="/meat-sauce-recipe" exact component={MeatSaucePageComponent} /> : null
          }
          {
            jwt ?
              <Route path="/meatball-recipe" exact component={MeatballsPageComponent} /> : null
          }
          {
            jwt ?
              <Route path="/meatloaf-recipe" exact component={MeatloadRecipePageComponent} /> : null
          }
          {
            jwt ?
              <Route path="/pot-roast-recipe" exact component={PotRoastRecipePageComponent} /> : null
          }
          {
            jwt ?
              <Route path="/pulled-pork-recipe" exact component={PulledPorkRecipePageComponent} /> : null
          }
          {
            jwt ?
              <Route path="/salisbury-steaks-recipe" exact component={SalisburySteaksRecipePageComponent} /> : null
          }
          {
            jwt ?
              <Route path="/stuffed-green-peppers-recipe" exact component={StuffedGreenPeppersPageComponent} /> : null
          }
          {
            jwt ?
              <Route path="/creamy-pasta-and-crispy-mushrooms-recipe" exact component={CreamyPastaAndCrispyMushroomsRecipePageComponent} /> : null
          }
          {
            jwt ?
              <Route path="/pad-thai-recipe" exact component={PadThaiRecipePageComponent} /> : null
          }
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
          <Route component={LoginPageComponent} />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
