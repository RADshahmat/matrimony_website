import React, { useState, useEffect } from "react";
import { useParams, Link } from 'react-router-dom';
import axiosInstance from '../../Axios/axios_instance'; // Update with the correct path
import styles from '../../styles/UserStyle/profilePreview.module.css';
import BioDataPage1 from '../Bio_data/page1';
import BioDataPage2 from '../Bio_data/page2';
import BioDataPage3 from '../Bio_data/page3';

function ProfileView({ onRequestChat, onInterested, onNotInterested, onPrint, onShare }) {
    const { id } = useParams(); 
    const [userData, setUserData] = useState(null);
    const [marginBottomStyle, setMarginBottomStyle] = useState({});

    // Fetch user data from API
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axiosInstance.get(`/users/${id}`);
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

    return (
        <main className={styles.userDashboard}>
            <div className={styles.profileViewContainer}>
                <Link to="/matchlist" className={styles.profileViewingText}>&lt; Profile Viewing</Link>
                <div className={styles.headerSection}>
                    <div className={styles.biopreview}>
                        <BioDataPage1 userData={userData} style={marginBottomStyle} />
                        <BioDataPage2 userData={userData} style={marginBottomStyle} />
                        <BioDataPage3 userData={userData} style={marginBottomStyle} />
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
                    <button className={styles.requestChat} onClick={onRequestChat}>
                        <img src={`${process.env.PUBLIC_URL}/assets/chat_icon.svg`} alt="Chat Icon" />
                        Request Chat
                    </button>
                    <button className={styles.interested} onClick={onInterested}>
                        <img src={`${process.env.PUBLIC_URL}/assets/korrahLove.svg`} alt="Heart Icon" />
                        Interested
                    </button>
                    <button className={styles.notInterested} onClick={onNotInterested}>
                        <img src={`${process.env.PUBLIC_URL}/assets/redbgCross.svg`} alt="Cross Icon" />
                        Not Interested
                    </button>
                </div>
            </div>
        </main>
    );
}

export default ProfileView;
