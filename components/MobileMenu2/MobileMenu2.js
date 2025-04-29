import React, { Fragment, useState } from 'react';
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Collapse from "@mui/material/Collapse";
import Link from "next/link";

const menus = [
    {
        id: 1,
        title: 'Home',
        link: '/home',
        submenu: [
            {
                id: 11,
                title: 'Home style 1',
                link: '/home'
            },
            {
                id: 12,
                title: 'Home style 2',
                link: '/home2'
            },
            {
                id: 13,
                title: 'Home style 3',
                link: '/home3'
            },
            {
                id: 15,
                title: 'Home Static Hero',
                link: '/home4'
            },
            {
                id: 16,
                title: 'Home Box Style',
                link: '/home5'
            },
            {
                id: 17,
                title: 'Home particles Effect',
                link: '/home6'
            },
            {
                id: 18,
                title: 'Home Video Banar',
                link: '/home7'
            },
            {
                id: 14,
                title: 'Invitation',
                link: '/invitation'
            },
        ]
    },

    {
        id: 2,
        title: 'About',
        link: '/about',
    },

    {
        id: 3,
        title: 'Wedding',
        link: '/wedding',
        submenu: [
            {
                id: 31,
                title: 'Wedding',
                link: '/wedding',
            },
            {
                id: 32,
                title: 'Wedding Details',
                link: '/wedding-details'
            },
        ]
    },
    {
        id: 4,
        title: 'Gallery',
        link: '/gallery',
        submenu: [
            {
                id: 41,
                title: 'Gallery',
                link: '/gallery',
            },
            {
                id: 42,
                title: 'Gallery Style2 ',
                link: '/gallery-s2'
            },
            {
                id: 43,
                title: 'Gallery Slide ',
                link: '/gallery-slide'
            },
        ]
    },
    {
        id: 7,
        title: 'RSVP',
        link: '/RSVP',
    },

    {
        id: 5,
        title: 'Pages',
        link: '/',
        submenu: [
            {
                id: 51,
                title: 'Our story',
                link: '/story'
            },
            {
                id: 52,
                title: 'When & Where',
                link: '/event'
            },
            {
                id: 53,
                title: 'Accomodation',
                link: '/accomodation'
            },
            {
                id: 54,
                title: 'Bridesmaid & Groomsman',
                link: '/groom-bride'
            },
            {
                id: 55,
                title: 'Coming Soon',
                link: '/coming'
            },
            {
                id: 58,
                title: '404 Error',
                link: '/404'
            },
            {
                id: 59,
                title: 'Login',
                link: '/login'
            },
            {
                id: 591,
                title: 'Register',
                link: '/register'
            },
        ]
    },

    {
        id: 6,
        title: 'Blog',
        link: '/blog',
        submenu: [
            {
                id: 61,
                title: 'Blog',
                link: '/blog'
            },
            {
                id: 62,
                title: 'Blog Left sidebar',
                link: '/blog-left-sidebar'
            },
            {
                id: 63,
                title: 'Blog full width',
                link: '/blog-fullwidth'
            },
            {
                id: 64,
                title: 'Blog single',
                link: '/blog-single/1'
            },
            {
                id: 65,
                title: 'Blog single Left sidebar',
                link: '/blog-single-left-sidebar/1'
            },
            {
                id: 66,
                title: 'Blog single full width',
                link: '/blog-single-fullwidth/1'
            },
        ]
    }
    


]


const MobileMenu = () => {

    const [openId, setOpenId] = useState(0);
    const [menuActive, setMenuState] = useState(false);

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <div>
            <div className={`mobileMenu ${menuActive ? "show" : ""}`}>
                <div className="menu-close">
                    <div className="clox" onClick={() => setMenuState(!menuActive)}><i className="ti-close"></i></div>
                </div>

                <ul className="responsivemenu">
                    {menus.map((item, mn) => {
                        return (
                            <ListItem className={item.id === openId ? 'active' : null}  key={mn}>
                                {item.submenu ?
                                    <Fragment>
                                        <p onClick={() => setOpenId(item.id === openId ? 0 : item.id)}>{item.title}
                                          <i className={item.id === openId ? 'fa fa-angle-up' : 'fa fa-angle-down'}></i>
                                        </p>
                                        <Collapse in={item.id === openId} timeout="auto" unmountOnExit>
                                            <List className="subMenu">
                                                <Fragment>
                                                    {item.submenu.map((submenu, i) => {
                                                        return (
                                                            <ListItem key={i}>
                                                                <Link onClick={ClickHandler} className="active"
                                                                    href={submenu.link}>{submenu.title}</Link>
                                                            </ListItem>
                                                        )
                                                    })}
                                                </Fragment>
                                            </List>
                                        </Collapse>
                                    </Fragment>
                                    : <Link className='active'
                                        href={item.link}>{item.title}</Link>
                                }
                            </ListItem>
                        )
                    })}
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
    )
}

export default MobileMenu;