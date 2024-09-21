import React from 'react';
import styles from '../../styles/Bio_dataStyle/bioData_header.module.css';

const BioHeader = () => {
return (
        <header className={styles.header}>
            <div className={styles.headerContent}>
                <div className={styles.nameSection}>
                    <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/1e4157e8f8ef81d8bc4eea7e3a699b923deef5045d879c5b808f793f69edab64?placeholderIfAbsent=true&apiKey=68c669943f1543b88775d643f2be81f3" alt="Logo" className={styles.logo} />
                </div>
                <div className={styles.bioDataSection}>
                    <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/ed230a44-edba-4610-b6b7-5fe6b9cb65df?placeholderIfAbsent=true&apiKey=68c669943f1543b88775d643f2be81f3" alt="Bio Data Logo" className={styles.bioDataLogo} />
                    <span className={styles.bioDataText}>Bio Data</span>
                </div>
                <aside className={styles.sideImage}>
                    <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/0f64fb1bb0b8dd05f49852af9d864a2a296de3ee2e302479dd8a1acd20adb6e7?placeholderIfAbsent=true&apiKey=68c669943f1543b88775d643f2be81f3" alt="Additional Profile" className={styles.sideProfilePic} />
                </aside>
            </div>
        </header>
    );
};

export default BioHeader;