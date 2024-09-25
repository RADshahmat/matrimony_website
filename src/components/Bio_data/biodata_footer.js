import React from 'react';
import styles from '../../styles/Bio_dataStyle/bioData_footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerImage}>
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/01ad74bea77cfa8cc8cc60b84a0f9d4a709effece69ccf792656ace6fdc7a808?placeholderIfAbsent=true&apiKey=68c669943f1543b88775d643f2be81f3" alt="" className={styles.footerLogo} />
        </div>
        <div className={styles.footerText}>
          <div className={styles.poweredBy}>
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/3a094b6fa07269ff1641ad9c71acdef080be9dd73e906790f7a0a21a302c0720?placeholderIfAbsent=true&apiKey=68c669943f1543b88775d643f2be81f3" alt="Butterfly Matrimonial Logo" className={styles.butterflyLogo} />
            <p>Powered By Butterfly Matrimonial | Visit: www.butterflymatrimonial.com</p>
          </div>
        </div>
        <div className={styles.footerImage}>
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/01cca5e857a421985ece4da58d9b74d44abc8ebec1f79f0f5b1e62d38320e267?placeholderIfAbsent=true&apiKey=68c669943f1543b88775d643f2be81f3" alt="" className={styles.footerLogo} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;