import React from 'react';
import { Helmet } from 'react-helmet';
import AgendaApp from './agenda-app';


const AgendaPageApp = () => {
    return (
        <div>
            <Helmet>
                <title>Agenda</title>
            </Helmet>
            <div id="white-background">
                <br></br>
                <AgendaApp />
            </div>
        </div>

    )
}

export default AgendaPageApp;