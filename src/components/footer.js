import React, { useState } from 'react';
import styles from '../styles/footer.module.css';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  // State for toggling visibility of each item
  const [serviceVisibility, setServiceVisibility] = useState([false, false, false, false]);
  const [linkVisibility, setLinkVisibility] = useState([false, false, false, false, false]);

  const toggleServiceVisibility = (index) => {
    setServiceVisibility((prev) => 
      prev.map((item, i) => (i === index ? !item : item))
    );
  };

  const toggleLinkVisibility = (index) => {
    setLinkVisibility((prev) => 
      prev.map((item, i) => (i === index ? !item : item))
    );
  };

  // Content for "Our Services"
  const serviceQuestions = [
    "What is a wedding platform?",
    "How does it simplify wedding planning?",
    "Can I link my wedding registry?",
    "Is there a cost for using it?"
  ];

  const serviceAnswers = [
    "A wedding platform is an online tool that helps couples manage all aspects of their wedding planning in one place.",
    "It simplifies wedding planning by offering features like guest list management, budget tracking, and vendor connections.",
    "Yes, most wedding platforms allow you to integrate and link your wedding registry for guests to view and purchase gifts.",
    "While many wedding platforms are free, some may offer premium features for a cost, depending on the platform."
  ];

  // Content for "Useful Links"
  const linkQuestions = [
    "Contact Us",
    "Pricing Services",
    "Our Team",
    "Blog",
    "Event Gallery"
  ];

  const linkAnswers = [
    "You can reach out to us via our contact form or call our customer service line for assistance.",
    "Our pricing services vary depending on your needs. Check out the pricing page for detailed packages.",
    "Meet the amazing team behind our wedding platform by visiting the 'Our Team' page.",
    "Explore our blog for the latest trends, tips, and inspiration on wedding planning.",
    "View our gallery of beautiful weddings hosted through our platform in the 'Event Gallery' section."
  ];

  return (
    <footer className={styles.container}>
      <div className={styles.upperfooter}>
        <div className={styles.footersection}>
          <h3 className={styles.footerTitle}>About Us</h3>
          <p>Toast father bridesmaid forever happy salad open bar open bar magic church. First aisle cheers</p>
          <div className={styles.socialLinks} >
                  <a href="https://www.facebook.com" className={styles.iconLink}>
                    <FaFacebookF />
                  </a>
                  <a href="https://www.twitter.com" className={styles.iconLink}>
                    <FaTwitter />
                  </a>
                  <a href="https://www.linkedin.com" className={styles.iconLink}>
                    <FaLinkedinIn />
                  </a>
                  <a href="https://www.youtube.com" className={styles.iconLink}>
                    <FaYoutube />
                  </a>
            </div>
        </div>

        {/* Our Services Section */}
        <div className={styles.footersection}>
          <h3 className={styles.footerTitle}>Our Services</h3>
          {serviceQuestions.map((item, index) => (
            <div key={index} className={styles.answer}>
              <p onClick={() => toggleServiceVisibility(index)}>
                <img
                  src={`${process.env.PUBLIC_URL}/assets/footerarrow.svg`}
                  alt="arrow"
                  className={`${styles.arrow} ${serviceVisibility[index] ? styles.arrowDown : ''}`}
                />
                {item}
              </p>
              {serviceVisibility[index] && <p className={styles.expandedText}>{serviceAnswers[index]}</p>}
            </div>
          ))}
        </div>

        {/* Useful Links Section */}
        <div className={styles.footersection}>
          <h3 className={styles.footerTitle}>Useful Links</h3>
          {linkQuestions.map((item, index) => (
            <div key={index} className={styles.answer}>
              <p onClick={() => toggleLinkVisibility(index)}>
                <img
                  src={`${process.env.PUBLIC_URL}/assets/footerarrow.svg`}
                  alt="arrow"
                  className={`${styles.arrow} ${linkVisibility[index] ? styles.arrowDown : ''}`}
                />
                {item}
              </p>
              {linkVisibility[index] && <p className={styles.expandedText}>{linkAnswers[index]}</p>}
            </div>
          ))}
        </div>

        {/* Enquire Section */}
        <div className={styles.formSection}>
          <h3 className={styles.footerTitle}>Enquire</h3>
          <input type="text" placeholder="First name here" />
          <input type="text" placeholder="Phone Number" />
          {/* New Message Input */}
          <textarea placeholder="Type your message here..." className={styles.messageInput} />
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
