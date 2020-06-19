import React from 'react';
import { Helmet } from 'react-helmet';
import { FooterComponent } from '../footer-component/footer-component';

export class ChatPageComponent extends React.Component<any,any> {
    render() {
        return(
            <div>
                <Helmet>
                    <title>Chat Application</title>
                </Helmet>
                <div id="white-background">
                    
                </div>
                <FooterComponent />
            </div>
        )
    }
}