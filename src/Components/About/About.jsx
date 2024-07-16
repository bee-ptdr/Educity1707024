import React from 'react'
import '../About/About.css'
import about from "../../assets/about.png"
function About() {
    return (
        <>
            <div className="about">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                            <div className="left_about">
                                <img className='w-100' src={about} alt="" />
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="right_about">
                                <h4 className='brand_light' >ABOUT UNIVERSITY</h4>
                                <h2 className='brand_color'>Nurturing Tomorrow's Leaders Today</h2>
                                <p>Embark on transformative education journey with our university comparahensive education programs. Our cutting-edge curriculum is designed to empower students with the knowledge, skills and experience needed to excel in the dynamic field of education.</p>
                                <p>With a focus of innovation, hands-on learning, and personalized mentorship, our programs prepare espiring educator to make a meaningfull empact in classroom, schools and communities</p>
                                <p>Where you aspire to become a teacher, administrator, counselor, or educational leader, our diverse range of programs offer the perfact pathway to achieve your goals and full potential in shaping the future of education. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default About
