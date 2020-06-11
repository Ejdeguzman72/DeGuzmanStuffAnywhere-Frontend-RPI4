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

function App() {
  return (
    <div className="App">
      <HashRouter>
        <NavBarComponent />
          <Switch>
            <Route path="/home" exact component={HomePageComponent} />
          </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
