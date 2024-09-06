import React, { useState } from 'react';
import HamburgerMenu from 'react-hamburger-menu';
import styles from '../styles/header.module.css';
import PopupContact from './popupContact';
import { Link } from 'react-router-dom';

const Header = () => {
    const [isPopupVisible, setIsPopupVisible] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const togglePopup = () => {
        setIsPopupVisible(!isPopupVisible);
    };
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <nav className={styles.navbar}>
                <div className={styles.hamiconNtitlepic}>
                    <div className={styles.mobileMenuIcon}>
                        <HamburgerMenu
                        className={styles.hamicon}
                            isOpen={isMenuOpen}
                            menuClicked={toggleMenu}
                            width={20}
                            height={10}
                            strokeWidth={3}
                            rotate={0}
                            color="grey"
                            borderRadius={0}
                            animationDuration={0.5}
                        />
                    </div>
                    <img src={`${process.env.PUBLIC_URL}/assets/butterfly_matrimony.png`} alt="Company Logo" className={styles.logo} />
                </div>
                <div className={`${styles.navLinks} ${isMenuOpen ? styles.showMenu : ''}`}>
                        <a href="/" className={styles.navItem}>Home</a>
                        <a href="#all-pages" className={styles.navItem}>All pages
                        <img src={`${process.env.PUBLIC_URL}/assets/down arrow.png`} alt="" className={styles.dropdownIcon} />
                        </a>
                        <a href="#blog" className={styles.navItem}>Blog</a>
                        <a href="#contact" className={styles.navItem}>Contact</a>
                </div>
                <div className={styles.rightSection}>
                   <Link to={'/createCV'}><button className={styles.createCvButton}>Create CV</button></Link> 
                    <div className={styles.premiumSection}>
                        <span className={styles.premiumLabel}>Venus Premium</span>
                        <img src={`${process.env.PUBLIC_URL}/assets/premium.png`} alt="Premium Icon" className={styles.premiumIcon} />
                    </div>
                    <div className={styles.supportContainer} onClick={togglePopup}>
                        <img src={`${process.env.PUBLIC_URL}/assets/hur icon.png`} alt="Support Icon" className={styles.supportIcon} />
                        <div className={styles.userInfo}>
                            <span className={styles.userRole}>Marriage Consultant</span>
                            <span className={styles.userName}>Huraira Shishir</span>
                        </div>
                    </div>
                </div>
            </nav>

            {isPopupVisible && <PopupContact closePopup={togglePopup} />}
        </>
    );
};

export default Header;