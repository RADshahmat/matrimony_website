import React from 'react';
import styles from '../styles/header.module.css';

const Header = () => {
    return (
        <nav className={styles.navbar}>
            <img src={`${process.env.PUBLIC_URL}/assets/butterfly_matrimony.png`} alt="Company Logo" className={styles.logo} />
            <div className={styles.navLinks}>
                <a href="#home" className={styles.navItem}>Home</a>
                <div className={styles.dropdownContainer}>
                    <a href="#all-pages" className={styles.navItem}>All pages</a>
                    <img src={`${process.env.PUBLIC_URL}/assets/down arrow.png`} alt="" className={styles.dropdownIcon} />
                </div>
                <a href="#blog" className={styles.navItem}>Blog</a>
                <a href="#contact" className={styles.navItem}>Contact</a>
            </div>

            <div className={styles.rightSection}>
                <button className={styles.createCvButton}>Create CV</button>
                <div className={styles.premiumSection}>
                    <span className={styles.premiumLabel}>Venus Premium</span>
                    <img src={`${process.env.PUBLIC_URL}/assets/premium.png`} alt="Premium Icon" className={styles.premiumIcon} />

                </div>
                <img src={`${process.env.PUBLIC_URL}/assets/hur icon.png`} alt="Premium Icon" className={styles.supportIcon} />

                <div className={styles.userInfo}>
                    <span className={styles.userRole}>Marriage Consultant</span>
                    <span className={styles.userName}>Huraira Shishir</span>
                </div>
            </div>
        </nav>
    );
};

export default Header;