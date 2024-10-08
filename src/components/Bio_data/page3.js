import React from 'react';
import styles from '../../styles/Bio_dataStyle/page3.module.css'; // Assuming same styling file as previous one
import BioHeader from './biodata_header';
import Footer from './biodata_footer';

const BioDataPage3 = ({ userData }) => {
  if (!userData) {
    return <div>Loading...</div>; // Handle loading state
  }

  return (
    <div className={styles.card}>
      <BioHeader />

      {/* Main Information Section */}
      <div className={styles.content}>
        <div className={styles.mainInfo}>
          <h2 className={styles.personName}>{userData.fullName}</h2>
          <h2 className={styles.sectionTitle}>Profession:</h2>
          <div className={styles.sectionContent}>
            <div className={styles.detailItem}>
              <span className={styles.label}>Occupation Type:</span>
              <span className={styles.value}>{userData.occupationType}</span>
            </div>
            <div className={styles.detailItem}>
              <span className={styles.label}>Institution Name:</span>
              <span className={styles.value}>{userData.institutionName}</span>
            </div>
            <div className={styles.detailItem}>
              <span className={styles.label}>Job Title:</span>
              <span className={styles.value}>{userData.jobTitle}</span>
            </div>
            <div className={styles.detailItem}>
              <span className={styles.label}>Department:</span>
              <span className={styles.value}>{userData.department}</span>
            </div>
            <div className={styles.detailItem}>
              <span className={styles.label}>Monthly Income:</span>
              <span className={styles.value}>{userData.monthlyIncome}</span>
            </div>
          </div>
          <h2 className={styles.sectionTitle}>Family Information:</h2>
          <div className={styles.sectionContent}>
            <div className={styles.detailItem}>
              <span className={styles.label}>Father's Name:</span>
              <span className={styles.value}>{userData.fatherName || "Father's Name"}</span>
            </div>
            <div className={styles.detailItem}>
              <span className={styles.label}>Father's Occupation:</span>
              <span className={styles.value}>{userData.fatherOccupation || "Father's Occupation"}</span>
            </div>
            <div className={styles.detailItem}>
              <span className={styles.label}>Mother's Name:</span>
              <span className={styles.value}>{userData.motherName || "Mother's Name"}</span>
            </div>
            <div className={styles.detailItem}>
              <span className={styles.label}>Mother's Occupation:</span>
              <span className={styles.value}>{userData.motherOccupation || "Mother's Occupation"}</span>
            </div>
            <div className={styles.detailItem}>
              <span className={styles.label}>Siblings:</span>
              <span className={styles.value}>{userData.siblings || "Siblings"}</span>
            </div>
            <div className={styles.detailItem}>
              <span className={styles.label}>Elder Brother's Name:</span>
              <span className={styles.value}>{userData.elderBrotherName || "Elder Brother's Name"}</span>
            </div>
            <div className={styles.detailItem}>
              <span className={styles.label}>Elder Brother's Occupation:</span>
              <span className={styles.value}>{userData.elderBrotherOccupation || "Elder Brother's Occupation"}</span>
            </div>
            <div className={styles.detailItem}>
              <span className={styles.label}>Elder Sister's Name:</span>
              <span className={styles.value}>{userData.elderSisterName || "Elder Sister's Name"}</span>
            </div>
            <div className={styles.detailItem}>
              <span className={styles.label}>Elder Sister's Occupation:</span>
              <span className={styles.value}>{userData.elderSisterOccupation || "Elder Sister's Occupation"}</span>
            </div>
            <div className={styles.detailItem}>
              <span className={styles.label}>Little Sister's Name:</span>
              <span className={styles.value}>{userData.littleSisterName || "Little Sister's Name"}</span>
            </div>
            <div className={styles.detailItem}>
              <span className={styles.label}>Little Sister's Occupation:</span>
              <span className={styles.value}>{userData.littleSisterOccupation || "Little Sister's Occupation"}</span>
            </div>
          </div>

          {/* Preference Section */}
          <section className={styles.sec3}>
            <h2 className={styles.sectionTitle}>Preference:</h2>
            <div className={styles.value}>
              {userData.preferences || "Preferences not specified."}
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BioDataPage3;
