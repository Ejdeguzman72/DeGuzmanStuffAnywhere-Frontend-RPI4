import React from 'react';
import { Helmet } from 'react-helmet';
import DSAAgendaApp from './dsa-agenda-app';



const DSAAgendaPageApp = () => {
    return (
        <div>
            <Helmet>
                <title>Agenda</title>
            </Helmet>
            <div id="white-background">
                <br></br>
                <DSAAgendaApp />
            </div>
        </div>

    )
}

export default DSAAgendaPageApp;