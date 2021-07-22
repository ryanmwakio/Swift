import React from 'react';
import Contact from '../components/Contact';
import DealsOfTheDay from '../components/DealsOfTheDay';
import ExtraInfo from '../components/ExtraInfo';
import FeaturedProducts from '../components/FeaturedProducts';
import Hero from '../components/Hero';
import Services from '../components/Services';


const Home = () => {
    return (
        <>
            <Hero/>
            <Services/>
            <FeaturedProducts/>
            <DealsOfTheDay/>
            <ExtraInfo/>
            <Contact/>
        </>
    );
}

export default Home;
