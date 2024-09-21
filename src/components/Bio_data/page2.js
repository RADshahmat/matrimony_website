import React from "react";
import BioHeader from './biodata_header';
import BioFooter from './biodata_footer';
import styles from '../../styles/Bio_dataStyle/page2.module.css';


function BioDataPage2() {
  return (
    <section className={styles.card}>
       <BioHeader />
      <div className={styles.content}>
        <div className={styles.mainInfo}>
          <div className={styles.details}>
              <h2 className={styles.personName}>Tanvir Ahmed Tamim</h2>
              <div className={styles.sideInfo}>
                <p className={styles.intro}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation llamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                  <div className={styles.sideContent}>
                    <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/f479739dc19ccb10dc911fb67e289f9c602ee500f667e2367b2db3d19e5eb563?placeholderIfAbsent=true&apiKey=68c669943f1543b88775d643f2be81f3" alt="Profile" className={styles.profilePic} />
                  </div>
              </div>
           

            {/*-personal info--*/}
            <section className={styles.container}>
                <h2 className={styles.sectionTitle}>Personal Details:</h2>
                <div className={styles.sectionContent}>
                  <div className={styles.detailItem}>
                    <span className={styles.label}>Date of Birth:</span>
                    <span className={styles.value}>28 September 1999</span>
                  </div>
                  <div className={styles.detailItem}>
                    <span className={styles.label}>Height:</span>
                    <span className={styles.value}>6 feet</span>
                  </div>
                  <div className={styles.detailItem}>
                    <span className={styles.label}>Gender:</span>
                    <span className={styles.value}>Male</span>
                  </div>
                  <div className={styles.detailItem}>
                    <span className={styles.label}>Blood Group:</span>
                    <span className={styles.value}>O+ve</span>
                  </div>
                  <div className={styles.detailItem}>
                    <span className={styles.label}>Physical Complication:</span>
                    <span className={styles.value}>No Complication</span>
                  </div>
                  <div className={styles.detailItem}>
                    <span className={styles.label}>Religion:</span>
                    <span className={styles.value}>Islam</span>
                  </div>
                  <div className={styles.detailItem}>
                    <span className={styles.label}>Marital Status:</span>
                    <span className={styles.value}>Unmarried</span>
                  </div>
                  <div className={styles.detailItem}>
                    <span className={styles.label}>NID Number:</span>
                    <span className={styles.value}>889809872563776</span>
                  </div>
                  <div className={styles.detailItem}>
                    <span className={styles.label}>Citizenship:</span>
                    <span className={styles.value}>Bangladeshi</span>
                  </div>
                </div>
          </section>
          {/*----------contact info--------------*/}
          <section className={styles.container}>
              <h2 className={styles.sectionTitle}>Contact Information:</h2>
              <div className={styles.sectionContent}>
                <p className={styles.detailItem}>
                  <span className={styles.label}>Phone:</span>
                  <span className={styles.value}>017123456789</span>
                </p>
                <p className={styles.detailItem}>
                  <span className={styles.label}>Email:</span>
                  <span className={styles.value}>example.example.example@exampleexample.com</span>
                </p>
              </div>
          </section>
        {/*----------address-------------*/}
            <section className={styles.container}>
              <h2 className={styles.sectionTitle}>Present Address</h2>
              <div className={styles.address}>M53, West merul Jame Masjid Road, est Merul, Badda</div>
              <div className={styles.sectionContent}>
                    <div className={styles.detailItem}>
                      <span className={styles.label}>City:</span>
                      <span className={styles.value}>Dhaka</span>
                    </div>
                    <div className={styles.detailItem}>
                      <span className={styles.label}>Country:</span>
                      <span className={styles.value}>Bangladesh</span>
                    </div>
                    <div className={styles.detailItem}>
                      <span className={styles.label}>Residence status:</span>
                      <span className={styles.value}>Citizen</span>
                    </div>
              </div>

                <h2 className={styles.sectionTitle}>Permanent Address</h2>
                <div className={styles.address}>M53, West merul Jame Masjid Road, West Merul, Badda</div>
                <div className={styles.sectionContent}>
                    <div className={styles.detailItem}>
                      <span className={styles.label}>City:</span>
                      <span className={styles.value}>Dhaka</span>
                    </div>
                    <div className={styles.detailItem}>
                      <span className={styles.label}>Country:</span>
                      <span className={styles.value}>Bangladesh</span>
                    </div>
                    <div className={styles.detailItem}>
                      <span className={styles.label}>Residence status:</span>
                      <span className={styles.value}>Citizen</span>
                    </div>
              </div>
            </section>
            {/*----------Educational Background-------------*/}
                <section className={styles.container}>
                  <h2 className={styles.sectionTitle}>Educational Background:</h2>
                        <div className={styles.value}>BRAC University</div>
                        <div className={styles.value}>2022-Present</div>
                        <div className={styles.value}>BSC at CSE</div>
                </section>
          </div>
        </div>

      </div>
      <BioFooter />
    </section>
  );
}

export default BioDataPage2;