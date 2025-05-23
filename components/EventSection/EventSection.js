import React from 'react'
import LocationMap from '../Modal'
import SectionTitleS2 from '../SectionTitleS2'


const Events = [
    {
        title:'Obřad',
        li1:'Sobota, 26. července, 2025 12:00 – 14:00',
        li2:'Kostel Svatého Ducha, Staré Město u Uherského Hradiště 3, 686 03 ',
        // li3:'+1 234-567-8910'
    },
    {
        title:'Hostina',
        li1:'Sobota, 26. července, 2025 14:30 – 23:59',
        li2:'Turistické centrum Velehrad, Salašská 62, 687 06',
        // li3:'+1 234-567-8910'
    },
    {
        title:'Možnosti ubytování',
        li1:'V církevních budovách na Velehradě (Stojanov, Koleje gymnázia) je bohužel pro velikost akcí v tuto dobu kapacita míst vyčerpána',
        li2:'Doporučujeme ubytování v okolí Velehradu, Uherského Hradiště a Starého Města',
        li3:'Rádi vás uvudíme v místě hostiny již v pátek nebo v neděli, kdy budeme uklízet.'
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
                                            <li><LocationMap/></li>
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