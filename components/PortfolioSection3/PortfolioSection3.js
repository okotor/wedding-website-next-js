import React from "react";
import SectionTitle from "../SectionTitle";
import Slider from "react-slick";
import pImg1 from '/public/images/portfolio/13.jpg'
import pImg2 from '/public/images/portfolio/14.jpg'
import pImg3 from '/public/images/portfolio/15.jpg'
import pImg4 from '/public/images/portfolio/16.jpg'
import Image from "next/image";


const Portfolios = [
    {
        Pimg:pImg1,
    },
    {
        Pimg:pImg2,
    },
    {
        Pimg:pImg3,
    },
    {
        Pimg:pImg4,
    }
]


const PortfolioSection3 = (props) => {

    var settings = {
        dots: false,
        arrows: true,
        speed: 1200,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3500,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <section className="wpo-portfolio-section-s2 section-padding" id="gallery">
            <div className="container-fluid">
                <SectionTitle MainTitle={'Sweet Captured Moments'}/>
                <div className="sortable-gallery">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="portfolio-grids gallery-container clearfix">
                                <Slider {...settings}>
                                    {Portfolios.map((portfolio, pitem) => (
                                        <div className="grid" key={pitem}>
                                            <div className="img-holder">
                                                <Image src={portfolio.Pimg} alt="" />
                                            </div>
                                        </div>
                                    ))}
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default PortfolioSection3;