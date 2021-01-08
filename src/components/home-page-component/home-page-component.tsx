import React from 'react';
import { Helmet } from 'react-helmet';
import '../../style-sheets/home-page.css';
import { FooterComponent } from '../footer-component/footer-component';
import MidSectionContainerComponent from './mid-section-container-component';
import ControlledCarousel from './photo-slideshow-component';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


export class HomePageComponent extends React.Component<any, any> {
    render() {
        return (
            <div>
                <Helmet>
                    <title>Home</title>
                </Helmet>
                        <Button variant="outline-info" size="lg" className="admin-button" disabled={true}>
                            <Link to="admin-portal" 
                                //className="disabled-link"
                            >
                                Admin Portal
                            </Link>
                        </Button>
                        <br></br>
                <br></br>
                <br></br>
                <div className="hero-home">
                    
                    
                </div>
                <br></br>
                <div id="white-background">
                    <div className="mid-section-overlay">
                        <br></br>
                        <MidSectionContainerComponent />
                    </div>
                    <br></br>
                    <ControlledCarousel  />
                </div>
                <br></br>
                <br></br>
                <FooterComponent />
            </div>
        )
    }
}