import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from '../../styles/UserStyle/userDashboard.module.css';
import { useAuth } from '../../Axios/authContext';
import axiosInstance from '../../Axios/axios_instance';

function UserDashboard() {
  const { login, userId } = useAuth(); // Assuming useAuth provides userId
  const [showDashboard,setShowDashboard]=useState()
  const [profileData, setProfileData] = useState({
    name: "",
    age: "",
    height: "",
    religion: "",
    bloodGroup: "",
    maritalStatus: "",
    picture: ""
  });

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await axiosInstance.get(`/user-profile`, {
          headers: {
            Authorization: `Bearer ${login.token}`, // Assuming you have a token from login
          },
        });

        const data = response.data;
        setProfileData({
          name: data.fullName,
          age: data.age,
          height: `${data.height}`,
          religion: data.religion,
          bloodGroup: data.bloodGroup,
          maritalStatus: data.maritalStatus,
          picture: data.picture // Assuming the picture URL is returned as part of the response
        });
        setShowDashboard(true)
      } catch (error) {
        console.error("Error fetching profile data:", error);
        setShowDashboard(false)
      }
    };

    fetchProfileData();
  }, [login.token]);

  const handleSupportClick = () => {
    console.log('Support button clicked');
  };

  return (
    <main className={styles.userDashboard}>
      <section className={styles.dashboardContent}>
        {!showDashboard&& <h3>Your Profile has Beeen Expired Please Contact support for Activation.</h3>}
        {showDashboard&&<div className={styles.profileSection}>
          <div className={styles.profileLayout}>
            <div className={styles.profileImageColumn}>
            <div 
                className={styles.profileImage} 
                role="img" 
                aria-label="Profile picture" 
                style={{ backgroundImage: `url(https://backend.butterfly.hurairaconsultancy.com/${profileData.picture})` }} 
              />
            </div>
            <div className={styles.profileInfoColumn}>
              <div className={styles.profileInfo}>
                <h1 className={styles.profileName}>{profileData.name}</h1>
                <p className={styles.profileDetails}>
                  Age: {profileData.age} Height: {profileData.height} <br />
                  Religion: {profileData.religion} Blood Group: {profileData.bloodGroup} <br />
                  Marital status: {profileData.maritalStatus}
                </p>
                <Link 
            to={"/edit_biodata"} ><button className={styles.editButton}>Edit Full Biodata</button></Link>
              </div>
            </div>
          </div>
        </div>}

        {/* Action Buttons Section */}
        <div className={styles.actionSection}>
          {/* Match button sends userId via state */}
          {showDashboard&&<Link 
            to={"/matchlist"} 
            state={{ userId: userId }} // Passing userId through state
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
          </Link>}
         {showDashboard&& <Link 
            to={"/chat"} 
            state={{ userId: userId }} // Passing userId through state
            className={`${styles.actionButton} ${styles.matchButton}`}
          >
            <div className={styles.actionButtonContent}>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/03ffc636607730b55f260859a5e3721cca0f6240b725fd6cf2e79ef30b895d06"
                alt="Match icon"
                className={styles.actionIcon}
              />
              <span className={styles.actionText}>Message</span>
            </div>
          </Link>}

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
