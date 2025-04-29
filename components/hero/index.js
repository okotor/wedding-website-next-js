import React from 'react'
import TimeCountDown from '../countdown'
import hImg1 from '/public/images/slider/s1.png'
import shape1 from '/public/images/slider/shape.svg'
import shape2 from '/public/images/slider/flower1.png'
import shape3 from '/public/images/slider/flower2.png'
import Image from 'next/image'


const Hero = (props) => {
    return (
        <section className="static-hero" id='home'>
            <div className="hero-container">
                <div className="hero-inner">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-xl-8 col-lg-6 col-12">
                                <div className="wpo-static-hero-inner">
                                    <div className="shape-1"><Image src={shape1} alt=""/></div>
                                    <div data-swiper-parallax="300" className="slide-title">
                                        <h2>Marunečkaaaa <span>&</span> Tomíkos</h2>
                                    </div>
                                    <div data-swiper-parallax="400" className="slide-text">
                                        <p>We Are Getting Married July 26, 2025</p>
                                    </div>
                                    <div className="wpo-wedding-date">
                                        <div className="clock-grids">
                                            <TimeCountDown/>
                                        </div>
                                    </div>
                                    <div className="clearfix"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="static-hero-right">
                <div className="static-hero-img">
                    <div className="static-hero-img-inner">
                        <Image src={hImg1} alt=""/>
                    </div>
                    <div className="static-hero-shape-1"><Image src={shape2} alt=""/></div>
                    <div className="static-hero-shape-2"><Image src={shape3} alt=""/></div>
                </div>
            </div>
        </section>
    )
}

export default Hero;