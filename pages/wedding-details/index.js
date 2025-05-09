import React, { Fragment } from 'react';
import Footer from '../../components/footer/Footer';
import Navbar2 from '../../components/Navbar2';
import PageTitle from '../../components/pagetitle'
import PartnerSection from '../../components/PartnerSection/PartnerSection';
import Sidebar from '../../components/WeddingDetailsContent.js/sidebar';
import Scrollbar from '../../components/scrollbar'
import wImg from '/public/images/wedding/wedding.jpg'
import wImg2 from '/public/images/wedding/1.jpg'
import wImg3 from '/public/images/wedding/2.jpg'
import Image from 'next/image';

const WeddingDetailsPage = () => {
    return (
        <Fragment>
            <Navbar2 />
            <PageTitle pageTitle={'Wedding Details'} pagesub={'Wedding'} />
            <div className="wpo-wedding-single-area section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-12">
                            <div className="wpo-wedding-single-wrap">
                                <div className="row">
                                    <div className="col-md-6 col-12">
                                        <div className="wpo-wedding-single-item">
                                            {/* <div className="wpo-wedding-single-main-img">
                                                <Image src={wImg} alt=""/>
                                            </div> */}
                                            <div className="wpo-wedding-single-title">
                                                <h3>Wishing you lots of love and happiness.</h3>
                                            </div>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Metus dis posuere amet
                                                tincidunt commodo, velit. Ipsum, hac nibh fermentum nisi, platea condimentum cursus
                                                velit dui. Massa volutpat odio facilisis purus sit elementum. Non, sed velit dictum
                                                quam. Id risus pharetra est, at rhoncus, nec ullamcorper tincidunt. Id aliquet duis
                                                sollicitudin diam, elit sit. Et nisi in libero facilisis sed est. Elit curabitur
                                                amet risus bibendum. Posuere et eget orci, tempor enim.</p>
                                            <p>Hac nibh fermentum nisi, platea condimentum cursus velit dui. Massa volutpat odio
                                                facilisis purus sit elementum. Non, sed velit dictum quam. Id risus pharetra est, at
                                                rhoncus, nec ullamcorper tincidunt. Id aliquet duis sollicitudin diam, elit sit.</p>
                                            <div className="row mt-4">
                                                <div className="col-md-6 col-sm-6 col-12">
                                                    <div className="wpo-p-details-img">
                                                        <Image src={wImg2} alt=""/>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-sm-6 col-12">
                                                    <div className="wpo-p-details-img">
                                                        <Image src={wImg3} alt=""/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-12">
                                        <div className="wpo-wedding-single-item list-widget">
                                            <div className="wpo-wedding-single-title">
                                                <h3>Our Capabilities</h3>
                                            </div>
                                            <p>Massa volutpat odio facilisis purus sit elementum. Non, sed velit dictum quam. Id
                                                risus pharetra est, at rhoncus, nec ullamcorper tincidunt. Id aliquet duis
                                                sollicitudin diam.</p>
                                            <ul>
                                                <li>Non saed velit dictum quam risus pharetra esta.</li>
                                                <li>Id risus pharetra est, at rhoncus, nec ullamcorper tincidunt.</li>
                                                <li>Hac nibh fermentum nisi, platea condimentum cursus.</li>
                                                <li>Massa volutpat odio facilisis purus sit elementum.</li>
                                                <li>Elit curabitur amet risus bibendum.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mt-4">
                                    <div className="col-md-6 col-12">
                                        <div className="wpo-wedding-single-item">
                                            <div className="wpo-wedding-single-title">
                                                <h3>Our approach</h3>
                                            </div>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat suspendisse aenean
                                                tellus augue morbi risus. Sit morbi vitae morbi sed urna sed purus. Orci facilisi
                                                eros sed pellentesque. Risus id sed tortor sed scelerisque. Vestibulum elit
                                                elementum, magna id viverra non, velit. Pretium, eros, porttitor fusce auctor vitae
                                                id. Phasellus scelerisque nibh eleifend vel enim mauris purus. Rutrum vel sem
                                                adipiscing nisi vulputate molestie scelerisque molestie ultrices. Eu, fusce
                                                vulputate diam interdum morbi ac a.</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-12">
                                        <div className="wpo-wedding-single-item list-widget">
                                            <div className="wpo-wedding-single-title">
                                                <h3>Our Wedding Process</h3>
                                            </div>
                                            <ul>
                                                <li>Non saed velit dictum quam risus pharetra esta.</li>
                                                <li>Id risus pharetra est, at rhoncus, nec ullamcorper tincidunt.</li>
                                                <li>Hac nibh fermentum nisi, platea condimentum cursus.</li>
                                                <li>Massa volutpat odio facilisis purus sit elementum.</li>
                                            </ul>
                                        </div>
                                    </div>    
                                </div>
                            </div>
                        </div>
                        <Sidebar/>
                    </div>
                </div>
            </div>
            <PartnerSection pClass={'section-padding pt-0'}/>
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default WeddingDetailsPage;
