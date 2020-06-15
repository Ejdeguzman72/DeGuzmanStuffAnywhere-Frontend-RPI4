import React from 'react';
import { Helmet } from 'react-helmet';
import '../../style-sheets/home-page.css';

export class HomePageComponent extends React.Component<any, any> {
    render() {
        return (
            <div>
                <Helmet>
                    <title>Home</title>
                </Helmet>
                <br></br><br></br>
                <div className="hero-home">

                </div>
            </div>
        )
    }
}