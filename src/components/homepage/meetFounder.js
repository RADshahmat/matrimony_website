import styles from '../../styles/homepageStyle/meetFounder.module.css';
import React from "react";


function MeetFounder() {

  return (
    <section className={styles.meetFounderSection}>
      <div className={styles.contentWrapper}>
        <div className={styles.textColumn}>
          <div className={styles.titleWrapper}>
            <h2 className={styles.title}>Meet, Our Founder</h2>
            <div className={styles.decorativeBorder} aria-hidden="true">
            <p className={styles.founderText}>
  With over two decades of experience, I am a seasoned professional dedicated to fostering meaningful connections. As an expert relationship consultant, I have guided countless individuals and couples toward building strong, respectful relationships. I also run an innovative consultation platform, helping people find their perfect match.<br /> <br />
  I believe that simplicity and respect are the cornerstones of happiness and success. My empathetic and practical approach makes me a trusted advisor for those seeking to improve their personal connections. Whether you're looking for relationship guidance or a life partner, I am here to help.
</p>

            </div>
          </div>
        </div>
        <div className={styles.imageColumn}>
          <div className={styles.founderContainer}>
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
              <div className={styles.socialLinks}>
                  <a href="https://www.google.com" className={styles.iconLink}>
                    <img src={`${process.env.PUBLIC_URL}/assets/facebook.svg`} alt="Facebook" />
                  </a>
                  <a href="https://www.google.com" className={styles.iconLink}>
                    <img src={`${process.env.PUBLIC_URL}/assets/twitter.svg`} alt="Twitter" />
                  </a>
                  <a href="https://www.google.com" className={styles.iconLink}>
                    <img src={`${process.env.PUBLIC_URL}/assets/whatsapp.svg`} alt="WhatsApp" />
                  </a>
                  <a href="https://www.google.com" className={styles.iconLink}>
                    <img src={`${process.env.PUBLIC_URL}/assets/linkedin.svg`} alt="LinkedIn" />
                  </a>
                  <a href="https://www.google.com" className={styles.iconLink}>
                    <img src={`${process.env.PUBLIC_URL}/assets/youtube.svg`} alt="YouTube" />
                  </a>
                  <a href="https://www.google.com" className={styles.iconLink}>
                    <img src={`${process.env.PUBLIC_URL}/assets/instagram.svg`} alt="Instagram" />
                  </a>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MeetFounder;