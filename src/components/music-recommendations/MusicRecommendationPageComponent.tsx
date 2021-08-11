import React from 'react';
import { Row } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import { FooterComponent } from '../footer-component/footer-component';
import MusicTabComponent from '../tab-components/MusicTabComponent';
import SongList from './SongList';
import RestaurantTypeDropdown from '../dropdown-components/RestaurantTypeDropdown';

const MusicRecommendationPageComponent = () => {
    return (
        <div>
            <Helmet>
                <title>Music</title>
            </Helmet>
            <div id="white-background">
                <br></br>
                <MusicTabComponent />
                <br></br>
                <Row>
                </Row>
                <br></br>
                <br></br>
                <br></br>
                <SongList />
            </div>
            <FooterComponent />
        </div>
    )
}

export default MusicRecommendationPageComponent;