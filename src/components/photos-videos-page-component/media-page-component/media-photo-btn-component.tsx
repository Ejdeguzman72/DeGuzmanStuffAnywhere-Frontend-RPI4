import React from 'react';
import { Button } from 'react-bootstrap';

export class MediaPhotoButtonComponent extends React.Component<any,any> {
    render() {
        return (
            <div>
                <Button variant="dark" size="lg">Photos</Button>
            </div>
        )
    }
}