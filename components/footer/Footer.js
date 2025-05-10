import React from 'react'
import Link from 'next/link'

const Footer = (props) =>{

    const ClickHandler = () =>{
        window.scrollTo(10, 0);
    }

  return(

    <footer className="wpo-site-footer">
        <div className="wpo-lower-footer">
            <div className="container">
                <div className="row">
                    <div className="col col-xs-12">
                        <p className="copyright"> &copy; 2025 M&T <Link onClick={ClickHandler}
                                href="/"></Link></p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
} 

export default Footer;