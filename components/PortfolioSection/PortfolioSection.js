import React from 'react'
import { Gallery, Item } from 'react-photoswipe-gallery'
import SectionTitle from '../SectionTitle'

const Portfolios = [
  { Pimg: '/images/portfolio/1.jpg', width: 4240, height: 2832 },
  { Pimg: '/images/portfolio/2.jpg', width: 4240, height: 2832 },
  { Pimg: '/images/portfolio/3.jpg', width: 4240, height: 2832 },
  { Pimg: '/images/portfolio/4.jpg', width: 4240, height: 2832 },
  { Pimg: '/images/portfolio/5.jpg', width: 4240, height: 2832 },
];

const PortfolioSection = (props) => {
    return (
        <section className={`wpo-portfolio-section section-padding ${props.pSclass}`} id="gallery">
            <div className="container">
                <SectionTitle MainTitle={'Těšíme se na vás!'} />
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
                                                    width={portfolio.width}
                                                    height={portfolio.height}
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