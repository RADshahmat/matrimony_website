import React, { useEffect, useState } from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube, FaWhatsapp } from 'react-icons/fa';
import axiosInstance from '../Axios/axios_instance'; // Assuming your Axios instance is set up
import styles from '../styles/popupContact.module.css';

const ContactItem = ({ icon, text, link }) => (
  <a className={styles.contactItem} href={link} target="_blank" rel="noopener noreferrer">
    <div className={styles.contactIcon}>
      <img loading="lazy" src={icon} alt="" className={styles.iconImage} />
    </div>
    <div className={styles.contactLink}>
      {text}
    </div>
  </a>
);

const PopupContact = ({ closePopup }) => {
  const [companyDetails, setCompanyDetails] = useState({
    phone: '',
    whatsapp: '',
    email: '',
    location: '',
    facebook_link: '',
    twitter_link: '',
    instagram_link: '',
    linkedin_link: '',
    youtube_link: '',
    whatsapp_link: ''
  });

  // Fetch company details from backend
  useEffect(() => {
    const fetchCompanyDetails = async () => {
      try {
        const response = await axiosInstance.get('/company_details');
        setCompanyDetails(response.data);
      } catch (error) {
        console.error('Error fetching company details:', error);
      }
    };
    fetchCompanyDetails();
  }, []);

  const contactItems = [
    { icon: "/assets/phone_company.svg", text: companyDetails.phone, link: `tel:${companyDetails.phone}` },
    { icon: "/assets/whatsapp.svg", text: companyDetails.whatsapp, link: `tel:${companyDetails.whatsapp}` },
    { icon: "/assets/email_company.svg", text: companyDetails.email, link: `mailto:${companyDetails.email}` },
    { icon: "/assets/location_company.svg", text: companyDetails.location, link: `https://maps.google.com?q=${encodeURIComponent(companyDetails.location)}` },
  ];

  const socialIcons = [
    { Icon: FaFacebookF, url: companyDetails.facebook_link, className: "facebook" },
    { Icon: FaTwitter, url: companyDetails.twitter_link, className: "twitter" },
    { Icon: FaInstagram, url: companyDetails.instagram_link, className: "instagram" },
    { Icon: FaLinkedinIn, url: companyDetails.linkedin_link, className: "linkedin" },
    { Icon: FaYoutube, url: companyDetails.youtube_link, className: "youtube" },
    { Icon: FaWhatsapp, url: companyDetails.whatsapp_link, className: "whatsapp" },
  ];

  return (
    <section className={styles.popup}>
      <button className={styles.closeButton} onClick={closePopup} aria-label="Close">
        <img loading="lazy" src="/assets/close-icon.svg" alt="" className={styles.closeIcon} />
      </button>
      <div className={styles.content}>
        <h2 className={styles.title}>
          Experience personalized and confidential matchmaking with Butterfly Matrimonial.
        </h2>
        <div className={styles.contactList}>
          {contactItems.map((item, index) => (
            <ContactItem key={index} icon={item.icon} text={item.text} link={item.link} />
          ))}
        </div>
        <div className={styles.expertSupport}>
          <h3 className={styles.expertSupportTitle}>Expert support</h3>
          <div className={styles.expertProfile}>
            <img loading="lazy" src={`${process.env.PUBLIC_URL}/assets/hur icon.png`} alt="Expert profile" className={styles.expertImage} />
            <div className={styles.expertInfo}>
              <h4 className={styles.expertName}>Huraira Shishir</h4>
              <p className={styles.expertTitle}>Marriage Consultant</p>
              <button className={styles.askButton} onClick={() => (window.location.href = `tel:${companyDetails.phone}`)}>Ask your doubts</button>

            </div>
          </div>
        </div>
        <div className={styles.socialLinks}>
          {socialIcons.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.socialLink} ${styles[social.className]}`}
            >
              <social.Icon />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopupContact;
