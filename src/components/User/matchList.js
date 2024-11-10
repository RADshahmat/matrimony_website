import React, { useState, useEffect } from "react";
import styles from "../../styles/UserStyle/matchListstyle.module.css";
import { Link } from "react-router-dom";
import axiosInstance from "../../Axios/axios_instance";

function UserProfile({
  id,
  userId,
  name,
  age,
  height,
  maritalStatus,
  profileImg,
  isLiked,
  chatRequested,
  onHeartClick,
  onChatRequestClick,
}) {

  const updateView=async (id)=>{

    await axiosInstance.post(`/update_view_stat`,{id})
  }
  return (
    <div className={styles.profileCard}>
      <input type="hidden" value={userId} /> {/* Hidden card userId */}
      <div className={styles.userInfo}>
        <div className={styles.avatarSection}>
          <img loading="lazy" src={`https://backend.butterfly.hurairaconsultancy.com/${profileImg}`} className={styles.img} alt="" />
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
        <Link
          to={"/ProfileViewPage"}
          state={{ userId }}
          className={styles.viewProfile}
          onClick={updateView(id)}
        >
          View Profile
        </Link>
        <div
          className={styles.requestChatContainer}
          onClick={() => onChatRequestClick(userId,chatRequested)}
        >
          <img
            loading="lazy"
            src={`${process.env.PUBLIC_URL}/assets/chat_icon.svg`}
            className={styles.chatImg}
            alt="Chat Icon"
          />
          <button className={styles.requestChat}>
            {chatRequested=='1' ? "Cancel Request" : "Request Chat"}
          </button>
        </div>
        <div
          className={`${styles.heartIcon} ${isLiked=='1' ? styles.liked : ""}`}
          onClick={() => onHeartClick(userId,isLiked)}
        ></div>
      </div>
    </div>
  );
}

function MatchList() {
  const [selectedCards, setSelectedCards] = useState([]);
  const [chatRequests, setChatRequests] = useState([]);
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    fetchProfiles();
  }, []);

  const fetchProfiles = async () => {
    try {
      const response = await axiosInstance.get("/user_matches_list");
      setProfiles(response.data);
    } catch (error) {
      console.error("Error fetching profiles:", error);
    }
  };

  const handleChatRequestClick = async (userId,chatreq) => {
    const isChatRequested = chatreq=='0';
    console.log(userId,"jay too")
    try {
      const response = await axiosInstance.post("/toggleChatRequest", {
        userId: userId,
        chatRequested: isChatRequested,
      });

      if (response.data.success) {
        setChatRequests((prev) =>
          isChatRequested
            ? prev.filter((id) => id !== userId) 
            : [...prev, userId] 
        );
        fetchProfiles()
      }
    } catch (error) {
      console.error("Error sending chat request:", error);
    }
  };

  const handleHeartClick = async (userId,liked) => {
    const isLiked = liked=='0';
    try {
      const response = await axiosInstance.post("/toggleInterest", {
        userId,
        liked: isLiked, 
      });

      if (response.data.success) {
        setSelectedCards((prev) =>
          isLiked
            ? prev.filter((id) => id !== userId)
            : [...prev, userId]
        );
        fetchProfiles();
      }
    } catch (error) {
      console.error("Error updating like status:", error);
    }
  };
console.log(profiles)
  return (
    <main className={styles.userDashboard}>
      <div className={styles.cardcontainer}>
        <Link to="/userDashboard" className={styles.title}>
          &lt; Match List
        </Link>
        {profiles.map((profile, index) => (
          <UserProfile
            key={index}
            id={profile.id}
            userId={profile.matchUserId}
            name={profile.name}
            age={profile.age}
            height={profile.height}
            maritalStatus={profile.maritalStatus}
            profileImg={profile.profileImg}
            isLiked={profile.interest}
            chatRequested={profile.chatRequest}
            onHeartClick={handleHeartClick}
            onChatRequestClick={handleChatRequestClick}
          />
        ))}
      </div>
    </main>
  );
}

export default MatchList;
