import React from 'react';
import './Carousal.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import user1 from '../../assets/user-1.png'
import user2 from '../../assets/user-2.png'
import user3 from '../../assets/user-3.png'
import user4 from '../../assets/user-4.png'
import Title from '../Title/Title';

function Carousal() {

    const settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,


    }

    const data = [
        {
            img: user1,
            name: "Emily Williams",
        },
        {
            img: user2,
            name: "Williams Jackson",
        },
        {
            img: user3,
            name: "Cheery John"

        },
        {
            img: user4,
            name: "John Doe"
        }
    ]
    return (
        <>
            <Title subTitle="testimonials" title="What Students Says" />
            <div className="slide_container main_container">
                <Slider {...settings}>
                    {data && data.map((item, ind) => {
                        return (
                            <div className='user_card' key={ind}>
                                <div className="card_head">
                                    <img src={item.img} alt="" />
                                    <div className="name">
                                        <b className='brand_light'>{item.name}</b>
                                        <p>Educity,USA</p>
                                    </div>
                                </div>
                                <div className="card_body">
                                    <p className='text_color'>Choosing to pursue my degree at Educity was one of the best decision i've never made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have trully exceeded mt expectations.</p>
                                </div>
                            </div>
                        )
                    })}
                </Slider>

            </div>

        </>
    )
}

export default Carousal
