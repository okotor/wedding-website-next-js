import React from 'react';
import Link from 'next/link'
import coupleImg1 from '/public/images/couple/2.jpg'
import coupleImg2 from '/public/images/couple/3.jpg'

import shape1 from '/public/images/couple/shape-1.png'
import shape2 from '/public/images/couple/shape-2.png'
import shape3 from '/public/images/couple/shape-3.png'
import shape4 from '/public/images/couple/shape-4.png'
import Image from 'next/image';



const CoupleSection = ( { brideName, groomName, cClass } ) => {

    return (
        <section className={`couple-section section-padding ${cClass}`} id="couple">
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col col-lg-11">
                        <div className="couple-area clearfix">
                            <div className="couple-item bride">
                                <div className="row align-items-center">
                                    <div className="col-lg-4">
                                        <div className="couple-img">
                                            <Image src={coupleImg1} alt="" />
                                            <div className="couple-shape">
                                                <Image src={shape3} alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-7">
                                        <div className="couple-text">
                                            <h3>{brideName}</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna orci auctor
                                                vitae nisl. Erat fringilla pellentesque amet tempus. Commodo mi vitae,
                                                sed sagittis blandit. Leo netus magna fusce ac turpis mauris maecenas
                                                non.</p>
                                            <div className="social">
                                                <ul>
                                                    <li><Link href="/"><i className="ti-facebook"></i></Link></li>
                                                    <li><Link href="/"><i className="ti-twitter-alt"></i></Link></li>
                                                    <li><Link href="/"><i className="ti-instagram"></i></Link></li>
                                                    <li><Link href="/"><i className="ti-pinterest"></i></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="couple-item groom">
                                <div className="row align-items-center">
                                    <div className="col-lg-7 order-lg-1 order-2">
                                        <div className="couple-text">
                                            <h3>{groomName}</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna orci auctor
                                                vitae nisl. Erat fringilla pellentesque amet tempus. Commodo mi vitae,
                                                sed sagittis blandit. Leo netus magna fusce ac turpis mauris maecenas
                                                non.</p>
                                            <div className="social">
                                                <ul>
                                                    <li><Link href="/"><i className="ti-facebook"></i></Link></li>
                                                    <li><Link href="/"><i className="ti-twitter-alt"></i></Link></li>
                                                    <li><Link href="/"><i className="ti-instagram"></i></Link></li>
                                                    <li><Link href="/"><i className="ti-pinterest"></i></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 order-lg-2 order-1">
                                        <div className="couple-img">
                                            <Image src={coupleImg2} alt="" />
                                            <div className="couple-shape">
                                                <Image src={shape4} alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="shape-1">
                <Image src={shape1} alt="" />
            </div>
            <div className="shape-2">
                <Image src={shape2} alt="" />
            </div>
        </section>

    );
}



export default CoupleSection;