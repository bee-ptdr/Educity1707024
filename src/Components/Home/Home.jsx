import React from 'react';
import './Home.css';
import Program from '../Program/Program';
import Gallary from '../Gallary/Gallary';
import About from '../About/About';
import Carousal from '../Testimonials/Carousal';
import Contact from '../Contact/Contact';

function Home() {
    return (
        <>
            <div className="hero">
                <div className="hero_text">
                    <h1>We Ensure better education for a better world</h1>
                    <p>Our cutting-edge curriculum is designed to empower students with the knowledge, skills and experience needed to excel in the dynamic field of education </p>
                    <button className='button'>Explore More</button>
                </div>
            </div>
            <Program/>
            <About/>
            <Gallary/>
            <Carousal/>
            <Contact/>

        </>
    )
}

export default Home
