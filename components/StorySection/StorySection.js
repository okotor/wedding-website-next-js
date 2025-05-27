import React from 'react';
import SectionTitle from '../SectionTitle'
import sImg1 from '/public/images/story/1.jpg'
import sImg2 from '/public/images/story/2.jpg'
import sImg3 from '/public/images/story/3.jpg'
import sImg4 from '/public/images/story/4.png'

import shape1 from '/public/images/rsvp/shape1.png'
import shape2 from '/public/images/rsvp/shape2.png'
import Image from 'next/image';

const StorySection = (props) => {


    return (
        <section className="story-section section-padding" id="story">
            <div className="container">
                <div className="row">
                    <SectionTitle MainTitle={'Náš příběh'} />
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
                                            <h3>Setkání po letech</h3>
                                            <span className="date">10. září 2024</span>
                                            <div className="line-shape">
                                                <div className="outer-ball">
                                                    <div className="inner-ball"></div>
                                                </div>
                                            </div>
                                            <p>Vlny věčnosti se nikam neženou. A tak ačkoliv se Maruška s Tomem potkali již téměř před 10 lety, oheň zaplál až právě tohoto dne, kdy je vítr zavál kam jinam než do srdce Velkomoravské říše. Quod mysterium temporis et loci.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="story-timeline-item">
                                <div className="row align-items-center">
                                    <div className="col col-lg-6 col-12 order-lg-1 order-2 text-holder left-text">
                                        <div className="story-text right-align-text fadeInLeftSlow" data-wow-duration="2000ms">
                                            <h3>Oficiálně spolu</h3>
                                            <span className="date">22. října 2024</span>
                                            <div className="line-shape s2">
                                                <div className="outer-ball">
                                                    <div className="inner-ball"></div>
                                                </div>
                                            </div>
                                            <p>Celých šest srdceryvných týdnu trvalo upevnit se v tom, kterým směrem se tito dva chtějí vydat. Gradum proximum facere constituerunt!</p>
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
                                            <h3>Marie řekla ANO!</h3>
                                            <span className="date">21. února 2025</span>
                                            <div className="line-shape">
                                                <div className="outer-ball">
                                                    <div className="inner-ball"></div>
                                                </div>
                                            </div>
                                            <p>Netrvalo dlouho, než se jejich plachtící srdce již dále nemohly držeti při zemi a jejich hvězdička právě vzlétla do výšin. A kde jinde než? Velehrad in principio, Velehrad in fine, Velehrad in aeternum.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="story-timeline-item">
                                <div className="row align-items-center">
                                    <div className="col col-lg-6 col-12 order-lg-1 order-2 text-holder left-text">
                                        <div className="story-text right-align-text fadeInLeftSlow" data-wow-duration="2000ms">
                                            <h3>Bude svatba :-{')'}</h3>
                                            <span className="date">26. červenec 2024</span>
                                            <div className="line-shape s2">
                                                <div className="outer-ball">
                                                    <div className="inner-ball"></div>
                                                </div>
                                            </div>
                                            <p>Manželství je povoláním ke společenství osob, které zrcadlí vnitřní život Trojice, a je reálným symbolem nové a věčné smlouvy mezi Kristem a církví.
                                                Je znamením Boží lásky, věrnosti a plodnosti.</p>
                                        </div>
                                    </div>
                                    <div className="col col-lg-6 col-12 order-lg-2 order-1">
                                        <div className="img-holder left-align-text">
                                            <Image src={sImg4} alt="stroy" className="img img-responsive fadeInRightSlow" data-wow-duration="1500ms"/>
                                                <span className="heart">
                                                    <i className="fi flaticon-dance"></i>
                                                </span>
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


export default StorySection;