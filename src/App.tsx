import React from 'react';
import './style-sheets/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBarComponent } from './components/navbar-component/navbar-component';
import { HashRouter, Switch, Route, BrowserRouter } from 'react-router-dom';
import HomePageComponent from './components/home-page-component/home-page-component';
import { LoginPageComponent } from './components/login-page-component/login-page-component';
import { jwtHelper } from './helper/jwt';
import { RegisterPageComponent } from './components/register-page-component/register-page-component';
import FinanceRoutes from './components/route-components/FinanceRoutes';
import RecipeRoutes from './components/route-components/RecipeRoutes';
import MediaRoutes from './components/route-components/MediaRoutes';
import RestaurantRecommendationRoutes from './components/route-components/RestaurantRecommendationRoutes';
import FitnessRoutes from './components/route-components/FitnessRoutes';
import AdminRoutes from './components/route-components/AdminRoutes';
import AutomotiveRoutes from './components/route-components/AutomotiveRoutes';
import ContactInfoRoutes from './components/route-components/ContactInfoRoutes';
import MusicRoutes from './components/route-components/MusicRoutes';
import BookRoutes from './components/route-components/BookRoutes';
import InventoryRoutes from './components/route-components/InventoryRoutes';
import MedicalRoutes from './components/route-components/MedicalRoutes';
import NewsRoomRoutes from './components/route-components/NewsroomRoutes';

const jwt = jwtHelper();

function App() {
  return (
    <div className="App">
      <HashRouter>
        <NavBarComponent />
        <Switch>
          <Route path="/register" exact component={RegisterPageComponent} />
          <Route path="/login" exact component={LoginPageComponent} />
          <RecipeRoutes />
          {
            jwt ?
            <div>
                <Route path="/home" exact component={HomePageComponent} />
                <AdminRoutes />
                <InventoryRoutes />
                <BookRoutes />
                <ContactInfoRoutes />
                <MediaRoutes />
                <NewsRoomRoutes />
                <MedicalRoutes />
                <FinanceRoutes />
                <FitnessRoutes />
                <AutomotiveRoutes />
                <MusicRoutes />
                <RestaurantRecommendationRoutes />
              </div> : null
          }
          <Route component={LoginPageComponent} />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
