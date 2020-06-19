import React from 'react';
import { Button } from 'react-bootstrap';

export class MediaVideoButtonComponent extends React.Component<any,any> {
    render() {
        return (
            <div>
                <Button variant="dark" size="lg">Videos</Button>
            </div>
        )
    }
}