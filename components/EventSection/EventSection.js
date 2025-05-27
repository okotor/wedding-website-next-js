import React from 'react'
import Image from 'next/image'
import SectionTitleS2 from '../SectionTitleS2'
import obradImg1 from '/public/images/event/obrad-image1.jpg';
import hostinaImg3 from '/public/images/event/hostina-image3.jpg';



const Events = [
    {
        title:'Obřad',
        li1:'Sobota, 26. července, 2025, 12:00',
        li2:'Kostel Svatého Ducha, Staré Město u Uherského Hradiště 3, PSČ: 686 03 ',
        mapSrc: 'https://maps.app.goo.gl/7VtQY5m8trHfAayQA',
        // li3:'+1 234-567-8910'
        images: [obradImg1]
    },
    {
        title:'Hostina',
        li1:'Sobota, 26. července, 2025, 14:30 – 23:59',
        li2:'Turistické centrum Velehrad, Velehrad, Salašská 62, PSČ: 687 06 ',
        mapSrc: 'https://maps.app.goo.gl/jXbtx8Hj9wxfSDPu7',
        images: [hostinaImg3]
    },
    {
        title:'Možnosti ubytování',
        li1:'Ve všech veřejných ubytovacích zařízeních na Velehradě (Stojanov, internát SGV, Konírna, Sýpka,..) je žel pro četnost akcí v tuto dobu kapacita míst vyčerpána.',
        li2:'Doporučujeme ubytování v okolí Velehradu, Uherského Hradiště a Starého Města.',
        li3:'Rádi vás uvítáme na místě hostiny již v pátek, kdy budou probíhat přípravy.',
        mapSrc: 'https://maps.app.goo.gl/is1bP36NXt9t2WHEA'
    },

]

const EventSection = (props) => {
    return (
        <section className={`wpo-event-section section-padding ${props.eClass}`} id="event">
            <div className="container">
                <SectionTitleS2 MainTitle={'Svatební den'} />
                <div className="wpo-event-wrap">
                    <div className="event-grid">
                        {Events.map((event, eitem) => (
                            <div className="event-grid-col" key={eitem}>
                                <div className="wpo-event-item">
                                    <div className="wpo-event-text">
                                        <h2>{event.title}</h2>
                                        <ul>
                                            <li>{event.li1}</li>
                                            <li>{event.li2}</li>
                                            <li>{event.li3}</li>
                                            {event.images && event.images.map((img, index) => (
                                            <li key={index}>
                                                <Image
                                                    src={img}
                                                    alt={`${event.title} obrázek ${index + 1}`}
                                                    style={{ borderRadius: '8px' }}
                                                    width={800}
                                                    height={600}
                                                />
                                            </li>
                                        ))}
                                        </ul>
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

export default EventSection;