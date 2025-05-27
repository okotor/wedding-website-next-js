import React, { useState } from 'react';
import { Link } from 'react-scroll'
import NavLink from 'next/link'

const MobileMenu = () => {
    const [menuActive, setMenuState] = useState(false);

    const menus = [
        { id: 1, title: 'Domů', type: 'scroll', to: 'video', offset: 0 },
        { id: 2, title: 'Snoubenci', type: 'scroll', to: 'couple', offset: 0 },
        { id: 3, title: 'Náš příběh', type: 'scroll', to: 'story', offset: 0 },
        { id: 4, title: 'Svatební den', type: 'scroll', to: 'event', offset: 0 },
        { id: 5, title: 'Důležité informace', type: 'scroll', to: 'important-info', offset: -130 },
        { id: 6, title: 'Tým', type: 'scroll', to: 'bridegrooms', offset: -130 },
        { id: 7, title: 'Galerie', type: 'scroll', to: 'gallery', offset: 0 },
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
                            <Link
                            activeClass="active"
                            to={item.to}
                            spy={true}
                            smooth={true}
                            duration={500}
                            offset={item.offset}
                          >
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