
import styles from '../../styles/homepageStyle/meetFounder.module.css';
import React, { useState, useEffect } from "react";


function MeetFounder() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.querySelector(`.${styles.meetFounderSection}`);
      if (element) {
        const rect = element.getBoundingClientRect();
        const isInViewport = rect.top <= window.innerHeight && rect.bottom >= 0;
        setIsVisible(isInViewport);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className={`${styles.meetFounderSection} ${isVisible ? styles.visible : ''}`}>
      <div className={styles.contentWrapper}>
        <div className={styles.textColumn}>
          <div className={styles.titleWrapper}>
            <h2 className={styles.title}>Meet, Our Founder</h2>
            <div className={styles.decorativeBorder} aria-hidden="true">
            <p className={styles.founderText}>With over two decades of experience, I am a seasoned professional dedicated to fostering meaningful connections. As an expert relationship consultant, I have guided countless individuals and couples toward building strong, respectful relationships. I also run an innovative consultation platform, helping people find their perfect match.
I believe that simplicity and respect are the cornerstones of happiness and success. My empathetic and practical approach makes me a trusted advisor for those seeking to improve their personal connections. Whether you're looking for relationship guidance or a life partner, I am here to help.
                </p>
            </div>
          </div>
        </div>
        <div className={styles.imageColumn}>
          <img 
            loading="lazy" 
            src="/assets/founderbackground.svg" 
            className={styles.founderImage} 
            alt="Our founder" 
          />
        </div>
      </div>
    </section>
  );
}

export default MeetFounder;