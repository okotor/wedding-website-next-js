import Image from 'next/image';
import React from 'react';
import SectionTitle from '../SectionTitle'
import sImg1 from '/public/images/story/4.jpg'
import sImg2 from '/public/images/story/5.jpg'
import sImg3 from '/public/images/story/6.jpg'

import shape1 from '/public/images/story/shape-1.png'
import shape2 from '/public/images/story/shape-2.png'

const StorySection2 = (props) => {


    return (
        <section className="story-section section-padding" id="story">
            <div className="container">
                <div className="row">
                    <SectionTitle MainTitle={'Our Sweet Story'} />
                </div>
                <div className="row">
                    <div className="col col-xs-12">
                        <div className="story-timeline">
                            <div className="row">
                                <div className="col offset-lg-6 col-lg-6 col-12 text-holder">
                                    <span className="heart">
                                        <i className="fi flaticon-balloon"></i>
                                    </span>
                                </div>
                            </div>
                            <div className="story-timeline-item s1">
                                <div className="row align-items-center">
                                    <div className="col col-lg-6 col-12">
                                        <div className="img-holder right-align-text fadeInLeftSlow" data-wow-duration="1500ms">
                                            <Image src={sImg1} className="img img-responsive" alt="stroy"/>
                                        </div>
                                    </div>
                                    <div className="col col-lg-6 col-12">
                                        <div className="story-text left-align-text fadeInRightSlow" data-wow-duration="2000ms">
                                            <h3>First Time We Meet</h3>
                                            <span className="date">19 Jan 2018</span>
                                            <div className="line-shape">
                                                <div className="outer-ball">
                                                    <div className="inner-ball"></div>
                                                </div>
                                            </div>
                                            <p>Lorem ipsum dolor sit amet, constetur adicng elit. Ultricies nulla mi tempus mcorper for praesent. Ultricies interdum volutpat morbi nam ornare neque elit leo, diam. Malesuada enim ac amurna tempor vel duis.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="story-timeline-item">
                                <div className="row align-items-center">
                                    <div className="col col-lg-6 col-12 order-lg-1 order-2 text-holder left-text">
                                        <div className="story-text right-align-text fadeInLeftSlow" data-wow-duration="2000ms">
                                            <h3>Our First Date</h3>
                                            <span className="date">22 May 2021</span>
                                            <div className="line-shape s2">
                                                <div className="outer-ball">
                                                    <div className="inner-ball"></div>
                                                </div>
                                            </div>
                                            <p>Lorem ipsum dolor sit amet, constetur adicng elit. Ultricies nulla mi tempus mcorper for praesent. Ultricies interdum volutpat morbi nam ornare neque elit leo, diam. Malesuada enim ac amurna tempor vel duis.</p>
                                        </div>
                                    </div>
                                    <div className="col col-lg-6 col-12 order-lg-2 order-1">
                                        <div className="img-holder left-align-text">
                                            <Image src={sImg2} alt="stroy" className="img img-responsive fadeInRightSlow" data-wow-duration="1500ms"/>
                                                <span className="heart">
                                                    <i className="fi flaticon-dance"></i>
                                                </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="story-timeline-item">
                                <div className="row align-items-center">
                                    <div className="col col-lg-6 col-12">
                                        <div className="img-holder right-align-text left-site right-heart">
                                            <Image src={sImg3} alt="stroy" className="img img-responsive fadeInLeftSlow" data-wow-duration="1500ms"/>
                                                <span className="heart">
                                                    <i className="fi flaticon-dove"></i>
                                                </span>
                                        </div>
                                    </div>
                                    <div className="col col-lg-6 col-12">
                                        <div className="story-text left-align-text fadeInRightSlow" data-wow-duration="2000ms">
                                            <h3>She Said Yes!</h3>
                                            <span className="date">15 June 2023</span>
                                            <div className="line-shape">
                                                <div className="outer-ball">
                                                    <div className="inner-ball"></div>
                                                </div>
                                            </div>
                                            <p>Lorem ipsum dolor sit amet, constetur adicng elit. Ultricies nulla mi tempus mcorper for praesent. Ultricies interdum volutpat morbi nam ornare neque elit leo, diam. Malesuada enim ac amurna tempor vel duis.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="shape-1">
                <div className="sticky-shape">
                    <Image src={shape1} alt=""/>
                </div>
            </div>
            <div className="shape-2">
                <div className="sticky-shape">
                    <Image src={shape2} alt=""/>
                </div>
            </div>
        </section>
    )
}


export default StorySection2;