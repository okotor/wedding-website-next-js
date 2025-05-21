import { Fragment } from 'react';
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

const HomePage = () => {

    return (
        <Fragment>
            <Navbar hclass={'wpo-site-header-s1'} />
            <Hero6 />
            <CoupleSection />
            <StorySection />
            <EventSection />
            <WeddingDetailsContent />
            <BrideGrooms />
            <PortfolioSection />
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};

export default HomePage;