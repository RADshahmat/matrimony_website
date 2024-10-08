import { FaFacebookF, FaTwitter, FaWhatsapp, FaLinkedinIn, FaYoutube, FaInstagram } from 'react-icons/fa';
import React, { useEffect, useState } from 'react';
import axiosInstance from '../../Axios/axios_instance';  // Assuming this is your Axios instance
import styles from '../../styles/homepageStyle/meetFounder.module.css';

function MeetFounder() {
  // State to store social media links fetched from the backend
  const [socialLinks, setSocialLinks] = useState({
    facebook_link: '',
    twitter_link: '',
    whatsapp_link: '',
    linkedin_link: '',
    youtube_link: '',
    instagram_link: ''
  });

  // Fetch social links from backend when component mounts
  useEffect(() => {
    const fetchSocialLinks = async () => {
      try {
        const response = await axiosInstance.get('/founder_social_links');
        setSocialLinks(response.data);
      } catch (error) {
        console.error('Error fetching social links:', error);
      }
    };
    fetchSocialLinks();
  }, []);

  return (
    <section className={styles.meetFounderSection}>
      <div className={styles.contentWrapper}>
        <div className={styles.textColumn} data-aos="fade-up">
          <div className={styles.titleWrapper}>
            <h2 className={styles.title} data-aos="fade-right">Meet, Our Founder</h2>
            <div className={styles.decorativeBorder} aria-hidden="true" data-aos="fade-left">
              <p className={styles.founderText} data-aos="fade-up">
                With over two decades of experience, I am a seasoned professional dedicated to fostering meaningful connections. As an expert relationship consultant, I have guided countless individuals and couples toward building strong, respectful relationships. I also run an innovative consultation platform, helping people find their perfect match.<br /><br />
                I believe that simplicity and respect are the cornerstones of happiness and success. My empathetic and practical approach makes me a trusted advisor for those seeking to improve their personal connections. Whether you're looking for relationship guidance or a life partner, I am here to help.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.imageColumn}>
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

            {/* Social Links */}
            <div className={styles.socialLinks} data-aos="slide-up">
              <a href={socialLinks.facebook_link} className={`${styles.iconLink} ${styles.facebook}`} target="_blank" rel="noopener noreferrer">
                <FaFacebookF />
              </a>
              <a href={socialLinks.twitter_link} className={`${styles.iconLink} ${styles.twitter}`} target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
              <a href={socialLinks.whatsapp_link} className={`${styles.iconLink} ${styles.whatsapp}`} target="_blank" rel="noopener noreferrer">
                <FaWhatsapp />
              </a>
              <a href={socialLinks.linkedin_link} className={`${styles.iconLink} ${styles.linkedin}`} target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn />
              </a>
              <a href={socialLinks.youtube_link} className={`${styles.iconLink} ${styles.youtube}`} target="_blank" rel="noopener noreferrer">
                <FaYoutube />
              </a>
              <a href={socialLinks.instagram_link} className={`${styles.iconLink} ${styles.instagram}`} target="_blank" rel="noopener noreferrer">
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
