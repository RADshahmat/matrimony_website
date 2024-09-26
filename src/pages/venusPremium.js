import React from 'react';
import Header from '../components/header'; 
import Footer from '../components/footer'; 
import styles from '../styles/venusPremiumStyle.module.css';

const VenusPremium = () => {
    return (
        <div >
            <Header />
            <div className='main-content'>
      <div className={styles.container}>
        <div className={styles.topCoverContainer}>
            <img className={styles.top_cover} src={`${process.env.PUBLIC_URL}/assets/top_cover.svg`} alt='Cover' /> 
        </div>
        <section className={styles.hero}>
            <h1 className={styles.heroTitle}>Discover Venus: The Premier Experience with Butterfly Matrimonial</h1>
            <img src={`${process.env.PUBLIC_URL}/assets/lotapata.png`} alt="" className={styles.lotapata} />
            <img src={`${process.env.PUBLIC_URL}/assets/venusrings.png`} alt="" className={styles.venusrings} />
        </section>

        {/* Description Section */}
        <section className={styles.descriptionSection}>
            <div className={styles.whatVenus}>
                <div className={styles.sectionTitle}>
                        <h2 className={styles.sectionTitleText}>WHAT IS VENUS</h2>
                        <img src={`${process.env.PUBLIC_URL}/assets/venus 1.png`} alt="" className={styles.sectionTitleIcon} />
                </div>
                <p className={styles.description}>
                    Venus, our flagship package designed to elevate your matrimonial journey. At Butterfly Matrimonial, your happiness and success are our top priorities. With Venus, you receive personalized attention from an expert and a dedicated customer relationship manager, ensuring seamless communication and support.
                </p>
            </div>
            <div className={styles.whatExpect}> 
                <div className={styles.sectionTitle}>
                    <h2 className={styles.sectionTitleText}>WHAT YOU EXPECT</h2>
                    <img src={`${process.env.PUBLIC_URL}/assets/venus 1.png`}  alt="" className={styles.sectionTitleIcon} />
                </div>
                <p className={styles.benefits}>
                    Benefit from direct access to our seasoned experts for consultations and guidance on every aspect of your experience. Your privacy is paramount; rest assured, your personal information will remain strictly confidential and will never be shared with third parties.
                </p>
            </div>
        </section>
        
    <section className={styles.howvenuscontainer}>
      <div className={styles.contentWrapper}>
        <header className={styles.headerSection}>
          <div className={styles.titleContainer}>
          <h1 className={styles.mainTitle}>How Venus Works</h1>
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
        <div className={styles.contactInfo}>
        <span className={styles.contactInfoBold}>Enquiry or Pricing  </span> &nbsp; &nbsp;
        <span className={styles.contactInfoBold}>+880 182334 6777</span>
      </div>
    </div>


            </div>
            <Footer />
        </div>
      );
};

export default VenusPremium;

