import React from 'react';
import logo from './logo.svg';
import './style-sheets/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBarComponent } from './components/navbar-component/navbar-component';

function App() {
  return (
    <div className="App">
      <NavBarComponent />
    </div>
  );
}

export default App;
