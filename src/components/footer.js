import React from 'react';
import styles from '../styles/footer.module.css';

const Footer = () => {
  return (
      <footer className={styles.container}>
        <div className={styles.upperfooter}>
        <div className={styles.footersection}>
          <h3 className={styles.footerTitle}>About Us</h3>
          <p>Toast father bridesmaid forever happy salad open bar open bar magic church. First aisle cheers</p>
          <div className={styles.socialIcons}>
            <a href="Loading"><i className="fab fa-facebook-f"></i></a>
            <a href="Loading"><i className="fab fa-twitter"></i></a>
            <a href="Loading"><i className="fab fa-youtube"></i></a>
            <a href="Loading"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
        <div className={styles.footersection}>
          <h3 className={styles.footerTitle}>Our Services</h3>
          <p><a href="Loading"><img src={`${process.env.PUBLIC_URL}/assets/footerarrow.svg`} alt="arrow" className={styles.arrow} />What is a wedding platform?</a></p>
          <p><a href="Loading"><img src={`${process.env.PUBLIC_URL}/assets/footerarrow.svg`} alt="arrow" className={styles.arrow} />How does it simplify wedding planning?</a></p>
          <p><a href="Loading"><img src={`${process.env.PUBLIC_URL}/assets/footerarrow.svg`} alt="arrow" className={styles.arrow} />Can I link my wedding registry?</a></p>
          <p><a href="Loading"><img src={`${process.env.PUBLIC_URL}/assets/footerarrow.svg`} alt="arrow" className={styles.arrow} />Is there a cost for using it?</a></p>
        </div>
        <div className={styles.footersection}>
          <h3 className={styles.footerTitle}>Useful Links</h3>
          <p><a href="Loading"><img src={`${process.env.PUBLIC_URL}/assets/footerarrow.svg`} alt="arrow" className={styles.arrow} />Contact Us</a></p>
          <p><a href="Loading"><img src={`${process.env.PUBLIC_URL}/assets/footerarrow.svg`} alt="arrow" className={styles.arrow} />Pricing Services</a></p>
          <p><a href="Loading"><img src={`${process.env.PUBLIC_URL}/assets/footerarrow.svg`} alt="arrow" className={styles.arrow} />Our Team</a></p>
          <p><a href="Loading"><img src={`${process.env.PUBLIC_URL}/assets/footerarrow.svg`} alt="arrow" className={styles.arrow} />Blog</a></p>
          <p><a href="Loading"><img src={`${process.env.PUBLIC_URL}/assets/footerarrow.svg`} alt="arrow" className={styles.arrow} />Event Gallery</a></p>
        </div>
        <div className={styles.formSection}>
          <h3 className={styles.footerTitle}>Enquire</h3>
          <input type="text" placeholder="First name here" />
          <input type="text" placeholder="Phone Number" />
          <button className={styles.sendmsgbutton}>Send Message</button>
        </div>
        </div>
        <div className={styles.divider} />
          <div className={styles.footerbottom}>
            <p>&copy; 2024 Butterfly Matrimonial Ltd. All Rights Reserved.<br />A Concern of Butterfly Lighthouse.</p>
          </div>
      </footer>
  );
};

export default Footer;
