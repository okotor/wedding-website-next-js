import React from 'react';
import TimeCountDown from '../countdown'
import fr1 from '/public/images/countdown/frame1.png'
import fr2 from '/public/images/countdown/frame2.png'
import fr3 from '/public/images/countdown/frame3.png'
import fr4 from '/public/images/countdown/frame4.png'

const WeddingTime = (props) => {

    return (
        <section className={`wpo-wedding-times ${props.wdClass}`}>
            <div className="container">
                <div className="row">
                    <div className="col col-xs-12">
                        <div className="clock-grids" id="clock2">
                            <TimeCountDown />
                            <div className="frame1"><img src={fr1} alt=""/></div>
                            <div className="frame2"><img src={fr2} alt=""/></div>
                            <div className="frame3"><img src={fr3} alt=""/></div>
                            <div className="frame4"><img src={fr4} alt=""/></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default WeddingTime;