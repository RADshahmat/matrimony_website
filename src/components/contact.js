import React from 'react';
import styles from '../styles/contact.module.css';

const ContactSection = () => {
  return (
    <section className={styles.container} id="contact">
      <div className={styles.getintouch} data-aos="flip-right">
        <div className={styles.leftSection}>
          <h2>Get In Touch</h2>
          <p>
            Feel free to reach out to us with any inquiries, questions, or to schedule a consultation.
            We understand that your wedding day is a once-in-a-lifetime event, and we are committed
            to ensuring it is magical.
          </p>
          <p className={styles.signature}>Best Wishes,</p>
          <img
            src={`${process.env.PUBLIC_URL}/assets/butterfly_matrimony.png`}
            className={styles.logo}
            alt="logo"
          />
        </div>

        <div className={styles.rightSection}>
          <div className={styles.contactInfo}>
            <div className={styles.iconText}>
              <img src={`${process.env.PUBLIC_URL}/assets/alarm.svg`} alt="Clock" />
              <span>SAT - THU : 9 AM - 5 PM</span>
            </div>
            <a className={styles.iconText} href="mailto:info@butterflymatrimonial.com">
              <img src={`${process.env.PUBLIC_URL}/assets/mail.svg`} alt="Email" />
              <span>info@butterflymatrimonial.com</span>
            </a>
            <a className={styles.iconText} href="tel:+880123346777">
              <img src={`${process.env.PUBLIC_URL}/assets/phone.svg`} alt="Phone" />
              <span>+880 12334 6777</span>
            </a>
            <a
              className={styles.iconText}
              href="https://www.google.com/maps/place/House+7,+Road+2%2FC,+Block+J,+Baridhara,+Gulshan,+Dhaka-1212"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={`${process.env.PUBLIC_URL}/assets/location.svg`} alt="Location" />
              <span>House 7, Road 2/C, Block J, Baridhara, Gulshan, Dhaka-1212</span>
            </a>
          </div>
        </div>
      </div>

      {/* Embed the Google Map with iframe */}
      <iframe
        className={styles.mapIframe}
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.622254969754!2d90.41738467556803!3d23.788563585877193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c78809a8c187%3A0x8eb70b205839a91d!2sHouse%207%2C%20Road%202%2FC%2C%20Block%20J%2C%20Baridhara%2C%20Gulshan%2C%20Dhaka-1212!5e0!3m2!1sen!2sbd!4v1694089396821!5m2!1sen!2sbd"        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>
  );
};

export default ContactSection;
