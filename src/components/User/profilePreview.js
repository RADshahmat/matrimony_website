import React from 'react';
import styles from '../../styles/UserStyle/profilePreview.module.css';
import BioDataPage1 from '../Bio_data/page1'; 

function ProfileView({ onRequestChat, onInterested, onNotInterested, onPrint, onShare }) {
  return (
    <main className={styles.userDashboard}>
        <div className={styles.profileViewContainer}>
            <div className={styles.headerSection}>
                    <p className={styles.profileViewingText}>&lt; Profile Viewing</p>
                        <BioDataPage1 />
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


