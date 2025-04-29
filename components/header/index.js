import React from 'react'
import { Link } from 'react-scroll'
import NavLink from 'next/link'
import MobileMenu from '../MobileMenu/MobileMenu'


const Header = (props) => {

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  }

  return (
    <header id="header">
      <div className={`wpo-site-header ${props.hclass}`}>
        <nav className="navigation navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-lg-3 col-md-3 col-3 d-lg-none dl-block">
                <div className="mobail-menu">
                  <MobileMenu />
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-6">
                <div className="navbar-header">
                  <NavLink className="navbar-brand logo" href='/'><small>Mea</small>love<span><i
                    className="fi flaticon-dove"></i></span></NavLink>
                </div>
              </div>
              <div className="col-lg-8 col-md-1 col-1">
                <div id="navbar" className="collapse navbar-collapse navigation-holder">
                  <button className="menu-close"><i className="ti-close"></i></button>
                  <ul className="nav navbar-nav mb-2 mb-lg-0">
                    <li><Link activeClass="active" to="video" spy={true} smooth={true} duration={500} >Domů</Link></li>
                    <li><Link activeClass="active" to="couple" spy={true} smooth={true} duration={500} >Snoubenci</Link></li>
                    <li><Link activeClass="active" to="story" spy={true} smooth={true} duration={500} >Náš příběh</Link></li>
                    <li><Link activeClass="active" to="event" spy={true} smooth={true} duration={500} >Kdy & kde</Link></li>
                    <li><Link activeClass="active" to="event" spy={true} smooth={true} duration={500} >Praktické informace</Link></li>
                    <li><Link activeClass="active" to="gallery" spy={true} smooth={true} duration={500} >Galerie</Link></li>
                    <li><Link activeClass="active" to="rsvp" spy={true} smooth={true} duration={500} >Kontakt</Link></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-2">
                <div className="header-right">
                  <Link className="theme-btn" activeClass="active" to="RSVP" spy={true} smooth={true} duration={500}><span className="text">Potvrdit účast</span> <span className="mobile">
                    <i className="fi flaticon-user"></i>
                  </span></Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header;