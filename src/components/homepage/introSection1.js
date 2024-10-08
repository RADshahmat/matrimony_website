import React, { useState, useEffect } from 'react';
import styles from '../../styles/homepageStyle/introSec1.module.css';
import { Link } from 'react-router-dom';
import axiosInstance from '../../Axios/axios_instance';

const IntroSecHome = () => {
  const [introText, setIntroText] = useState(''); // Initially an empty string

  // Fetch text from backend when the component mounts
  useEffect(() => {
    const getText = async () => {
      try {
        const response = await axiosInstance.get(`/get_intro_text`);
        if (response.data && response.data.length > 0) {
          setIntroText(response.data[0].text); // Assuming 'text' is the column name
        }
      } catch (error) {
        console.error('Failed to fetch intro text:', error);
      }
    };

    getText();
  }, []); // Empty dependency array ensures it runs once on mount

  return (
    <div className={styles.container}>
      <img
        className={styles.top_cover}
        src={`https://backend.butterfly.hurairaconsultancy.com/uploads/landingCoverImage.webp`}
        alt="Cover"
      />

      <section className={styles.intro}>
        <div className={styles.introframe} data-aos="flip-right">
          <div className={styles.intro_upper}>
            <div className={styles.intro_heading}>Butterfly Matrimony</div>
            <div className={styles.subheading_intro}>Your perfect matchmaker</div>
          </div>
          <div className={styles.matrimony_desc}>
            {introText || 'Loading...'} {/* Display introText from backend */}
          </div>
          <div className={styles.intro_footer}>
            <span className={styles.footer_spn}>#1</span> MATRIMONY
          </div>
        </div>
      </section>

      <section className={styles.biodata}>
        <div className={styles.contentWrapper}>
          <div className={styles.textColumn}>
            <h1 className={styles.title}>
              Effortlessly <br /> Create Your Bio-Data Today!
            </h1>
            <Link to={'/createCV'} className={styles.ctaButton}>
              Get Started
            </Link>
          </div>
          <div className={styles.imageColumn}>
            <img
              loading="lazy"
              src={`${process.env.PUBLIC_URL}/assets/biodataform.png`}
              alt="Bio-Data Creation Illustration"
              className={styles.bioImage}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default IntroSecHome;
