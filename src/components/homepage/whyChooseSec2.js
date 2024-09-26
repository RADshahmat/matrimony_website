import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import CountUp from 'react-countup'; // Import the CountUp component
import styles from '../../styles/homepageStyle/whyChooseUsSec2.module.css';

const featureData = [
  {
    iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/d45712a6d61e538c8047624a028b7ca606d3b931da8ee3c987c9ee5923e0fe04?apiKey=68c669943f1543b88775d643f2be81f3&&apiKey=68c669943f1543b88775d643f2be81f3",
    title: "Genuine profiles",
    description: "Genuine Profiles with 100% Verification by Varvel Communication"
  },
  {
    iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/468df2e0fd0628a03195333dc430cfb98bbd24b9642947f0d4bc746e683c7fe6?apiKey=68c669943f1543b88775d643f2be81f3&&apiKey=68c669943f1543b88775d643f2be81f3",
    title: "Confidential",
    description: "We Respect Your Privacy, Ensuring Complete Confidentiality"
  },
  {
    iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/d3d45e80e536b5246ef94688ba100b1d01712a9df766dac2c98b1f692763d833?apiKey=68c669943f1543b88775d643f2be81f3&&apiKey=68c669943f1543b88775d643f2be81f3",
    title: "2000+ Success",
    description: "A Trusted Platform for Thousands of People",
    isCountUp: true // Adding a flag to indicate this card should have a count-up effect
  }
];

const FeatureCard = ({ iconSrc, title, description, isCountUp }) => {
  return (
    <article className={styles.card} data-aos="fade-up">
      <img loading="lazy" src={iconSrc} alt="" className={styles.icon} />
      <h3 className={styles.title}>
        {isCountUp ? (
          <CountUp start={0} end={2000} duration={5} suffix="+" />
        ) : (
          title
        )}
      </h3>
      <p className={styles.description}>{description}</p>
    </article>
  );
};

const WhyChooseUsSec2 = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: false, // Ensure animations occur on every scroll
    });
  }, []);

  return (
    <section className={styles.container}>
      <h3 className={styles.toptitle}>Why Choose Us!</h3>
      <div className={styles.cardList}>
        {featureData.map((feature, index) => (
          <div key={index} className={styles.cardWrapper} data-aos="slide-up">
            <FeatureCard
              iconSrc={feature.iconSrc}
              title={feature.title}
              description={feature.description}
              isCountUp={feature.isCountUp} // Pass the flag to determine if CountUp should be used
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUsSec2;
