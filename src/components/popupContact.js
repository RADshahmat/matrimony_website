import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube,FaWhatsapp } from 'react-icons/fa';
import styles from '../styles/popupContact.module.css';

const ContactItem = ({ icon, text, link }) => (
  <a className={styles.contactItem} href={link} target="_blank" rel="noopener noreferrer">
    <div className={styles.contactIcon}>
      <img loading="lazy" src={icon} alt="" className={styles.iconImage} />
    </div>
    <div className={styles.contactLink} >
      {text}
    </div>
  </a>
);



const PopupContact = ({ closePopup }) => {
  const contactItems = [
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/c356df5d3411e25640a715636dfae6391053cda2c544b61e01c1748bb03deb12?placeholderIfAbsent=true&apiKey=68c669943f1543b88775d643f2be81f3", text: "+880 182334 6777", link: "tel:+8801823346777" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/dced318d86f43524cad4bee44207aff6ebadfb09ab0a8e0773bfe3a07070cd0e?placeholderIfAbsent=true&apiKey=68c669943f1543b88775d643f2be81f3", text: "+880 182334 6777", link: "tel:+8801823346777" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/e87266025a5a10c061e8fdd43fb67cd2c03d893e0c98931eceec47d89de28693?placeholderIfAbsent=true&apiKey=68c669943f1543b88775d643f2be81f3", text: "info@butterflymatrimonial.com", link: "mailto:info@butterflymatrimonial.com" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/acf17289c517c53a7be685c7af0a1da047829bf5f0c22abe490a74cdd496d4fa?placeholderIfAbsent=true&apiKey=68c669943f1543b88775d643f2be81f3", text: "House 7, Road 2/C, Block J, Baridhara Gulshan, Dhaka 1212", link: "https://maps.google.com?q=House 7, Road 2/C, Block J, Baridhara Gulshan, Dhaka 1212" },
  ];

  const socialIcons = [
    { Icon: FaFacebookF, url: "https://facebook.com", className: "facebook" },
    { Icon: FaTwitter, url: "https://twitter.com", className: "twitter" },
    { Icon: FaInstagram, url: "https://instagram.com", className: "instagram" },
    { Icon: FaLinkedinIn, url: "https://linkedin.com", className: "linkedin" },
    { Icon: FaYoutube, url: "https://youtube.com", className: "youtube" },
    { Icon: FaWhatsapp, url: "https://whatsapp.com", className: "whatsapp" },
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
              <button className={styles.askButton}>Ask your doubts</button>
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
