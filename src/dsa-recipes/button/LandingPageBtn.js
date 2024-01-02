import React from 'react';
import { Link } from 'react-router-dom';

const LandingPageBtn = () => {

    return (
        <div>
            <Link to="/recipes-home" className="landing-page-btn">
                Click Here
            </Link>
        </div>
    )
}

export default LandingPageBtn;