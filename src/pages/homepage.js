import React,{useEffect,useState} from 'react';
import Header from '../components/header'; 
import Footer from '../components/footer'; 
import IntroSecHome from '../components/homepage/introSection1';
import WhyChooseUsSec2 from '../components/homepage/whyChooseSec2';
import HowToFindSpecialSomeone from '../components/homepage/HowToFindSec3';
import TestimonialSec4 from '../components/homepage/testimonialSec4';
import MeetFounder from '../components/homepage/meetFounder';
import BlogPostsSection from '../components/homepage/storiesNblogsSec6';
import ContactSection from '../components/contact';
import axiosInstance from '../Axios/axios_instance';

const HomePage = () => {
    const [testimonials, setTestimonials] = useState([]);
    useEffect(() => {
        const fetchTestimonials = async () => {
          try {
            const response = await axiosInstance.get('/testimonial');
            setTestimonials(response.data); 
            console.log('Fetched Testimonials:', response.data); 
          } catch (error) {
            console.error('Error fetching testimonials:', error);
          }
        };
    
        fetchTestimonials();
      }, []);
    return (
        <div className="homepage">
            <Header />
            <div className='main-content'>
                <IntroSecHome />
                <WhyChooseUsSec2 />
                <HowToFindSpecialSomeone />
                <TestimonialSec4 testimonials={testimonials} />
                <MeetFounder />
                <BlogPostsSection />
            </div>
            <ContactSection />
            <Footer />
        </div>
      );
};

export default HomePage;
