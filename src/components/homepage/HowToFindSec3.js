import React from "react";
import styles from '../../styles/homepageStyle/HowToFindSec3.module.css';

function StepItem({ title, subtitle, description, imageSrc, isReverse }) {
  return (
    <div className={`${styles.stepItem} ${isReverse ? styles.stepItemReverse : ''}`}>
      <div className={styles.stepContent}>
          {!isReverse && (
            <div className={styles.stepImageContainer}>
              <img loading="lazy" src={imageSrc} alt={title} className={styles.stepImage} />
            </div>
          )}
          <div className={styles.stepTextContainer}>
            <h2 className={styles.stepTitle}>{title}</h2>
            <div className={styles.stepSubtitle}>{subtitle}</div>
            <p className={styles.stepDescription}>{description}</p>
          </div>
          {isReverse && (
            <div className={styles.stepImageContainer}>
              <img loading="lazy" src={imageSrc} alt={title} className={styles.stepImage} />
            </div>
          )}
      </div>
      <div className={styles.backgroundBorderShadow} />
    </div>
  );
}

const steps = [
  {
    title: "Enrollment",
    subtitle: (
      <>
        Enroll in our Venus package{' '}
        <img 
          loading="lazy" 
          src="/assets/venus 1.png" 
          className={styles.closeIcon} 
          alt="Package icon"
        />
      </>
    ),    description: "Our consultant will understand your criteria and recommend the most suitable package. Your information will be enrolled into our database, and you'll receive your credentials.",
    imageSrc: "/assets/rings.png", 
    isReverse: false
  },
  {
    title: "Find Your Match",
    subtitle: "You will get profiles based on your priority",
    description: "We'll send you profiles that match your criteria and align with your values, ensuring you find a life partner who truly fits your vision.",
    imageSrc: "/assets/wedding-2.png",
    isReverse: true
  },
  {
    title: "Send Interest",
    subtitle: "Show interest on a profile",
    description: "When both you and the other person express interest, we'll consider it a match and facilitate communication between you.",
    imageSrc: "/assets/love-birds.png",
    isReverse: false
  },
  {
    title: "Get Contact Information",
    subtitle: "Both of you will get contact information",
    description: "You'll receive additional details about the profile, including personal information such as email, phone number, and address.",
    imageSrc: "/assets/network.png",
    isReverse: true
  },
  {
    title: "Start Communicate",
    subtitle: "Get to know each other through communication.",
    description: "You can communicate through our secure built-in chat system or over the phone to get to Understand the person better.",
    imageSrc: "/assets/chat.png",
    isReverse: false
  },
  {
    title: "Getting Marriage",
    subtitle: "Create a strong bond",
    description: "When both of you feel you're a good match, you can take the relationship to the next level.",
    imageSrc: "/assets/wedding-couple.png",
    isReverse: true
  }
];

function HowToFindSpecialSomeone() {
  return (
    <section className={styles.container}>
      <div className={styles.contentWrapper}>
        <header className={styles.headerSection}>
            <div className={styles.titleContainer}>
                  <h1 className={styles.mainTitle}>How can I find a special someone?</h1>
                  <div className={styles.logoContainer}>
                      <img loading="lazy" src={`${process.env.PUBLIC_URL}/assets/flower.png`} alt="Logo 1" className={styles.logo1} />
                  </div>
            </div>
        </header>

        <div className={styles.stepsContainer}>
          <div className={styles.stepsWrapper}>
            <div className={styles.stepsList}>
              <div className={styles.verticalDivider} />
              {steps.map((step, index) => (
                <StepItem key={index} {...step} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowToFindSpecialSomeone;