import React from 'react';
import styles from '../styles/footer.module.css';

const Footer = () => {
  return (
    <>
      <footer className={styles.container}>
        <div className={styles.section}>
          <h3 cllassname={styles.footerh3}>About Us</h3>
          <p>Toast father bridesmaid forever happy salad open bar open bar magic church. First aisle cheers</p>
          <div className={styles.socialIcons}>
            <a href="Loading"><i className="fab fa-facebook-f"></i></a>
            <a href="Loading"><i className="fab fa-twitter"></i></a>
            <a href="Loading"><i className="fab fa-youtube"></i></a>
            <a href="Loading"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
        <div className={styles.section}>
          <h3 cllassname={styles.footerh3}>Our Services</h3>
          <p><a href="Loading">What is a wedding platform?</a></p>
          <p><a href="Loading">How does it simplify wedding planning?</a></p>
          <p><a href="Loading">Can I link my wedding registry?</a></p>
          <p><a href="Loading">Is there a cost for using it?</a></p>
        </div>
        <div className={styles.section}>
          <h3 cllassname={styles.footerh3}>Useful Links</h3>
          <p><a href="Loading">Contact Us</a></p>
          <p><a href="Loading">Pricing Services</a></p>
          <p><a href="Loading">Our Team</a></p>
          <p><a href="Loading">Blog</a></p>
          <p><a href="Loading">Event Gallery</a></p>
        </div>
        <div className={styles.formSection}>
          <h3 cllassname={styles.footerh3}>Enquire</h3>
          <input type="text" placeholder="First name here" />
          <input type="text" placeholder="Phone Number" />
          <button>Send Message</button>
        </div>
      </footer>
      <hr />
      <div className={styles.footer}>
        <p>&copy; 2024 Butterfly Matrimonial Ltd. All Rights Reserved.<br />A Concern of Butterfly Lighthouse.</p>
      </div>
    </>
  );
};

export default Footer;
