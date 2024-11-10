import React, {useEffect} from 'react';
import styles from '../styles/contact.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ContactSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 800, // Adjust as needed
      easing: 'ease-in-out', // Smoother easing
      once: false, 
      mirror: true, // Allows animation to happen again when scrolling back
      offset: 120, // Distance in pixels from the original trigger point
    });
  }, []);

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
              href="https://www.google.com.bd/maps/place/Butterfly+Matrimonial/@23.7947184,90.4250835,15z/data=!4m2!3m1!1s0x0:0xe570e95050a6ee5c?sa=X&ved=1t:2428&ictx=111"
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
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.622254969754!2d90.4225086!3d23.7947184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c732234c7979:0xe570e95050a6ee5c!2sButterfly+Matrimonial!5e0!3m2!1sen!2sbd!4v1694089396821!5m2!1sen!2sbd"
         allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>
  );
};

export default ContactSection;
