import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from '../../styles/UserStyle/userDashboard.module.css';
import { useAuth } from '../../Axios/authContext';
import axiosInstance from '../../Axios/axios_instance';
import SupportChat from "./supportChat";

function UserDashboard() {
  const { login, userId } = useAuth();
  const [showDashboard, setShowDashboard] = useState(false);
  const [profileData, setProfileData] = useState({
    id: "",
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
            Authorization: `Bearer ${login.token}`,
          },
        });

        const data = response.data;
        setProfileData({
          id: data.id.toString(),
          name: data.fullName,
          age: data.age,
          height: `${data.height}`,
          religion: data.religion,
          bloodGroup: data.bloodGroup,
          maritalStatus: data.maritalStatus,
          picture: data.picture
        });
        setShowDashboard(true);
      } catch (error) {
        console.error("Error fetching profile data:", error);
        setShowDashboard(false);
      }
    };

    fetchProfileData();
  }, [login.token]);

  const handleLogout = () => {
    localStorage.removeItem("butterfly_user_session_token");
    window.location.href = "/login";
  };

  return (
    <main className={styles.userDashboard}>
      <section className={styles.dashboardContent}>
        {!showDashboard && <h3>Your Profile has been expired. Please contact support for activation.</h3>}
        {showDashboard && (
          <div className={styles.profileSection}>
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
                  <div className={styles.profileDetails}>
                    <div>
                      <p>Age: {profileData.age}</p>
                      <p>Religion: {profileData.religion}</p>
                      <p>Marital status: {profileData.maritalStatus}</p>
                    </div>
                    <div>
                      <p>Height: {profileData.height}</p>
                      <p>Blood Group: {profileData.bloodGroup}</p>
                    </div>
                  </div>
                  <Link to={"/edit_biodata"}>
                    <button className={styles.editButton}>Edit Full Biodata</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className={styles.actionSection}>
          {showDashboard && (
            <Link
              to={"/matchlist"}
              state={{ userId: userId }}
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
          )}
          {showDashboard && (
            <Link
              to={"/chat"}
              state={{ userId: profileData.id }}
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
            </Link>
          )}

          <div className={`${styles.actionButton} ${styles.logoutButton}`} onClick={handleLogout}>
              <div className={styles.actionButtonContent}>Log out</div>
          </div>
        </div>
          {/* Support Button */}
          <SupportChat />
      </section>
    </main>
  );
}

export default UserDashboard;
