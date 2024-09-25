import styles from '../../styles/homepageStyle/meetFounder.module.css';
import { FaFacebookF, FaTwitter, FaWhatsapp, FaLinkedinIn, FaYoutube, FaInstagram } from 'react-icons/fa';
import React from "react";

function MeetFounder() {

  return (
    <section className={styles.meetFounderSection}>
      <div className={styles.contentWrapper}>
        <div className={styles.textColumn} data-aos="fade-up">
          <div className={styles.titleWrapper}>
            <h2 className={styles.title} data-aos="fade-right">Meet, Our Founder</h2>
            <div className={styles.decorativeBorder} aria-hidden="true" data-aos="fade-left">
            <p className={styles.founderText} data-aos="fade-up">
              With over two decades of experience, I am a seasoned professional dedicated to fostering meaningful connections. As an expert relationship consultant, I have guided countless individuals and couples toward building strong, respectful relationships. I also run an innovative consultation platform, helping people find their perfect match.<br /> <br />
              I believe that simplicity and respect are the cornerstones of happiness and success. My empathetic and practical approach makes me a trusted advisor for those seeking to improve their personal connections. Whether you're looking for relationship guidance or a life partner, I am here to help.
            </p>
            </div>
          </div>
        </div>
        <div className={styles.imageColumn} >
          <div className={styles.founderContainer} data-aos="zoom-in">
              <img 
                loading="lazy" 
                src="/assets/founderbackground.svg" 
                className={styles.founderImage} 
                alt="Our founder" 
              />
              <img 
                loading="lazy" 
                src="/assets/apu.svg" 
                className={styles.founderTopImage} 
                alt="Our founder" 
              />
              <div className={styles.namecardImage} aria-hidden="true">
                <div className={styles.namecardTextContainer}>
                    <div className={styles.founderName}>Huraira Shishir</div>
                    <p className={styles.designation}>Founder & Relationship Consultant</p>
                    <p className={styles.designation}>Butterfly Matrimonial Ltd.</p>
                </div>
              </div>

              <img 
                loading="lazy" 
                src="/assets/namecardbottom.svg" 
                className={styles.namecardbottomImage} 
                alt="Our founder" 
              />
             <div className={styles.socialLinks} data-aos="slide-up">
                  <a href="https://www.facebook.com" className={`${styles.iconLink} ${styles.facebook}`}>
                    <FaFacebookF />
                  </a>
                  <a href="https://www.twitter.com" className={`${styles.iconLink} ${styles.twitter}`}>
                    <FaTwitter />
                  </a>
                  <a href="https://www.whatsapp.com" className={`${styles.iconLink} ${styles.whatsapp}`}>
                    <FaWhatsapp />
                  </a>
                  <a href="https://www.linkedin.com" className={`${styles.iconLink} ${styles.linkedin}`}>
                    <FaLinkedinIn />
                  </a>
                  <a href="https://www.youtube.com" className={`${styles.iconLink} ${styles.youtube}`}>
                    <FaYoutube />
                  </a>
                  <a href="https://www.instagram.com" className={`${styles.iconLink} ${styles.instagram}`}>
                    <FaInstagram />
                  </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default MeetFounder;