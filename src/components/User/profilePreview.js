import React, { useState, useEffect, useRef } from "react";
import { useParams, Link, useLocation, useNavigate } from 'react-router-dom';
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import axiosInstance from '../../Axios/axios_instance'; // Update with the correct path
import styles from '../../styles/UserStyle/profilePreview.module.css';
import BioDataPage1 from '../Bio_data/page1';
import BioDataPage2 from '../Bio_data/page2';
import BioDataPage3 from '../Bio_data/page3';
import { toast, ToastContainer } from "react-toastify"; 
import 'react-toastify/dist/ReactToastify.css'; 

function ProfileView({ onRequestChat, onInterested, onNotInterested, onPrint, onShare }) {
    const location = useLocation();
    const navigate = useNavigate();
    const { userId, isLiked, chatRequested, flag } = location.state || {}; 
    const id = userId;
    const [userData, setUserData] = useState(null);
    const [marginBottomStyle, setMarginBottomStyle] = useState({});
    const [chatRequests, setChatRequests] = useState('');
    const [selectedCards, setSelectedCards] = useState('');
    const [reqchat, setReqChat] = useState('');
    const [interested, setInterested] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [loading, setIsLoading] = useState(false);

    const biodataRef = useRef(null); // Reference for the biodata pages

    console.log(id, isLiked, chatRequested, "ki re vai kaj kore na knn");

    // Fetch user data from API
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axiosInstance.get(`/users/${userId}`);
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

    // Generate PDF on Print Button Click
    const handlePrint = async () => {
        if (!biodataRef.current) return;

        const pdf = new jsPDF("p", "mm", "a4");
        const pages = biodataRef.current.children;

        for (let i = 0; i < pages.length; i++) {
            const canvas = await html2canvas(pages[i], { scale: 2 ,useCORS: true });
            const imgData = canvas.toDataURL("image/png");
            const imgWidth = 210; // A4 width in mm
            const pageHeight = 297; // A4 height in mm
            const imgHeight = (canvas.height * imgWidth) / canvas.width;

            if (i > 0) pdf.addPage();
            pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
        }

        pdf.save(`${userData.user.fullName}.pdf`);
    };

    return (
        <main className={styles.userDashboard}>
            <div className={styles.profileViewContainer}>
                <Link to="/matchlist" className={styles.profileViewingText}>&lt; Profile Viewing</Link>
                <div className={styles.headerSection}>
                    {/* Wrap BioData Pages with a reference */}
                    <div className={styles.biopreview} ref={biodataRef}>
                        <BioDataPage1 userData={userData} style={marginBottomStyle} />
                        <BioDataPage2 permission={flag} userData={userData} style={marginBottomStyle} />
                        <BioDataPage3 userData={userData} style={marginBottomStyle} />
                    </div>

                    <div className={styles.actionIcons}>
                        <button className={styles.print} onClick={handlePrint}>
                            <img src={`${process.env.PUBLIC_URL}/assets/print.svg`} alt="Print" />
                        </button>

                       {/* <button className={styles.share} onClick={onShare}>
                            <img src={`${process.env.PUBLIC_URL}/assets/share.svg`} alt="Share" />
                        </button>
                        */}
                    </div>
                </div>

                <div className={styles.actionsContainer}>
                    {/* Other Buttons */}
                </div>
            </div>
            <ToastContainer />
        </main>
    );
}

export default ProfileView;
