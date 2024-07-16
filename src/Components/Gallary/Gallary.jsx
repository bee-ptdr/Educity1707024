import React from 'react';
import './Gallary.css';
import g1 from '../../assets/gallery-1.png'
import g2 from '../../assets/gallery-2.png'
import g3 from '../../assets/gallery-3.png'
import g4 from '../../assets/gallery-4.png'

function Gallary() {
    return (
        <>
            <section className='gallery'>
                <div className="container text-center">
                    <div className="row">
                        <div className="col-md-3">
                            <img src={g1} alt="" />
                        </div>
                        <div className="col-md-3">
                            <img src={g2} alt="" />
                        </div>
                        <div className="col-md-3">
                            <img src={g3} alt="" />
                        </div>
                        <div className="col-md-3">
                            <img src={g4} alt="" />
                        </div>
                    </div>
                    <button className='button2'>See more here</button>
                </div>
            </section>

        </>
    )
}

export default Gallary
