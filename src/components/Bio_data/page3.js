import React from 'react';
import styles from '../../styles/Bio_dataStyle/page3.module.css'; // Assuming same styling file as previous one
import BioHeader from './biodata_header';
import Footer from './biodata_footer';

const BioDataPage3 = () => {
  return (
      <div className={styles.card}>
        <BioHeader />

        {/* Main Information Section */}
        <div className={styles.content}>
          <div className={styles.mainInfo}>
          <h2 className={styles.personName}>Tanvir Ahmed Tamim</h2>
            <h2 className={styles.sectionTitle}>Profession:</h2>
            <div className={styles.sectionContent}>
              <div className={styles.detailItem}>
                <span className={styles.label}>Occupation Type:</span>
                <span className={styles.value}>Private Company</span>
              </div>
              <div className={styles.detailItem}>
                <span className={styles.label}>Institution Name:</span>
                <span className={styles.value}>Butterfly Matrimonial</span>
              </div>
              <div className={styles.detailItem}>
                <span className={styles.label}>Job Title:</span>
                <span className={styles.value}>Project Manager</span>
              </div>
              <div className={styles.detailItem}>
                <span className={styles.label}>Department:</span>
                <span className={styles.value}>IT</span>
              </div>
              <div className={styles.detailItem}>
                <span className={styles.label}>Monthly Income:</span>
                <span className={styles.value}>50 Thousands Taka</span>
              </div>
          </div>
          <h2 className={styles.sectionTitle}>Family Information:</h2>
          <div className={styles.sectionContent}>
              <div className={styles.detailItem}>
                <span className={styles.label}>Father's Name:</span>
                <span className={styles.value}>Abcd ABdss ACCS</span>
              </div>
              <div className={styles.detailItem}>
                <span className={styles.label}>Father's Occupation:</span>
                <span className={styles.value}>Private Job</span>
              </div>
              <div className={styles.detailItem}>
                <span className={styles.label}>Mother's Name:</span>
                <span className={styles.value}>Has Bca Bsd Bca</span>
              </div>
              <div className={styles.detailItem}>
                <span className={styles.label}>Mother's Occupation:</span>
                <span className={styles.value}>Private Job</span>
              </div>
              <div className={styles.detailItem}>
                <span className={styles.label}>Siblings:</span>
                <span className={styles.value}>1 Brother and 2 Sisters</span>
              </div>
              <div className={styles.detailItem}>
                <span className={styles.label}>Elder Brother's Name:</span>
                <span className={styles.value}>hjgs ajhs jhs ajhd a</span>
              </div>
              <div className={styles.detailItem}>
                <span className={styles.label}>Elder Brother's Occupation:</span>
                <span className={styles.value}>Government Job</span>
              </div>
              <div className={styles.detailItem}>
                <span className={styles.label}>Elder Sister's Name:</span>
                <span className={styles.value}>Name Name Name Name</span>
              </div>
              <div className={styles.detailItem}>
                <span className={styles.label}>Elder Sister's Occupation:</span>
                <span className={styles.value}>Student</span>
              </div>
              <div className={styles.detailItem}>
                <span className={styles.label}>Little Sister's Name:</span>
                <span className={styles.value}>Name Name Name Name</span>
              </div>
              <div className={styles.detailItem}>
                <span className={styles.label}>Little Sister's Occupation:</span>
                <span className={styles.value}>Student</span>
              </div>
            </div>
            
          

        {/* Preference Section */}
        <section className={styles.sec3}>
          <h2 className={styles.sectionTitle}>Preference:</h2>
          <div className={styles.value}>
            I am looking for a person age around 20 years old, Height around 5 feet 7, and from Dhaka. 
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
