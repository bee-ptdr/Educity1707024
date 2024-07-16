import React from 'react'
import "../Program/Program.css"
import program1 from '../../assets/program-1.png'
import program2 from '../../assets/program-2.png'
import program3 from '../../assets/program-3.png'
import programIcon1 from '../../assets/program-icon-1.png'
import programIcon2 from '../../assets/program-icon-2.png'
import programIcon3 from '../../assets/program-icon-3.png'
function Program() {
    return (
        <>
            <div className="programs">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="program">
                                <img src={program1} alt="" />
                                <div className="caption">
                                    <img src={programIcon1} alt="" />
                                    <p>Graduation Degree</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="program">
                                <img src={program2} alt="" />
                                <div className="caption">
                                    <img src={programIcon2} alt="" />
                                    <p>Master Degree</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="program">
                                <img src={program3} alt="" />
                                <div className="caption">
                                    <img src={programIcon3} alt="" />
                                    <p>Post Graduation Degree</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Program
