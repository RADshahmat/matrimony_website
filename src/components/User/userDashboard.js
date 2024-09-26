import React from "react";
import { Link } from "react-router-dom";
import styles from '../../styles/UserStyle/userDashboard.module.css';

function UserDashboard() {
  const profileData = {
    name: "Tanvir Ahmed Tamim",
    age: 25,
    height: "6 feet 0 inch",
    religion: "Muslim",
    bloodGroup: "O+ve",
    maritalStatus: "Never married",
    userId: 12345,  // Assuming this is the user ID that you want to send to the match list
  };

  const handleSupportClick = () => {
    console.log('Support button clicked');
  };

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
          {/* Match button sends userId via state */}
          <Link 
            to={"/matchlist"} 
            state={{ userId: profileData.userId }} // Passing userId through state
            className={`${styles.actionButton} ${styles.matchButton}`}
          >
            <div className={styles.actionButtonContent}>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/03ffc636607730b55f260859a5e3721cca0f6240b725fd6cf2e79ef30b895d06"
                alt="Match icon"
                className={styles.actionIcon}
              />
              <span className={styles.actionText}>Match</span>
            </div>
          </Link>

          <div className={`${styles.actionButton} ${styles.supportButton}`} onClick={handleSupportClick}>
            <div className={styles.actionButtonContent}>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/b9d22d0cc660212d6cd000ca585cc53e8a02ede7998970d84361912195fba421"
                alt="Support icon"
                className={styles.actionIcon}
              />
              <span className={styles.actionText}>Support</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default UserDashboard;
