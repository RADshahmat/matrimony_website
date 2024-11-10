import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import CountUp from 'react-countup';
import axiosInstance from "../../Axios/axios_instance"; 
import styles from '../../styles/homepageStyle/whyChooseUsSec2.module.css';

const featureDataTemplate = [
  {
    iconSrc: "/assets/whyChous1st.svg",
    title: "Genuine profiles",
    description: "Genuine Profiles with 100% Verification by Varvel Communication"
  },
  {
    iconSrc: "/assets/whyChous2nd.svg",
    title: "Confidential",
    description: "We Respect Your Privacy, Ensuring Complete Confidentiality"
  },
  {
    iconSrc: "/assets/whyChous3rd.svg",
    title: "2000+ Success",
    description: "A Trusted Platform for Thousands of People",
    isCountUp: true 
  }
];

const FeatureCard = ({ iconSrc, title, description, isCountUp }) => {
  return (
    <article className={styles.card} data-aos="slide-up">
      <img loading="lazy" src={iconSrc} alt="" className={styles.icon} />
      <h3 className={styles.title}>
        {isCountUp ? (
          <CountUp start={0} end={parseInt(title)} duration={5} suffix="+" />
        ) : (
          title
        )}
      </h3>
      <p className={styles.description}>{description}</p>
    </article>
  );
};

const WhyChooseUsSec2 = () => {
  const [featureData, setFeatureData] = useState(featureDataTemplate);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: false,
      mirror: true,
      offset: 120,
    });

    // Fetch data for the third card from the backend
    const fetchSuccessData = async () => {
      try {
        const response = await axiosInstance.get('/success');
        const { count, text } = response.data;

        // Update the third card's data
        setFeatureData(prevData => {
          const updatedData = [...prevData];
          updatedData[2] = {
            ...updatedData[2],
            title: `${count} Success`,
            description: text
          };
          return updatedData;
        });
      } catch (error) {
        console.error('Error fetching success data:', error);
      }
    };

    fetchSuccessData();
  }, []);

  return (
    <section className={styles.container}>
      <h3 className={styles.toptitle}>Why Choose Us!</h3>
      <div className={styles.cardList}>
        {featureData.map((feature, index) => (
          <div key={index} className={styles.cardWrapper}>
            <FeatureCard
              iconSrc={feature.iconSrc}
              title={feature.title}
              description={feature.description}
              isCountUp={feature.isCountUp && index === 2}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUsSec2;
