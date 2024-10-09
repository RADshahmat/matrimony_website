// BioDataPage3.js

import React from 'react';
import styles from '../../styles/Bio_dataStyle/page3.module.css'; // Ensure this CSS file exists and is correctly styled
import BioHeader from './biodata_header';
import Footer from './biodata_footer';

const BioDataPage3 = ({ userData }) => {
  if (!userData) {
    return <div>Loading...</div>; // Handle loading state
  }

  const {
    fullName,
    occupationType,
    institutionName,
    jobTitle,
    department,
    monthlyIncome,
    fatherName,
    fatherOccupation,
    motherName,
    motherOccupation,
    siblings,
    agePreference
  } = userData;

  const { brothers, sisters } = userData;

  return (
    <div className={styles.card}>
      <BioHeader />

      {/* Main Information Section */}
      <div className={styles.content}>
        <div className={styles.mainInfo}>
          <h2 className={styles.personName}>{fullName}</h2>
          <h2 className={styles.sectionTitle}>Profession:</h2>
          <div className={styles.sectionContent}>
            <div className={styles.detailItem}>
              <span className={styles.label}>Occupation Type:</span>
              <span className={styles.value}>{occupationType}</span>
            </div>
            <div className={styles.detailItem}>
              <span className={styles.label}>Institution Name:</span>
              <span className={styles.value}>{institutionName}</span>
            </div>
            <div className={styles.detailItem}>
              <span className={styles.label}>Job Title:</span>
              <span className={styles.value}>{jobTitle}</span>
            </div>
            <div className={styles.detailItem}>
              <span className={styles.label}>Department:</span>
              <span className={styles.value}>{department}</span>
            </div>
            <div className={styles.detailItem}>
              <span className={styles.label}>Monthly Income:</span>
              <span className={styles.value}>{monthlyIncome}</span>
            </div>
          </div>

          <h2 className={styles.sectionTitle}>Family Information:</h2>
          <div className={styles.sectionContent}>
            <div className={styles.detailItem}>
              <span className={styles.label}>Father's Name:</span>
              <span className={styles.value}>{fatherName || "Father's Name"}</span>
            </div>
            <div className={styles.detailItem}>
              <span className={styles.label}>Father's Occupation:</span>
              <span className={styles.value}>{fatherOccupation || "Father's Occupation"}</span>
            </div>
            <div className={styles.detailItem}>
              <span className={styles.label}>Mother's Name:</span>
              <span className={styles.value}>{motherName || "Mother's Name"}</span>
            </div>
            <div className={styles.detailItem}>
              <span className={styles.label}>Mother's Occupation:</span>
              <span className={styles.value}>{motherOccupation || "Mother's Occupation"}</span>
            </div>
            <div className={styles.detailItem}>
              <span className={styles.label}>Number of Siblings:</span>
              <span className={styles.value}>{siblings || "Siblings"}</span>
            </div>

            {/* Dynamic Brothers Information */}
            {brothers && brothers.length > 0 && (
              <>
                {brothers.map((brother, index) => (
                  <div key={brother.id} className={styles.detailItem}>
                    <span className={styles.label}>Brother {index + 1} Name:</span>
                    <span className={styles.value}>{brother.brotherName || `Brother ${index + 1} Name`}</span>
                    <span className={styles.label}>Occupation:</span>
                    <span className={styles.value}>{brother.brotherOccupation || `Brother ${index + 1} Occupation`}</span>
                  </div>
                ))}
              </>
            )}

            {/* Dynamic Sisters Information */}
            {sisters && sisters.length > 0 && (
              <>
                {sisters.map((sister, index) => (
                  <div key={sister.id} className={styles.detailItem}>
                    <span className={styles.label}>Sister {index + 1} Name:</span>
                    <span className={styles.value}>{sister.sisterName || `Sister ${index + 1} Name`}</span>
                    <span className={styles.label}>Occupation:</span>
                    <span className={styles.value}>{sister.sisterOccupation || `Sister ${index + 1} Occupation`}</span>
                  </div>
                ))}
              </>
            )}
          </div>

          {/* Preference Section */}
          <section className={styles.sec3}>
            <h2 className={styles.sectionTitle}>Preference:</h2>
            <div className={styles.value}>
              I am looking for a person age around {agePreference} years old, Height around 5 feet 7, and from Dhaka. 
              I am open for Educational qualification and Employment. I may not prefer someone age more than 20 years 
              or height less than 5 feet or he lives in Rangpur, Chittagong and Barishal.
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BioDataPage3;
