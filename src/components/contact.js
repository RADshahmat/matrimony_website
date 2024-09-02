import React from 'react';
import styles from '../styles/contact.module.css';

const ContactSection = () => {
  return (
    <section className={styles.container}>
      <div className={styles.getintouch}>
          <div className={styles.leftSection}>
            <h2>Get In Touch</h2>
            <p>
              Feel free to reach out to us with any inquiries, questions, or to schedule a consultation.
              We understand that your wedding day is a once-in-a-lifetime event, and we are committed
              to ensuring it is magical.
            </p>
            <p className={styles.signature}>Best Wishes,</p>
            <img src={`${process.env.PUBLIC_URL}/assets/butterfly_matrimony.png`} className={styles.logo} alt='logo' />
          </div>

          <div className={styles.rightSection}>
            <div className={styles.contactInfo}>
              <div className={styles.iconText}>
                <img src={`${process.env.PUBLIC_URL}/assets/alarm.svg`} alt="Clock" />
                <span>SAT -THU : 9 AM - 5 PM</span>
              </div>
              <div className={styles.iconText}>
                <img src={`${process.env.PUBLIC_URL}/assets/mail.svg`} alt="Email" />
                <span>info@butterflymatrimonial.com</span>
              </div>
              <div className={styles.iconText}>
                <img src={`${process.env.PUBLIC_URL}/assets/phone.svg`} alt="Phone" />
                <span>+880 12334 6777</span>
              </div>
              <div className={styles.iconText}>
                <img src={`${process.env.PUBLIC_URL}/assets/location.svg`} alt="Location" />
                <span>House 7, Road 2/C, Block J, Baridhara, Gulshan, Dhaka-1212</span>
              </div>
            </div>
          </div>
      </div>
      <img src={`${process.env.PUBLIC_URL}/assets/map.png`} className={styles.mapImage} alt='map' />
    </section>
  );
};

export default ContactSection;
