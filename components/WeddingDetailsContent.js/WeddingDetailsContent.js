import React, { Fragment } from 'react';
import Scrollbar from '../../components/scrollbar';
import Image from 'next/image';
import wImg from '/public/images/wedding/wedding.jpg';
import wImg2 from '/public/images/wedding/QR-gifts.jpg';
// import wImg3 from '/public/images/wedding/2.jpg';

import wImg4 from '/public/images/wedding/QR-Photos.jpg';
import wImg5 from '/public/images/wedding/deti1.jpg';
import wImg6 from '/public/images/wedding/deti2.jpg';

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
                <div className="wpo-wedding-single-title" id="important-info">
                  <h3>Program</h3>
                </div>
                <br/>
                <ul className="program-list">
                  <li>12:00 Svatební obřad</li>
                  <li>14:30 Hostina, Turistické centrum Velehrad</li>
                  <li>15:30 Krájení svatebního dortu</li>
                  <li>15:40 Gratulace novomanželům</li>
                  <li>16:15 Focení novomanželů</li>
                  <li>16:15 Dobrovolné aktivity pro svatební hosty</li>
                  <li>18:00 Focení hostů s novomanžely</li>
                  <li>19:00 První tanec</li>
                </ul>
                <br/>
                <Image
                  src={wImg}
                  alt="belgian chocolates"
                  style={{ borderRadius: '8px' }}
                />
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
                  <li>V blízkosti kostela vás prosíme o zaparkování na kterémkoliv přijatelném místě. Parkoviště jsou z obou stran kostela.</li>
                  <li>Na místě svatební hostiny bude omezený počet parkovacích míst vyhrazený pro svatební hosty přímo před budovou Turistického centra. V případě jeho naplnění prosíme zaparkujte v okolí. Pokud však budete v placené zóně, v jistých částech obce je stanoven parkovací poplatek obci 50,- Kč, viz odkaz (<a href="https://velehrad.parkum.cz/">https://velehrad.parkum.cz/</a>)</li>
                  <li>Materielní výbavu do domácnosti jsme již za ta léta nasbírali a tedy chcete-li nám věnovat svatební dar, budeme rádi za jeho finanční formu na místě nebo na QR kódu níže (příp. na účet 670100-2213443533/6210).</li>
                  <li>V případě jakýchkoliv dotazů přede dnem svatby nás neváhejte kontaktovat na WhatsAppu, Messengeru nebo formou sms.</li>
                  <li>Několik dní před svatbou vás přidáme do WhatsApp skupiny, které založíme pro potřeby sdílení nejnovějších informací týkajících se svatby. Jestliže nechcete být součástí této skupiny, dejte nám to prosím vědět dopředu.</li>
                  <li>V případě, že v den svatby z jakéhokoliv důvodu nebudete moci přijet, napište prosím sms zprávu svědkovi Štěpánovi Juránkovi na čísle +420 739 447 803.</li>
                  </ul>
                  <br/>
               <div style={{ textAlign: 'center' }}>
                <Image
                  src={wImg2}
                  alt="qr payment"
                  style={{ borderRadius: '8px', width: '275px', height: 'auto' }}
                />
              </div>
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-6 col-12">
              <div className="wpo-wedding-single-item list-widget">
                <div className="wpo-wedding-single-title">
                  <h3>Děti</h3>
                </div>
                <p>Na místě svatební hostiny bude hojné vyžítí i pro drobnější svatebčany počínaje skákacím hradem přes velkou rovnou pláň až k hřišti plného prolézaček, fotbalového, basketbalového a skateboardového hřiště.</p>
                {/* <div className="wpo-p-details-img">
                      <Image src={wImg2} alt=""/>
                    </div> */}
                  <Image
                    src={wImg5}
                    alt="kids"
                    style={{ borderRadius: '8px' }}
                  />
                  <br/>
                  <Image
                      src={wImg6}
                      alt="kids2"
                      style={{ borderRadius: '8px' }}
                  />
              </div>
            </div>  
            <div className="col-md-6 col-12">
              <div className="wpo-wedding-single-item list-widget">
                <div className="wpo-wedding-single-title">
                  <h3>Fotky</h3>
                </div>
                <p>Budeme moc rádi za sdílení vašich fotek z celého dne s námi i všemi svatebními hosty skrze QR kód níže. Prosíme jen, ať na obřadu fotíte jen z lavice a nechodíte kvůli focení po kostele.</p>
                <div className="wpo-p-details-img">
                  <Image
                    src={wImg4}
                    alt="QR Code"
                    style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
                  />
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