import Image from "next/image";
import React from "react";
import SectionTitle from "../SectionTitle";
import timg1 from '/public/images/team/img-1.jpg'
import timg2 from '/public/images/team/img-2.jpg'
import timg3 from '/public/images/team/img-3.jpg'
// import timg4 from '/public/images/team/img-4.jpg'
// import timg5 from '/public/images/team/img-5.jpg'
// import timg6 from '/public/images/team/img-6.jpg'

import shape1 from '/public/images/team/shape1.jpg'
import shape2 from '/public/images/team/shape2.jpg'


const brideGrooms = [
  {
    id:'1',
    tImg:timg1,
    name:'Mons. Pavel Posád',
    title:'Oddávající',     
 },
 {
    id:'2',
    tImg:timg2,
    name:'Ludmila Němcová',
    title:'Svědkyně',     
 },
 {
    id:'3',
    tImg:timg3,
    name:'Štěpán Juránek',
    title:'Svědek',     
 },
//  {
//     id:'4',
//     tImg:timg4,
//     name:'Jerome Bell',
//     title:'Groom’s Sister',     
//  },
//  {
//     id:'5',
//     tImg:timg5,
//     name:'Esther Howard',
//     title:'Groom’s Brother',     
//  },
//  {
//     id:'6',
//     tImg:timg6,
//     name:'Bessie Cooper',
//     title:'Brides Maid',     
//  },
]


const BrideGrooms = (props) => {

  return (
      <section id="bridegrooms" className={`wpo-team-section ${props.tClass}`}>
        <div className="container">
          <SectionTitle MainTitle={'Tým'} />
          <div className="wpo-team-wrap">
            <div className="bridegrooms-grid">
              {brideGrooms.map((brideGroom, tm) => (
                <div className="bridegroom-col" key={tm}>
                    <div className="wpo-team-item">
                        <div className="wpo-team-img">
                            <div className="wpo-team-img-inner">
                                <Image src={brideGroom.tImg} alt="" />
                            </div>
                            <div className="shape-1"><Image src={shape1} alt=""/></div>
                            <div className="shape-2"><Image src={shape2} alt=""/></div>
                        </div>
                        <div className="wpo-team-text">
                            <h3>{brideGroom.name}</h3>
                            <span>{brideGroom.title}</span>
                        </div>
                    </div>
                </div>
              ))}
            </div>
          </div>
        </div>
    </section>
  )
}

export default BrideGrooms;