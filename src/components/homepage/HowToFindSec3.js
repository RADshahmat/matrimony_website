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
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/798aa715c3eacf622362b8d0cdda215a2e3bcf5d68198c751418e47b4d3d5768?apiKey=68c669943f1543b88775d643f2be81f3&&apiKey=68c669943f1543b88775d643f2be81f3" 
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
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/6a0f73c2e8569acad9e1514c5fc3579c70638d0bfbf6822a65ef19cf8433cccd?apiKey=68c669943f1543b88775d643f2be81f3&&apiKey=68c669943f1543b88775d643f2be81f3",
    isReverse: true
  },
  {
    title: "Send Interest",
    subtitle: "Show interest on a profile",
    description: "When both you and the other person express interest, we'll consider it a match and facilitate communication between you.",
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/a8c6a4ffcdce335390ba9547210e874413e5f840373f96080bcb0bd0a81a3bd3?apiKey=68c669943f1543b88775d643f2be81f3&&apiKey=68c669943f1543b88775d643f2be81f3",
    isReverse: false
  },
  {
    title: "Get Contact Information",
    subtitle: "Both of you will get contact information",
    description: "You'll receive additional details about the profile, including personal information such as email, phone number, and address.",
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/e8bf3a703bd786f3bba75dfd539e55776ceb3cd948bb19fbd0fd369bb55dae39?apiKey=68c669943f1543b88775d643f2be81f3&&apiKey=68c669943f1543b88775d643f2be81f3",
    isReverse: true
  },
  {
    title: "Start Communicate",
    subtitle: "Get to know each other through communication.",
    description: "You can communicate through our secure built-in chat system or over the phone to get to Understand the person better.",
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/2ffb744fc0d6138dd10a69ba0e5b9ae5b80e1484b3e4bd975475f875aa30873a?apiKey=68c669943f1543b88775d643f2be81f3&&apiKey=68c669943f1543b88775d643f2be81f3",
    isReverse: false
  },
  {
    title: "Getting Marriage",
    subtitle: "Create a strong bond",
    description: "When both of you feel you're a good match, you can take the relationship to the next level.",
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/b6f16800a654dac47af9e06c5f6877dac7e2685ca5ae0df9f9c48578a9db496b?apiKey=68c669943f1543b88775d643f2be81f3&&apiKey=68c669943f1543b88775d643f2be81f3",
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