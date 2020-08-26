import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MediaIcon = () => {
    return (
        <div>
            <Button className="square1">
                <Link to="/media">
                    Share Pictures/Videos with Family
                </Link>
            </Button>
        </div>
    )
}

export default MediaIcon;