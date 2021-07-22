import React from 'react';
import { Link } from 'react-router-dom';


const Error = () => {
    return (
        <>
        <div className="error mx-auto text-center">
            <h2 className="hero-error-text">404 error page</h2>
        </div>
        <div className="error-text mx-auto">
            <div>
            <h1 className="error-title">404</h1>
            <h4 className="error-subtitle">oops...page not found!</h4>
            <p className="error-paragraph">Try using the button below to go to main page of site</p>
            <Link to="/" className="btn-swift-primary">Go back to home</Link>
            </div>
        </div>
        </>
    );
}

export default Error;
