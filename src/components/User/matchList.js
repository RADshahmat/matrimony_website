import React from "react";
import styles from '../../styles/UserStyle/matchListstyle.module.css';

function UserProfile({ name, age, height, maritalStatus, profileImg, chatImg, viewProfileHandler, chatRequestHandler }) {
  return (
    <div className={styles.profileCard}>
      <div className={styles.userInfo}>
        <div className={styles.avatarSection}>
          <img loading="lazy" src={profileImg} className={styles.img} alt="Avatar" />
        </div>
        <div className={styles.detailsSection}>
          <div className={styles.exampleCodeName}>{name}</div>
          <div className={styles.ageHeightStatus}>
            Age: {age}
            <br />
            Height: {height}
            <br />
            Marital Status: {maritalStatus}
          </div>
        </div>
      </div>
      <div className={styles.actionsSection}>
        <button className={styles.viewProfile} onClick={viewProfileHandler}>View Profile</button>
        <div className={styles.requestChatContainer}>
          <img loading="lazy" src={chatImg} className={styles.chatImg} alt="Profile Img"/>
          <button className={styles.requestChat} onClick={chatRequestHandler}>Request chat</button>
        </div>
      </div>
    </div>
  );
}

function MatchList() {
  const profiles = [
    {
      name: "Example Code Name",
      age: 21,
      height: "5 feet 6",
      maritalStatus: "Never Married",
      profileImg: "https://example.com/profile1.jpg",
      chatImg: "https://example.com/chat1.jpg",
    },
    {
        name: "Example Code Name",
        age: 21,
        height: "5 feet 6",
        maritalStatus: "Never Married",
        profileImg: "https://example.com/profile1.jpg",
        chatImg: "https://example.com/chat1.jpg",
      },
  ];

  const handleViewProfile = () => {
    // Logic for viewing profile
  };

  const handleChatRequest = () => {
    // Logic for requesting chat
  };

  return (
    <div className={styles.userDashboard}>
      {profiles.map((profile, index) => (
        <UserProfile
          key={index}
          name={profile.name}
          age={profile.age}
          height={profile.height}
          maritalStatus={profile.maritalStatus}
          profileImg={profile.profileImg}
          chatImg={profile.chatImg}
          viewProfileHandler={handleViewProfile}
          chatRequestHandler={handleChatRequest}
        />
      ))}
    </div>
  );
}

export default MatchList;
