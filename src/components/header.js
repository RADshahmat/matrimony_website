import React, { useState } from 'react';
import HamburgerMenu from 'react-hamburger-menu';
import styles from '../styles/header.module.css';
import PopupContact from './popupContact';
import { Link } from 'react-router-dom';

const Header = () => {
    const [isPopupVisible, setIsPopupVisible] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false); // For All Pages dropdown

    const togglePopup = () => {
        setIsPopupVisible(!isPopupVisible);
    };
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen); // Toggles dropdown visibility
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
                    <Link to={'/'} className={styles.navItem}>Home</Link>
                    <div className={`${styles.navItem} ${styles.dropdownContainer}`}>
                        <div className={styles.navItem} onClick={toggleDropdown}>All Pages
                            <img src={`${process.env.PUBLIC_URL}/assets/down arrow.png`} alt="Dropdown Icon" className={styles.dropdownIcon} />
                        </div>
                        {isDropdownOpen && (
                            <div className={styles.dropdownMenu}>
                                <Link to={'/'} className={styles.dropdownItem}>Home</Link>
                                <Link to={'/userDashboard'} className={styles.dropdownItem}>Venus Login</Link>
                                <Link to={'/venuspremium'} className={styles.dropdownItem}>Venus Premium</Link>
                                <Link to={'/contact'} className={styles.dropdownItem}>Contact</Link>
                                <Link to={'/createCV'} className={styles.dropdownItem}>Create CV</Link>
                                <Link to={'/blogAll'} className={styles.dropdownItem}>Blog</Link>
                            </div>
                        )}
                    </div>
                    <Link to={'/blogAll'} className={styles.navItem}>Blog</Link>
                    <Link to={'/contact'} className={styles.navItem}>Contact</Link>

                    {/* Premium Section - Mobile */}
                    <Link to={'/venuspremium'} className={`${styles.navItem} ${styles.premiumSectionMobile}`}>
                        <span className={styles.premiumLabel}>Venus Premium</span>
                        <img src={`${process.env.PUBLIC_URL}/assets/premium.png`} alt="Premium Icon" className={styles.premiumIcon} />
                    </Link>
                </div>

                <div className={styles.rightSection}>
                    <Link to={'/createCV'}><button className={styles.createCvButton}>Create CV</button></Link> 

                    {/* Premium Section - Desktop */}
                    <Link to={'/venuspremium'} className={styles.premiumSection}>
                        <span className={styles.premiumLabel}>Venus Premium</span>
                        <img src={`${process.env.PUBLIC_URL}/assets/premium.png`} alt="Premium Icon" className={styles.premiumIcon} />
                    </Link>

                    <div className={styles.supportContainer} onClick={togglePopup}>
                        <img src={`${process.env.PUBLIC_URL}/assets/hur icon.png`} alt="Support Icon" className={styles.supportIcon} />
                        <div className={styles.userInfo}>
                            <span className={styles.userRole}>Marriage Consultant</span>
                            <span className={styles.userName}>Huraira Shishir</span>
                        </div>
                    </div>
                </div>
                {isPopupVisible && <PopupContact closePopup={togglePopup} />}
            </nav>
        </>
    );
};

export default Header;
