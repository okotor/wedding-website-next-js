import React from 'react'
import LocationMap from '../Modal'
import SectionTitleS2 from '../SectionTitleS2'


const Events = [
    {
        title:'Obřad',
        li1:'Monday, 25 Sep, 2023 1:00 PM – 4:30 PM',
        li2:'Estern Star Plaza, Road 123, USA',
        li3:'+1 234-567-8910'
    },
    {
        title:'Hostina',
        li1:'Monday, 25 Sep, 2023 1:00 PM – 4:30 PM',
        li2:'Estern Star Plaza, Road 123, USA',
        li3:'+1 234-567-8910'
    },
    {
        title:'Možnosti ubytování',
        li1:'Monday, 25 Sep, 2023 1:00 PM – 4:30 PM',
        li2:'Estern Star Plaza, Road 123, USA',
        li3:'+1 234-567-8910'
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