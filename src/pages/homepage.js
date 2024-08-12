import React from 'react';
import Header from '../components/header'; 
import IntroSecHome from '../components/homepage/introSection1';
import WhyChooseUsSec2 from '../components/homepage/whyChooseSec2';
import HowToFindSpecialSomeone from '../components/homepage/HowToFindSec3';


const HomePage = () => {
    return (

        <div className="homepage">
            <Header />
            <div className='main-content'>
            <IntroSecHome />
            <WhyChooseUsSec2 />
            <HowToFindSpecialSomeone />
            </div>
    
        </div>
      );
};

export default HomePage;
