import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import '../../style-sheets/newsroom.css'
import DateContainer from './DateContainer';
import JokeContainer from './JokeContainer';

const NewsroomPageComponent = () => {

    return (
        <div>
            <Helmet>
                <title>DSA Newsroom</title>
            </Helmet>
            <div id="white-background">
                <div className="newsroom-container">
                    <JokeContainer />
                    <DateContainer />
                </div>
            </div>
        </div>
    )
}

export default NewsroomPageComponent;