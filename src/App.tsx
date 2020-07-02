import React from 'react';
import logo from './logo.svg';
import './style-sheets/App.css';
// import './style-sheets/chat-page.css';
// import './style-sheets/home-page.css';
// import './style-sheets/login-page.css';
// import './style-sheets/photo-page.css';
// import './style-sheets/register-page.css';
// import './style-sheets/video-page.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBarComponent } from './components/navbar-component/navbar-component';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { HomePageComponent } from './components/home-page-component/home-page-component';
import { LoginPageComponent } from './components/login-page-component/login-page-component';
import { PhotoVideoPageComponent } from './components/photos-videos-page-component/media-page-component/photo-video-page-component';
import { PhotoPageComponent } from './components/photos-videos-page-component/photo-page-component/photo-page-component';
// import { VideoPageComponent } from './components/photos-videos-page-component/video-page-component';
import { ChatPageComponent } from './components/chat-page-component/chat-page-component';
import { BirthdayPageComponent } from './components/general-info-components/birthday-page-component/birthday-page-component';
import { ContactPageComponent } from './components/general-info-components/contact-info-page-component/contact-page-component';
import { FinancePageComponent } from './components/general-info-components/finance-page-component/finance-page-component';
import { RecipePageComponent } from './components/general-info-components/recipe-page-component/recipe-page-component';
import { RunTrackerPageComponent } from './components/run-tracker-component/run-tracker-page-component';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <NavBarComponent />
          <Switch>
            <Route path="/login" exact component={LoginPageComponent} />
            {/* <Route path="register" exact component={RegisterPageComponent} /> */}
            <Route path="/home" exact component={HomePageComponent} />
            <Route path="/media" exact component={PhotoVideoPageComponent} />
            <Route path="/photos" exact component={PhotoPageComponent} />
            {/* <Route path="/videos" exaxt component={VideoPageComponent} /> */}
            <Route path="/chat" exact component={ChatPageComponent} />
            <Route path="/birthdays" exact component={BirthdayPageComponent} />
            <Route path="/contact-info" exact component={ContactPageComponent} />
            <Route path="/finance" exact component={FinancePageComponent} />
            <Route path="/recipes" exact component={RecipePageComponent} />
            <Route path="/run-tracker" exact component={RunTrackerPageComponent} />
            <Route component={LoginPageComponent} />
          </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
