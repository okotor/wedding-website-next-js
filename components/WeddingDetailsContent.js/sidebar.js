import Image from 'next/image';
import React from 'react';
import Link from 'next/link'

import ins1 from '/public/images/instragram/1.jpg'
import ins2 from '/public/images/instragram/2.jpg'
import ins3 from '/public/images/instragram/3.jpg'
import ins4 from '/public/images/instragram/4.jpg'
import ins5 from '/public/images/instragram/5.jpg'
import ins6 from '/public/images/instragram/6.jpg'

const insstgram = [
    {
        insImg: ins1
    },
    {
        insImg: ins2
    },
    {
        insImg: ins3
    },
    {
        insImg: ins4
    },
    {
        insImg: ins5
    },
    {
        insImg: ins6
    },
]

const Sidebar = (props) => {

    const SubmitHandler = (e) => {
        e.preventDefault()
    }

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <div className={`col col-lg-4 col-12 ${props.blLeft}`}>
            <div className="blog-sidebar">
                <div className="widget search-widget">
                    <form onSubmit={SubmitHandler}>
                        <div>
                            <input type="text" className="form-control" placeholder="Search Post.." />
                            <button type="submit"><i className="ti-search"></i></button>
                        </div>
                    </form>
                </div>
                <div className="widget category-widget">
                    <h3>Meal Preferences</h3>
                    <ul>
                        <li><Link onClick={ClickHandler} href="/wedding-details">Chicken Soup <span>5</span></Link></li>
                        <li><Link onClick={ClickHandler} href="/wedding-details">Motton Kabab <span>7</span></Link></li>
                        <li><Link onClick={ClickHandler} href="/wedding-details">Chicken BBQ <span>3</span></Link></li>
                        <li><Link onClick={ClickHandler} href="/wedding-details">Mix Salad<span>6</span></Link></li>
                        <li><Link onClick={ClickHandler} href="/wedding-details">Beef Ribs <span>2</span></Link></li>
                        <li><Link onClick={ClickHandler} href="/wedding-details">Fish BBQ <span>8</span></Link></li>
                    </ul>
                </div>
                <div className="wpo-newsletter-widget widget">
                    <h3>Newsletter</h3>
                    <p>Join 20,000 Sabscribers!</p>
                    <form className="form" onSubmit={SubmitHandler}>
                        <input type="email" placeholder="Email Address" required/>
                            <button type="submit">Sign Up</button>
                    </form>
                    <span>By signing up you agree to our <Link href="/wedding-details">Privecy Policy</Link></span>
                </div>
                <div className="widget wpo-instagram-widget">
                    <div className="widget-title">
                        <h3>Instagram</h3>
                    </div>
                    <ul className="d-flex">
                        {insstgram.map((item, ins) => (
                            <li key={ins}><Image src={item.insImg} alt="" /></li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )

}

export default Sidebar;
