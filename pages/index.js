import React, { Fragment } from 'react';
import Navbar from '../components/Navbar'
import Hero6 from '../components/hero6/Hero6';
import Scrollbar from '../components/scrollbar'
import CoupleSection from '../components/CoupleSection/CoupleSection';
import StorySection from '../components/StorySection/StorySection';
import PortfolioSection from '../components/PortfolioSection/PortfolioSection';
import WeddingDetailsContent from '../components/WeddingDetailsContent.js/WeddingDetailsContent';
import BrideGrooms from '../components/BrideGrooms/BrideGrooms';
import EventSection from '../components/EventSection/EventSection';
import Footer from '../components/footer/Footer';
import WeddingTime from '../components/weddingTime/WeddingTime';



const HomePage = ({ brideName, groomName }) => {

    return (
        <Fragment>
            <Navbar hclass={'wpo-site-header-s1'} />
            <Hero6 />
            <WeddingTime />
            <CoupleSection brideName={brideName} groomName={groomName} />
            <StorySection />
            <WeddingDetailsContent />
            <EventSection />
            <PortfolioSection />
            {/* <RSVP /> */}
            <BrideGrooms />
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