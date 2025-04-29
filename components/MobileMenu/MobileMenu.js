import React, { useState } from 'react';
import { Link } from 'react-scroll'
import NavLink from 'next/link'

const MobileMenu = () => {
    const [menuActive, setMenuState] = useState(false);

    const menus = [
        { id: 1, title: 'Domů', type: 'scroll', to: 'video' },
        { id: 2, title: 'Snoubenci', type: 'scroll', to: 'couple' },
        { id: 3, title: 'Náš příběh', type: 'scroll', to: 'story' },
        { id: 4, title: 'Kdy & kde', type: 'scroll', to: 'event' },
        { id: 5, title: 'Praktické informace', type: 'scroll', to: 'event' },
        { id: 6, title: 'Galerie', type: 'scroll', to: 'gallery' },
        { id: 7, title: 'Kontakt', type: 'scroll', to: 'RSVP' },
      ];

    return (
        <div>
            <div className={`mobileMenu ${menuActive ? 'show' : ''}`}>
                <div className="menu-close">
                    <div className="clox" onClick={() => setMenuState(!menuActive)}>
                        <i className="ti-close"></i>
                    </div>
                </div>

                <ul className="responsivemenu">
                    {menus.map((item) => (
                        <li key={item.id}>
                        {item.type === 'scroll' ? (
                            <Link activeClass="active" to={item.to} spy={true} smooth={true} duration={500}>
                                {item.title}
                            </Link>
                            ) : (
                                <NavLink href={item.link}>{item.title}</NavLink>
                            )}
                        </li>
                    ))}
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