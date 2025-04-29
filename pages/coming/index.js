import Image from 'next/image';
import React, { Fragment } from 'react';
import TimeCountDown from '../../components/countdown';
import Navbar from '../../components/Navbar';
import shape1 from '/public/images/slider/flower1.png'
import shape2 from '/public/images/slider/flower2.png'


const ComingSoonPage = () => {
    const SubmitHandler = (e) => {
        e.preventDefault()
    }
    return (
        <Fragment>
            <Navbar/>
            <section className="static-hero-s4">
                <div className="hero-container">
                    <div className="hero-inner">
                        <div className="container">
                            <div className="coming-soon-section">
                                <div className="coming-soon-wrap">
                                    <div className="coming-soon-item">
                                        <div className="coming-soon-text">
                                            <h2>Coming Soon</h2>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                tempor
                                                incididunt ut labore et dolore.</p>
                                        </div>
                                    </div>
                                    <div className="coming-soon-item">
                                        <div className="wpo-wedding-date">
                                            <h2 className="hidden">some</h2>
                                            <div className="clock-grids">
                                                <TimeCountDown />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="coming-soon-item">
                                        <div className="wpo-coming-contact">
                                            <form onSubmit={SubmitHandler} className="contact-validation-active">
                                                <div className="row justify-content-center">
                                                    <div className="col-lg-6 col-sm-6 col-12">
                                                        <input type="text" className="form-control" name="name" id="name"
                                                            placeholder="Name*" />
                                                    </div>
                                                    <div className="col-lg-6 col-sm-6 col-12">
                                                        <input type="email" className="form-control" name="email" id="email"
                                                            placeholder="Email" />
                                                    </div>
                                                    <div className="col-lg-3 col-sm-4 col-6">
                                                        <div className="submit-area">
                                                            <button type="submit">Notify Me</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="shape-1"><Image src={shape1} alt="" /></div>
                                    <div className="shape-2"><Image src={shape2} alt="" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
};
export default ComingSoonPage;
