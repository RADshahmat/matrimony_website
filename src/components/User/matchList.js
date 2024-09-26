import React, { useState } from "react";
import styles from '../../styles/UserStyle/matchListstyle.module.css';
import { Link } from "react-router-dom";

function UserProfile({ userId, name, age, height, maritalStatus, profileImg, isLiked, onHeartClick, viewProfileHandler, chatRequestHandler }) {
  return (
    <div className={styles.profileCard}>
      <input type="hidden" value={userId} /> {/* HuserIdden card userId */}
      <div className={styles.userInfo}>
        <div className={styles.avatarSection}>
          <img loading="lazy" src={profileImg} className={styles.img} alt="" />
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
        <Link to={'/ProfileViewPage'} state={{ userId: UserProfile.useruserId }}  className={styles.viewProfile} onClick={viewProfileHandler}>View Profile</Link>
        <div className={styles.requestChatContainer} onClick={chatRequestHandler}>
          <img loading="lazy" src={`${process.env.PUBLIC_URL}/assets/chat_icon.svg`} className={styles.chatImg} alt="Chat Icon"/>
          <button className={styles.requestChat}>Request chat</button>
        </div>
        {/* Heart shape using CSS, color changes based on selection */}
        <div
          className={`${styles.heartIcon} ${isLiked ? styles.liked : ''}`}
          onClick={() => onHeartClick(userId)}
        ></div>
      </div>
    </div>
  );
}

function MatchList() {
  const [selectedCards, setSelectedCards] = useState([]);

  const profiles = [
    { userId: 1, name: "Example Code Name", age: 21, height: "5 feet 6", maritalStatus: "Never Married", profileImg: "https://example.com/profile1.jpg" },
    { userId: 2, name: "Example Code Name", age: 21, height: "5 feet 6", maritalStatus: "Never Married", profileImg: "https://example.com/profile1.jpg" },
    { userId: 3, name: "Example Code Name", age: 21, height: "5 feet 6", maritalStatus: "Never Married", profileImg: "https://example.com/profile1.jpg" },
    { userId: 4, name: "Example Code Name", age: 21, height: "5 feet 6", maritalStatus: "Never Married", profileImg: "https://example.com/profile1.jpg" },
    { userId: 1, name: "Example Code Name", age: 21, height: "5 feet 6", maritalStatus: "Never Married", profileImg: "https://example.com/profile1.jpg" },
    { userId: 2, name: "Example Code Name", age: 21, height: "5 feet 6", maritalStatus: "Never Married", profileImg: "https://example.com/profile1.jpg" },
    { userId: 3, name: "Example Code Name", age: 21, height: "5 feet 6", maritalStatus: "Never Married", profileImg: "https://example.com/profile1.jpg" },
    
];

  const handleViewProfile = () => {
    // Logic for viewing profile
  };

  const handleChatRequest = () => {
    // Logic for requesting chat
  };

  const handleHeartClick = (userId) => {
    // Toggle the selected state of the card
    setSelectedCards(prevSelected => 
      prevSelected.includes(userId)
        ? prevSelected.filter(carduserId => carduserId !== userId)  // Deselect if already selected
        : [...prevSelected, userId]  // Add to selected if not already
    );
  };

  return (
    <main className={styles.userDashboard}>
        <div className={styles.cardcontainer}>
        <p className={styles.title}>&lt; Match List</p>
            {profiles.map(profile => (
            <UserProfile
            key={profile.userId}
            userId={profile.userId}  // Pass the backend userId
            name={profile.name}
            age={profile.age}
            height={profile.height}
            maritalStatus={profile.maritalStatus}
            profileImg={profile.profileImg}
            isLiked={selectedCards.includes(profile.userId)}  // Check if the card is liked
            onHeartClick={handleHeartClick}  // Handle heart click
            viewProfileHandler={handleViewProfile}
            chatRequestHandler={handleChatRequest}
            />
        ))}
        </div>
    </main>

  );
}

export default MatchList;
