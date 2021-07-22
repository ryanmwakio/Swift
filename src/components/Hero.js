import React from 'react';
import {Link} from 'react-router-dom'

const Hero = () => {
    return (
        <>
            <div className="hero mx-auto">
                <div className="hero-text">
                    <h1 className="hero-title">Swift-ke digital market</h1>
                    <h3 className="hero-subtitle">The online Electronics shop you can trust</h3>
                    <div className="my-3">
                    <Link to="/products" className="btn btn-swift-outline-primary m-1">view products</Link>
                    <Link to="/login" className="btn btn-swift-primary m-1">Register</Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Hero;
