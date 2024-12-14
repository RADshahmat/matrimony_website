import React, { useState, useEffect } from "react";
import { useParams, Link, useLocation, useNavigate } from 'react-router-dom';
import axiosInstance from '../../Axios/axios_instance'; // Update with the correct path
import styles from '../../styles/UserStyle/profilePreview.module.css';
import BioDataPage1 from '../Bio_data/page1';
import BioDataPage2 from '../Bio_data/page2';
import BioDataPage3 from '../Bio_data/page3';
import { toast,ToastContainer } from "react-toastify"; 
import 'react-toastify/dist/ReactToastify.css'; 

function ProfileView({ onRequestChat, onInterested, onNotInterested, onPrint, onShare }) {
    const location = useLocation();
    const navigate=useNavigate();
    const { userId, isLiked, chatRequested,flag } = location.state || {}; 
    const id=userId;
    const [userData, setUserData] = useState(null);
    const [marginBottomStyle, setMarginBottomStyle] = useState({});
    const [chatRequests,setChatRequests]=useState('');
    const [selectedCards,setSelectedCards]=useState('');
    const [reqchat,setReqChat]=useState('');
    const [interested,setInterested]=useState('');
    const [showModal,setShowModal]=useState(false);
    const [loading,setIsLoading]=useState(false);
console.log(id,isLiked,chatRequested,"ki re vai kaj kore na knn")
    // Fetch user data from API
    useEffect(() => {
        console.log("dhokar age id",id)
        const fetchData = async () => {
            try {
                const response = await axiosInstance.get(`/users/${userId}`);
                console.log(response.data, "User data fetched");
                setUserData(response.data);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        if (id) fetchData();
    }, [id]);

    // Set dynamic margin bottom style based on screen width
    useEffect(() => {
        const updateMarginBottomStyle = () => {
            setMarginBottomStyle(window.innerWidth <= 768 ? { marginBottom: '-240px' } : {});
        };

        updateMarginBottomStyle();
        window.addEventListener('resize', updateMarginBottomStyle);

        return () => window.removeEventListener('resize', updateMarginBottomStyle);
    }, []);


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

      useEffect(() => {
        fetchProfiles();
      }, []);
    
      const fetchProfiles = async () => {
        try {
            const response = await axiosInstance.get("/user_matches_list_individual", {
                params: { peerId: userId }
            });
          console.log(response.data,"theese are indi");
          setReqChat(response.data[0].chatRequest);
          setInterested(response.data[0].interest);
        } catch (error) {
          console.error("Error fetching profiles:", error);
        }
      };

      const handleNotInterested = async()=>{
       setIsLoading(true);
        try {
          const response = await axiosInstance.post('/not_interested', { userId: id });
          if (response.status==200) {
              console.log('Match removed successfully');
              setShowModal(false);
              setIsLoading(false);
              navigate('/matchlist');
          }
      } catch (error) {
          console.error('Error removing match:', error);
          setIsLoading(false);
          toast.error('Something Went wrong. Please try again.')
      }
      }

    return (
        <main className={styles.userDashboard}>
            <div className={styles.profileViewContainer}>
                <Link to="/matchlist" className={styles.profileViewingText}>&lt; Profile Viewing</Link>
                <div className={styles.headerSection}>
                    <div className={styles.biopreview}>
                        <BioDataPage1 permission={flag} userData={userData} style={marginBottomStyle} />
                        <BioDataPage2 permission={flag} userData={userData} style={marginBottomStyle} />
                        <BioDataPage3 permission={flag} userData={userData} style={marginBottomStyle} />
                    </div>

                    <div className={styles.actionIcons}>
                        <button className={styles.print} onClick={onPrint}>
                            <img src={`${process.env.PUBLIC_URL}/assets/print.svg`} alt="Print" />
                        </button>

                        <button className={styles.share} onClick={onShare}>
                            <img src={`${process.env.PUBLIC_URL}/assets/share.svg`} alt="Share" />
                        </button>
                    </div>
                </div>

                <div className={styles.actionsContainer}>
                    <button className={styles.requestChat} onClick={() => handleChatRequestClick(id,reqchat)}>
                        <img src={`${process.env.PUBLIC_URL}/assets/chat_icon.svg`} alt="Chat Icon" />
                        {reqchat=='1'?'Requested':'Request Chat'}
                    </button>
                    <button className={styles.interested} onClick={() => handleHeartClick(id,interested)}>
                        <img src={`${process.env.PUBLIC_URL}/assets/korrahLove.svg`} alt="Heart Icon" />
                       {interested=='1'?'Interested':'Send Intereste'} 
                    </button>
                    <button className={styles.notInterested} onClick={()=>setShowModal(true)}>
                        <img src={`${process.env.PUBLIC_URL}/assets/redbgCross.svg`} alt="Cross Icon" />
                        Not Interested
                    </button>
                </div>
            </div>
            {showModal && (
                <div className={styles.modalOverlay}>
                    <div className={styles.modalContent}>
                        <button className={styles.closeButton} onClick={() => setShowModal(false)}>
                            &times;
                        </button>
                        <p>Are you sure? This match will be removed.</p>
                        <div className={styles.modalActions}>
                            <button className={styles.yesButton} onClick={handleNotInterested}>{loading?'Loading...':'Yes'}</button>
                            <button className={styles.noButton} onClick={() => setShowModal(false)}>No</button>
                        </div>
                    </div>
                </div>
            )}
            <ToastContainer/>
        </main>
    );
}

export default ProfileView;
