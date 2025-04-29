import React from 'react'
import { Gallery, Item } from 'react-photoswipe-gallery'
import SectionTitle from '../SectionTitle'


const Portfolios = [
    {
        Pimg: '/images/portfolio/1.jpg',
    },
    {
        Pimg: '/images/portfolio/2.jpg',
    },
    {
        Pimg: '/images/portfolio/3.jpg',
    },
    {
        Pimg: '/images/portfolio/4.jpg',
    },
    {
        Pimg: '/images/portfolio/5.jpg',
    }
]

const PortfolioSection = (props) => {
    return (
        <section className={`wpo-portfolio-section section-padding ${props.pSclass}`} id="gallery">
            <div className="container">
                <SectionTitle MainTitle={'Sweet Captured Moments'} />
                <div className="sortable-gallery">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="portfolio-grids gallery-container clearfix">
                                <Gallery >
                                    {Portfolios.map((portfolio, pitem) => (
                                        <div className="grid" key={pitem}>
                                            <div className="img-holder">
                                                <Item
                                                    original={portfolio.Pimg}
                                                    thumbnail={portfolio.Pimg}
                                                    width="600"
                                                    height="700"
                                                >
                                                    {({ ref, open }) => (
                                                        <img ref={ref} onClick={open} src={portfolio.Pimg} />
                                                    )}
                                                </Item>
                                            </div>
                                        </div>
                                    ))}
                                </Gallery>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PortfolioSection;