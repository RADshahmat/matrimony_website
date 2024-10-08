import React from "react";
import BioHeader from './biodata_header';
import BioFooter from './biodata_footer';
import styles from '../../styles/Bio_dataStyle/page2.module.css';

function BioDataPage2({ userData }) {
  if (!userData) {
    return <div>Loading...</div>; 
  }

  return (
    <section className={styles.card}>
      <BioHeader />
      <div className={styles.content}>
        <div className={styles.mainInfo}>
          <div className={styles.details}>
            <h2 className={styles.personName}>{userData.fullName}</h2>
            <div className={styles.sideInfo}>
              <p className={styles.intro}>
                {userData.introduction || "No introduction available"}
              </p>
              <div className={styles.sideContent}>
                <img 
                  src={userData.profileImage || "default-image-url"}
                  alt="Profile"
                  className={styles.profilePic}
                />
              </div>
            </div>

            {/* Personal info */}
            <section className={styles.container}>
              <h2 className={styles.sectionTitle}>Personal Details:</h2>
              <div className={styles.sectionContent}>
                <div className={styles.detailItem}>
                  <span className={styles.label}>Date of Birth:</span>
                  <span className={styles.value}>
                    {`${userData.dobDay} ${userData.dobMonth} ${userData.dobYear}`}
                  </span>
                </div>
                <div className={styles.detailItem}>
                  <span className={styles.label}>Height:</span>
                  <span className={styles.value}>
                    {`${userData.heightFeet} feet ${userData.heightInches} inches`}
                  </span>
                </div>
                <div className={styles.detailItem}>
                  <span className={styles.label}>Gender:</span>
                  <span className={styles.value}>{userData.gender}</span>
                </div>
                <div className={styles.detailItem}>
                  <span className={styles.label}>Blood Group:</span>
                  <span className={styles.value}>{userData.bloodGroup}</span>
                </div>
                <div className={styles.detailItem}>
                  <span className={styles.label}>Physical Status:</span>
                  <span className={styles.value}>{userData.physicalStatus}</span>
                </div>
                <div className={styles.detailItem}>
                  <span className={styles.label}>Religion:</span>
                  <span className={styles.value}>{userData.religion}</span>
                </div>
                <div className={styles.detailItem}>
                  <span className={styles.label}>Marital Status:</span>
                  <span className={styles.value}>{userData.maritalStatus}</span>
                </div>
                <div className={styles.detailItem}>
                  <span className={styles.label}>NID Number:</span>
                  <span className={styles.value}>{userData.nidNumber}</span>
                </div>
                <div className={styles.detailItem}>
                  <span className={styles.label}>Citizenship:</span>
                  <span className={styles.value}>{userData.citizenship}</span>
                </div>
              </div>
            </section>

            {/* Contact info */}
            <section className={styles.container}>
              <h2 className={styles.sectionTitle}>Contact Information:</h2>
              <div className={styles.sectionContent}>
                <p className={styles.detailItem}>
                  <span className={styles.label}>Phone:</span>
                  <span className={styles.value}>{userData.phoneNumber}</span>
                </p>
                <p className={styles.detailItem}>
                  <span className={styles.label}>Email:</span>
                  <span className={styles.value}>{userData.email}</span>
                </p>
              </div>
            </section>

            {/* Address */}
            <section className={styles.container}>
              <h2 className={styles.sectionTitle}>Present Address</h2>
              <div className={styles.address}>{userData.presentAddress}</div>
              <div className={styles.sectionContent}>
                <div className={styles.detailItem}>
                  <span className={styles.label}>City:</span>
                  <span className={styles.value}>{userData.city}</span>
                </div>
                <div className={styles.detailItem}>
                  <span className={styles.label}>Country:</span>
                  <span className={styles.value}>{userData.country}</span>
                </div>
                <div className={styles.detailItem}>
                  <span className={styles.label}>Residence status:</span>
                  <span className={styles.value}>{userData.residenceStatus}</span>
                </div>
              </div>

              <h2 className={styles.sectionTitle}>Permanent Address</h2>
              <div className={styles.address}>{userData.permanentAddress}</div>
              <div className={styles.sectionContent}>
                <div className={styles.detailItem}>
                  <span className={styles.label}>City:</span>
                  <span className={styles.value}>{userData.permanentCity}</span>
                </div>
                <div className={styles.detailItem}>
                  <span className={styles.label}>Country:</span>
                  <span className={styles.value}>{userData.permanentCountry}</span>
                </div>
                <div className={styles.detailItem}>
                  <span className={styles.label}>Residence status:</span>
                  <span className={styles.value}>{userData.permanentResidenceStatus}</span>
                </div>
              </div>
            </section>

            {/* Educational Background */}
            <section className={styles.container}>
              <h2 className={styles.sectionTitle}>Educational Background:</h2>
              <div className={styles.value}>{userData.highestEducationInstitution}</div>
              <div className={styles.value}>
                {userData.highestEducationDegree} - {userData.highestEducationDepartment}
              </div>
              <div className={styles.value}>
                {userData.educationalQualification || "Details not available"}
              </div>
            </section>
          </div>
        </div>
      </div>
      <BioFooter />
    </section>
  );
}

export default BioDataPage2;
