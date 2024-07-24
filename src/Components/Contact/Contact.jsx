import React from 'react';
import './Contact.css'
import { IoIosMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import whiteArrow from '../../assets/white-arrow.png'
import Title from '../Title/Title';


function Contact() {
    return (
        <>
            <Title subTitle="contact us" title="Get in Touch" />
            <div className="contact_sec main_container">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="address_content">
                                <h3 className='brand_color'>Send us a message</h3>
                                <p className='text_color mt-3'>Feel free reach out through contact form or find our contact information below. Your feedback,questions and suggestions are important to us as we strive to provide exceptional services to our university community.</p>
                                <div className="contact_links mt-3">
                                    <IoIosMail className='icon' />
                                    <p className='text_color'>Contact@educity.com</p>
                                </div>
                                <div className="contact_links">
                                    <FaPhoneAlt className='icon_phone' />
                                    <p className='text_color'>+123-456-789</p>
                                </div>
                                <div className="contact_links">
                                    <IoLocationSharp className='icon' />
                                    <p className='text_color location'>77,Massachusetts Ave,Cambridge<br />MA 02139, United State</p>
                                </div>

                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form_content">
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="" className='text_color' >Your Name</label>
                                        <input type="text" placeholder='Enter Your Name' className='form-control' />
                                    </div>
                                    <div className="form-group mt-3">
                                        <label htmlFor="" className='text_color'>Phone Number</label>
                                        <input type="text" className='form-control' placeholder='Enter Your Mobile Number' />
                                    </div>
                                    <div className="form-group mt-3">
                                        <label htmlFor="" className='text_color'>Write your message here</label>
                                        <textarea rows='5' className='form-control' placeholder='Enter Your Message'></textarea>
                                    </div>
                                    <button className='button2'>Submit Now <img src={whiteArrow} alt="" /></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Contact
