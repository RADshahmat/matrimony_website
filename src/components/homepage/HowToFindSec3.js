import React from "react";
import 'aos/dist/aos.css';
import styles from '../../styles/homepageStyle/HowToFindSec3.module.css';

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

              {/* Step 1 */}
              <div className={styles.stepItem} data-aos="slide-up">
                <div className={styles.stepContent}>
                  <div className={styles.stepImageContainer}>
                    <img loading="lazy" src="/assets/rings.png" alt="Enrollment" className={styles.stepImage} />
                  </div>
                  <div className={styles.stepTextContainer}>
                    <h2 className={styles.stepTitle}>Enrollment</h2>
                    <div className={styles.stepSubtitle}>
                      Enroll in our Venus package{' '}
                      <img loading="lazy" src="/assets/venus 1.png" className={styles.closeIcon} alt="Package icon" />
                    </div>
                    <p className={styles.stepDescription}>
                      Our consultant will understand your criteria and recommend the most suitable package. Your
                      information will be enrolled into our database, and you'll receive your credentials.
                    </p>
                  </div>
                </div>
                <div className={styles.backgroundBorderShadow} />
              </div>

              {/* Step 2 */}
              <div className={`${styles.stepItem} ${styles.stepItemReverse}`} data-aos="slide-up">
                <div className={styles.stepContent}>
                  <div className={styles.stepTextContainer}>
                    <h2 className={styles.stepTitle}>Find Your Match</h2>
                    <div className={styles.stepSubtitle}>You will get profiles based on your priority</div>
                    <p className={styles.stepDescription}>
                      We'll send you profiles that match your criteria and align with your values, ensuring you find a life
                      partner who truly fits your vision.
                    </p>
                  </div>
                  <div className={styles.stepImageContainer}>
                    <img loading="lazy" src="/assets/wedding-2.png" alt="Find Your Match" className={styles.stepImage} />
                  </div>
                </div>
                <div className={styles.backgroundBorderShadow} />
              </div>

              {/* Step 3 */}
              <div className={styles.stepItem} data-aos="slide-up">
                <div className={styles.stepContent}>
                  <div className={styles.stepImageContainer}>
                    <img loading="lazy" src="/assets/love-birds.png" alt="Send Interest" className={styles.stepImage} />
                  </div>
                  <div className={styles.stepTextContainer}>
                    <h2 className={styles.stepTitle}>Send Interest</h2>
                    <div className={styles.stepSubtitle}>Show interest on a profile</div>
                    <p className={styles.stepDescription}>
                      When both you and the other person express interest, we'll consider it a match and facilitate
                      communication between you.
                    </p>
                  </div>
                </div>
                <div className={styles.backgroundBorderShadow} />
              </div>

              {/* Step 4 */}
              <div className={`${styles.stepItem} ${styles.stepItemReverse}`} data-aos="slide-up">
                <div className={styles.stepContent}>
                  <div className={styles.stepTextContainer}>
                    <h2 className={styles.stepTitle}>Get Contact Information</h2>
                    <div className={styles.stepSubtitle}>Both of you will get contact information</div>
                    <p className={styles.stepDescription}>
                      You'll receive additional details about the profile, including personal information such as email,
                      phone number, and address.
                    </p>
                  </div>
                  <div className={styles.stepImageContainer}>
                    <img loading="lazy" src="/assets/network.png" alt="Get Contact Information" className={styles.stepImage} />
                  </div>
                </div>
                <div className={styles.backgroundBorderShadow} />
              </div>

              {/* Step 5 */}
              <div className={styles.stepItem} data-aos="slide-up">
                <div className={styles.stepContent}>
                  <div className={styles.stepImageContainer}>
                    <img loading="lazy" src="/assets/chat.png" alt="Start Communication" className={styles.stepImage} />
                  </div>
                  <div className={styles.stepTextContainer}>
                    <h2 className={styles.stepTitle}>Start Communication</h2>
                    <div className={styles.stepSubtitle}>Get to know each other through communication.</div>
                    <p className={styles.stepDescription}>
                      You can communicate through our secure built-in chat system or over the phone to get to understand the
                      person better.
                    </p>
                  </div>
                </div>
                <div className={styles.backgroundBorderShadow} />
              </div>

              {/* Step 6 */}
              <div className={`${styles.stepItem} ${styles.stepItemReverse}`} data-aos="slide-up">
                <div className={styles.stepContent}>
                  <div className={styles.stepTextContainer}>
                    <h2 className={styles.stepTitle}>Getting Married</h2>
                    <div className={styles.stepSubtitle}>Create a strong bond</div>
                    <p className={styles.stepDescription}>
                      When both of you feel you're a good match, you can take the relationship to the next level.
                    </p>
                  </div>
                  <div className={styles.stepImageContainer}>
                    <img loading="lazy" src="/assets/wedding-couple.png" alt="Getting Married" className={styles.stepImage} />
                  </div>
                </div>
                <div className={styles.backgroundBorderShadow} />
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowToFindSpecialSomeone;
