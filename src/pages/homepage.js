import React from 'react';
import Header from '../components/header'; 
import Footer from '../components/footer'; 
import IntroSecHome from '../components/homepage/introSection1';
import WhyChooseUsSec2 from '../components/homepage/whyChooseSec2';
import HowToFindSpecialSomeone from '../components/homepage/HowToFindSec3';
import TestimonialSec4 from '../components/homepage/testimonialSec4';
import MeetFounder from '../components/homepage/meetFounder';
import BlogPostsSection from '../components/homepage/storiesNblogsSec6';
import ContactSection from '../components/contact';

const HomePage = () => {
    return (

        <div className="homepage">
            <Header />
            <div className='main-content'>
                <IntroSecHome />
                <WhyChooseUsSec2 />
                <HowToFindSpecialSomeone />
                <TestimonialSec4 />
                <MeetFounder />
                <BlogPostsSection />
            </div>
            <ContactSection />
            <Footer />
        </div>
      );
};

export default HomePage;
