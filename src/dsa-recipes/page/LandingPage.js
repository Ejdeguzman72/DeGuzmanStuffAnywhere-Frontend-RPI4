import React from 'react';
import LandingPageBtn from '../../dsa-recipes/button/LandingPageBtn';
import ChefGIF from '../../assets/chef.gif';
import { FooterComponent } from '../../components/footer-component/footer-component';

const LandingPage = () => {
    return (
        <div className="landing-page-container">
            <img src={ChefGIF} className="App-logo" alt=""/>
            <LandingPageBtn />
            <FooterComponent />
        </div>
    )
}

export default LandingPage;