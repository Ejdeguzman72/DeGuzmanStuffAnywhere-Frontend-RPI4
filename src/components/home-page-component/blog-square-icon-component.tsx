import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const BlogIcon = () => {
    return (
        <div>
            <Button className="square3">
                <Link to="/chat">
                    Share Posts with Family
                </Link>
            </Button>
        </div>
    )
}

export default BlogIcon;