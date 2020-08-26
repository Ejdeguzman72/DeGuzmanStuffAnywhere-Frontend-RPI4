import React from 'react';
import { Helmet } from 'react-helmet';
import '../../style-sheets/home-page.css';
import { FooterComponent } from '../footer-component/footer-component';
import PhotoSlideShowComponent from './photo-slideshow-component';
import midSectionContainerComponent from './mid-section-container-component';
import MidSectionContainerComponent from './mid-section-container-component';

export class HomePageComponent extends React.Component<any, any> {
    render() {
        return (
            <div>
                <Helmet>
                    <title>Home</title>
                </Helmet>
                <br></br>
                <br></br>
                <div className="hero-home">

                </div>
                <br></br>
                <div id="white-background">
                    <div className="mid-section-overlay">
                        <MidSectionContainerComponent />
                    </div>
                </div>
                <br></br>
                <br></br>
                {/* <PhotoSlideShowComponent /> */}
                <FooterComponent />
            </div>
        )
    }
}