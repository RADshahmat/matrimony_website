import React from 'react';
import styles from '../styles/popupContact.module.css';


const ContactItem = ({ icon, text, link }) => (
  <div className={styles.contactItem}>
    <div className={styles.contactIcon}>
      <img loading="lazy" src={icon} alt="" className={styles.iconImage} />
    </div>
    <a href={link} className={styles.contactLink} target="_blank" rel="noopener noreferrer">
      {text}
    </a>
  </div>
);


const SocialLink = ({ icon, url }) => (
  <a href={url} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
    <img loading="lazy" src={icon} alt="loading" className={styles.socialIcon} />
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
      { icon: "/assets/facebook.svg", url: "https://facebook.com" },
      { icon: "/assets/twitter.svg", url: "https://twitter.com" },
      { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/e55fd704380e35158e4f3d4fcb6a674fcebf3c98e4ed6e60803bcf771be86ece?placeholderIfAbsent=true&apiKey=68c669943f1543b88775d643f2be81f3", url: "https://instagram.com" },
      { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/a445bb1ccee33364a77a538788d0178d84eca0b27653d47b2eda0e0609283b97?placeholderIfAbsent=true&apiKey=68c669943f1543b88775d643f2be81f3", url: "https://linkedin.com" },
      { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/c79267457d275ba772053f85acf2465036d43cb9e33cfb1f6ae121fa36db9df0?placeholderIfAbsent=true&apiKey=68c669943f1543b88775d643f2be81f3", url: "https://youtube.com" },
      { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/b24992d3cd3a6b65fa30daa24d95b96bb39b7273e4dfb45d0a86ed92387694a0?placeholderIfAbsent=true&apiKey=68c669943f1543b88775d643f2be81f3", url: "https://pinterest.com" },
    ];
  
    return (
      <section className={styles.popup}>
        <button className={styles.closeButton} onClick={closePopup} aria-label="Close">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/b0fcd9e36f961f5baf1db6087351f5a4b0e5cf2217c86d37a0183a1c8b508d1d?placeholderIfAbsent=true&apiKey=68c669943f1543b88775d643f2be81f3" alt="" className={styles.closeIcon} />
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
              <SocialLink key={index} icon={social.icon} url={social.url} />
            ))}
          </div>
        </div>
      </section>
    );
  };


export default PopupContact;
