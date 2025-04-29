import React, { Fragment } from 'react';
import Navbar from '../components/Navbar'
import Hero6 from '../components/hero6/Hero6';
import Scrollbar from '../components/scrollbar'
import CoupleSection from '../components/CoupleSection/CoupleSection';
import StorySection from '../components/StorySection/StorySection';
import PortfolioSection from '../components/PortfolioSection/PortfolioSection';
import RSVP from '../components/RSVP';
import BrideGrooms from '../components/BrideGrooms/BrideGrooms';
import EventSection from '../components/EventSection/EventSection';
import PartnerSection from '../components/PartnerSection/PartnerSection';
import Footer from '../components/footer/Footer';



const HomePage = ({ brideName, groomName }) => {

    return (
        <Fragment>
            <Navbar hclass={'wpo-site-header-s1'} />
            <Hero6 />
            <CoupleSection brideName={brideName} groomName={groomName} />
            <StorySection />
            <EventSection />
            <PortfolioSection />
            <RSVP />
            <BrideGrooms />
            <PartnerSection />
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};

export default HomePage;

export async function getStaticProps() {
    return {
      props: {
        brideName: process.env.BRIDE_NAME || 'Bride Name',
        groomName: process.env.GROOM_NAME || 'Groom Name',
      },
    };
  }