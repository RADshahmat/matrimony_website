import React from "react";
import styles from '../../styles/UserStyle/userDashboard.module.css';

function UserDashboard() {
  const profileData = {
    name: "Tanvir Ahmed Tamim",
    age: 25,
    height: "6 feet 0 inch",
    religion: "Muslim",
    bloodGroup: "O+ve",
    maritalStatus: "Never married"
  };

  const actionButtons = [
    { type: 'match', text: 'Match', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/03ffc636607730b55f260859a5e3721cca0f6240b725fd6cf2e79ef30b895d06?placeholderIfAbsent=true&apiKey=68c669943f1543b88775d643f2be81f3' },
    { type: 'support', text: 'Support', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/b9d22d0cc660212d6cd000ca585cc53e8a02ede7998970d84361912195fba421?placeholderIfAbsent=true&apiKey=68c669943f1543b88775d643f2be81f3' }
  ];

  return (
    <main className={styles.userDashboard}>
      <section className={styles.dashboardContent}>

        {/* Profile Section */}
        <div className={styles.profileSection}>
          <div className={styles.profileLayout}>
            <div className={styles.profileImageColumn}>
              <div className={styles.profileImage} role="img" aria-label="Profile picture" />
            </div>
            <div className={styles.profileInfoColumn}>
              <div className={styles.profileInfo}>
                <h1 className={styles.profileName}>{profileData.name}</h1>
                <p className={styles.profileDetails}>
                  Age: {profileData.age} Height: {profileData.height} <br />
                  Religion: {profileData.religion} Blood Group: {profileData.bloodGroup} <br />
                  Marital status: {profileData.maritalStatus}
                </p>
                <button className={styles.editButton}>Edit Full Biodata</button>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons Section */}
        <div className={styles.actionSection}>
          {actionButtons.map((button, index) => (
            <div key={index} className={`${styles.actionButton} ${styles[`${button.type}Button`]}`}>
              <div className={styles.actionButtonContent}>
                <img src={button.icon} alt={`${button.text} icon`} className={styles.actionIcon} />
                <span className={styles.actionText}>{button.text}</span>
              </div>
            </div>
          ))}
        </div>

      </section>
    </main>
  );
}

export default UserDashboard;
