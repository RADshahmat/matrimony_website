import React, { useState, useEffect } from "react";
import Header from '../components/header'; 
import Footer from '../components/footer'; 
import BioDataPage1 from '../components/Bio_data/page1';
import BioDataPage2 from '../components/Bio_data/page2';
import BioDataPage3 from '../components/Bio_data/page3';
import styles from '../styles/Bio_dataStyle/cvpreview.module.css';

function CVpreview() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        // Update the isMobile state when the window is resized
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const pages = [
        { component: <BioDataPage1 key="page1" />, pageIndex: 1 },
        { component: <BioDataPage2 key="page2" />, pageIndex: 2 },
        { component: <BioDataPage3 key="page3" />, pageIndex: 3 }
    ];

    const visiblePages = isMobile
        ? pages.slice(currentIndex, currentIndex + 1) // Show 1 page for mobile
        : pages.slice(currentIndex, currentIndex + 2); // Show 2 pages for desktop

    const handleNext = () => {
        if (currentIndex + (isMobile ? 1 : 2) < pages.length) {
            setCurrentIndex(currentIndex + (isMobile ? 1 : 2));
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - (isMobile ? 1 : 2));
        }
    };

    return (
        <div>
            <Header />
            <div className={styles.CVpreview}>
                <p className={styles.pagetitle}>Preview Your CV</p>
                <div className={styles.pagecontainer}>
                    {visiblePages.map(({ component, pageIndex }) => (
                        <div key={pageIndex} className={styles.pageWrapper}>
                            {component}
                            <div className={styles.pageIndex}>Page {pageIndex}</div>
                        </div>
                    ))}
                    {currentIndex > 0 && (
                        <img
                            src={`${process.env.PUBLIC_URL}/assets/left_arrow.svg`}
                            alt="Previous"
                            className={styles.arrowLeft}
                            onClick={handlePrev}
                        />
                    )}
                    {currentIndex + (isMobile ? 1 : 2) < pages.length && (
                        <img
                            src={`${process.env.PUBLIC_URL}/assets/right_arrow.svg`}
                            alt="Next"
                            className={styles.arrowRight}
                            onClick={handleNext}
                        />
                    )}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default CVpreview;
