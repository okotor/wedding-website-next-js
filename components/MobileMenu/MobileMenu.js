import React, { useState } from 'react';
import { Link } from 'react-scroll'
import NavLink from 'next/link'

const MobileMenu = () => {
    const [menuActive, setMenuState] = useState(false);

    return (
        <div>
            <div className={`mobileMenu ${menuActive ? 'show' : ''}`}>
                <div className="menu-close">
                    <div className="clox" onClick={() => setMenuState(!menuActive)}>
                        <i className="ti-close"></i>
                    </div>
                </div>

                <ul className="responsivemenu">
                    {menus.map((item, mn) => (
                        <li key={mn}>
                            <NavLink onClick={ClickHandler} href={item.link}>
                                {item.title}
                            </NavLink>
                        </li>
                    ))}                                      
                    <li><Link activeClass="active" to="video" spy={true} smooth={true} duration={500} >Domů</Link></li>
                    <li><Link activeClass="active" to="couple" spy={true} smooth={true} duration={500} >Snoubenci</Link></li>
                    <li><Link activeClass="active" to="story" spy={true} smooth={true} duration={500} >Náš příběh</Link></li>
                    <li><Link activeClass="active" to="event" spy={true} smooth={true} duration={500} >Kdy & kde</Link></li>
                    <li><Link activeClass="active" to="event" spy={true} smooth={true} duration={500} >Praktické informace</Link></li>
                    <li><Link activeClass="active" to="gallery" spy={true} smooth={true} duration={500} >Galerie</Link></li>
                    <li><Link activeClass="active" to="RSVP" spy={true} smooth={true} duration={500} >Kontakt</Link></li>
                </ul>
            </div>

            <div className="showmenu" onClick={() => setMenuState(!menuActive)}>
                <button type="button" className="navbar-toggler open-btn">
                    <span className="icon-bar first-angle"></span>
                    <span className="icon-bar middle-angle"></span>
                    <span className="icon-bar last-angle"></span>
                </button>
            </div>
        </div>
    );
};

export default MobileMenu;