import React from 'react';
import styles from '../../styles/homepageStyle/introSec1.module.css'; 


const IntroSecHome= () => {
    return (
        <div className={styles.container}>
            <img className={styles.top_cover} src={`${process.env.PUBLIC_URL}/assets/top_cover.svg`} alt='Cover' />
            <section className={styles.intro}>
                <div className={styles.introframe}>
                    <div className={styles.intro_upper}>
                        <div className={styles.intro_heading}>Butterfly Matrimony</div>
                        <div className={styles.subheading_intro}>Your perfect matchmaker</div>
                    </div>                    
                    <div className={styles.matrimony_desc}>
                        Experience personalized and confidential matchmaking with Butterfly Matrimonial. Our expert consultants focus on your preferences, family structure, and personality to find your perfect soulmate. With comprehensive pre- and post-marriage counselling services, we help you build and maintain a long-lasting relationship. Start your journey to love with Butterfly Matrimonial – your perfect matchmaker!
                    </div>
                    <div className={styles.intro_footer}><span className={styles.footer_spn}>#1</span> MATRIMONY</div>
                </div>
            </section>
            <section className={styles.biodata}>
            <div className={styles.contentWrapper}>
                <div className={styles.textColumn}>
                    <div className={styles.textContent}>
                        <h1 className={styles.title}>
                            Effortlessly <br /> Create Your Bio-Data Today!
                        </h1>
                        <button type="submit" className={styles.ctaButton}>Get Started</button>
                    </div>
                </div>
                <div className={styles.imageColumn}>
                    <img
                        loading="lazy" src={`${process.env.PUBLIC_URL}/assets/biodataform.png`}
                        alt="Bio-Data Creation Illustration"
                        className={styles.bioImage}
                    />
                </div>
            </div>
            </section>
        </div>
    );
};

export default IntroSecHome
