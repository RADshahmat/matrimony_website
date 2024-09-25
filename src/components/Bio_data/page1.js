import React from "react";
import styles from '../../styles/Bio_dataStyle/page1.module.css';

function BioDataPage1() {
  return (
    <main className={styles.container}>
      <section className={styles.content}>
        <div className={styles.profileSection}>
          <div className={styles.imageColumn}>
            <img 
              loading="lazy" 
              src="/assets/bio_designTop.svg" 
              className={styles.profileImage} 
              alt="Profile of Tanvir Ahmed Tamim"
            />
          </div>
          <div className={styles.logoColumn}>
            <img 
              loading="lazy" 
              src="/assets/butterfly_matrimony.png" 
              className={styles.logo} 
              alt="Logo"
            />
          </div>
        </div>
      </section>
      <section className={styles.bioSection}>
        <h1 className={styles.bioTitle}>Bio-Data</h1>
        <h2 className={styles.name}>Tanvir Ahmed Tamim</h2>
        <p className={styles.details}>
          Date of Birth: 28 September 1999 <br /> 
          Dhaka, Bangladesh
        </p>
      </section>
      <div className={styles.decorativeColumn}>
            <img 
              loading="lazy" 
              src="/assets/bio_designBottom.svg" 
              className={styles.decorativeBar} 
              alt=""
            />
          </div>
    </main>
  );
}

export default BioDataPage1;