import React, { Fragment } from 'react';
import Scrollbar from '../../components/scrollbar';
import Image from 'next/image';
// import wImg from '/public/images/wedding/wedding.jpg';
// import wImg2 from '/public/images/wedding/1.jpg';
// import wImg3 from '/public/images/wedding/2.jpg';
import wImg4 from '/public/images/wedding/QR-Photos.jpg';

const WeddingDetailsContent = () => (
  <Fragment>
    <div className="wpo-wedding-single-area section-padding">
      <div className="container">
        <div className="wpo-wedding-single-wrap">
          <div className="row">
            <div className="col-md-6 col-12">
              <div className="wpo-wedding-single-item">
                {/* <div className="wpo-wedding-single-main-img">
                  <Image src={wImg} alt=""/>
                </div> */}
                <div className="wpo-wedding-single-title">
                  <h3>Program</h3>
                </div>
                <br/>
                <ul className="program-list">
                  <li>12:00 Svatební obřad</li>
                  <li>14:30 Hostina, Turistické centrum Velehrad</li>
                  <li>15:30 Krájení svatebního dortu</li>
                  <li>15:40 Gratulace novomanželům</li>
                  <li>16:15 Focení novomanželů</li>
                  <li>16:15 Dobrovolné icebreaking aktivity pro svatební hosty</li>
                  <li>18:00 Focení hostů s novomanžely</li>
                  <li>19:00 První tanec</li>
                </ul>
                <div className="row mt-4">
                  <div className="col-md-6 col-sm-6 col-12">
                    {/* <div className="wpo-p-details-img">
                      <Image src={wImg2} alt=""/>
                    </div> */}
                  </div>
                  <div className="col-md-6 col-sm-6 col-12">
                    {/* <div className="wpo-p-details-img">
                      <Image src={wImg3} alt=""/>
                    </div> */}
                  </div>
                </div>
              </div>  
            </div>
            <div className="col-md-6 col-12">
              <div className="wpo-wedding-single-item list-widget">
                <div className="wpo-wedding-single-title">
                  <h3>Parkování & Dary & Důležité kontakty</h3>
                </div>
                <br/>
                <ul>
                  <li>V blízkosti kostela vás prosíme o zaparkování na kterémkoliv přijatelném místě. Centrální kostelní parkoviště zde zde bohužel není.</li>
                  <li>Na místě svatební hostiny bude omezený počet míst vyhrazený pro svatební hosty. V případě jeho naplnění prosíme zaparkujte v okolí. Pokud však budete v placené zóně, nezapomeňte zaplatit denní parkovací poplatek obci 50,- Kč <a href="https://velehrad.parkum.cz/">https://velehrad.parkum.cz/</a></li>
                  <li>Materielní výbavu do domácnosti jsme již za ta léta nasbírali a tedy chcete-li nám věnovat svatební dar, budeme rádi za jeho finanční formu.</li>
                  <li>V případě jakýchkoliv dotazů přede dnem svatby nás neváhejte kontaktovat na WhatsAppu, Messengeru nebo formou sms.</li>
                  </ul>
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-6 col-12">
              <div className="wpo-wedding-single-item list-widget">
                <div className="wpo-wedding-single-title">
                  <h3>Děti</h3>
                </div>
                <p>Na místě svatební hostiny bude hojné vyžítí i pro drobnější svatebčany počínaje skákacím hradem přes velkou rovnou pláň až k hřišti plného prolézaček.</p>
                {/* <div className="wpo-p-details-img">
                      <Image src={wImg2} alt=""/>
                    </div> */}
              </div>
            </div>  
            <div className="col-md-6 col-12">
              <div className="wpo-wedding-single-item">
                <div className="wpo-p-details-img">
                  <Image src={wImg4} alt=""/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Scrollbar />
  </Fragment>
);

export default WeddingDetailsContent;